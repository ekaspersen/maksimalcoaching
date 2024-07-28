"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl w-full bg-clr_primary_dark p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-clr_black">
                    Bestilling vellykket!
                </h1>
                {sessionData && (
                    <>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">
                                Bestillingsdetaljer:
                            </h2>
                            <p>
                                <strong>Coach ID:</strong>{" "}
                                {sessionData.metadata.coachId}
                            </p>
                            <p>
                                <strong>Din kommentar:</strong>{" "}
                                {sessionData.metadata.customerComment
                                    ? sessionData.metadata.customerComment
                                    : "Ingen kommentar gitt"}
                            </p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">
                                Abonnementsdetaljer:
                            </h2>
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
                    </>
                )}
                <div className="text-center">
                    <p className="mb-4">
                        Takk for din bestilling. Vi ser frem til å jobbe med
                        deg!
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-clr_black font-bold px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
                    >
                        Tilbake til hjemmesiden
                    </Link>
                </div>
            </div>
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
