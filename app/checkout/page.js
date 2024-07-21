import React from "react";
import SubscribeButton from "../components/SubscribeButton";

export const metadata = {
    title: "Maksimal Coaching | Checkout",
    description:
        "Maksimal Coaching, nå dine mål med sertifiserte personlige trenere online",
};

export default function Checkout() {
    return (
        <div className="grid items-baseline min-h-screen gap-4">
            <h1>Checkout</h1>
            <span>Fortsett til betaling</span>
            <SubscribeButton />
        </div>
    );
}
