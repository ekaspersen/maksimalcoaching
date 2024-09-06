"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ButtonPrimaryDark } from "../utilities/Buttons";

function SuccessContent() {
    const [sessionData, setSessionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const sessionId = searchParams.get("session_id");
        if (sessionId) {
            fetchSessionData(sessionId);
        } else {
            setError("No session ID found");
            setLoading(false);
        }
    }, [searchParams]);

    const fetchSessionData = async (sessionId) => {
        try {
            const response = await fetch("/api/get-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sessionId }),
            });
            if (!response.ok) {
                throw new Error("Failed to fetch session data");
            }
            const data = await response.json();
            setSessionData(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="inner my-16 md:my-20 flex flex-col gap-8 py-48">
            <h1 className="h1_text">Bestilling vellykket!</h1>

            {sessionData && (
                <>
                    <div className="flex flex-col">
                        <h2>Abonnementsdetaljer:</h2>
                        <p>
                            <strong>Pakke:</strong>{" "}
                            {sessionData.line_items.data[0].description}
                        </p>
                        <p>
                            <strong>Pris:</strong>{" "}
                            {(sessionData.amount_total / 100).toFixed(2)}{" "}
                            {sessionData.currency.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-xl italic font-bold">
                            Tusen takk for din bestilling,{" "}
                            {sessionData.customer_details.name}!
                        </p>
                        <p className="">
                            Du vil snart motta en e-post med instruksjoner for å
                            verifisere din konto.
                        </p>
                        <p className="">
                            E-posten er sendt til:{" "}
                            {sessionData.customer_details.email}.
                        </p>
                    </div>
                </>
            )}
            <p className="text-xl italic font-bold">
                Vi ser frem til å jobbe med deg!
            </p>
            <Link className="w-fit" href="/">
                <ButtonPrimaryDark>Tilbake til hjemmesiden</ButtonPrimaryDark>
            </Link>
        </div>
    );
}

export default function Success() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
