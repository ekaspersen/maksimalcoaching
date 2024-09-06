"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { ButtonPrimary } from "../utilities/Buttons";

export default function SubscribeButton({
    priceId,
    coachId,
    customerComment,
    couponCode,
}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubscribe = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    priceId,
                    coachId,
                    customerComment,
                    couponCode,
                }), // Include couponCode here
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.error || "Failed to create checkout session"
                );
            }
            const { sessionId } = await response.json();
            const stripe = await loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
            );
            if (stripe) {
                await stripe.redirectToCheckout({ sessionId });
            } else {
                throw new Error("Stripe.js failed to load");
            }
        } catch (error) {
            console.error("Error:", error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button className="w-fit" onClick={handleSubscribe} disabled={loading}>
            <ButtonPrimary>
                {loading ? "Loading..." : "Bestill coaching"}
            </ButtonPrimary>
        </button>
    );
}
