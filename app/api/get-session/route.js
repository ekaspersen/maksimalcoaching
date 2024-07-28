import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
});

export async function POST(request) {
    try {
        const { sessionId } = await request.json();

        if (!sessionId) {
            return NextResponse.json(
                { error: "Session ID is required" },
                { status: 400 }
            );
        }

        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ["line_items"],
        });

        return NextResponse.json(session);
    } catch (error) {
        console.error("Error retrieving session:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
