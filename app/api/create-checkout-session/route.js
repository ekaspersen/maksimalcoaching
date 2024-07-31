import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
});

export async function POST(request) {
    try {
        const { priceId, coachId, customerComment } = await request.json();

        if (!priceId || !coachId) {
            return NextResponse.json(
                { error: "Price ID and Coach ID are required" },
                { status: 400 }
            );
        }

        // Create a new customer with the comment in metadata
        const customer = await stripe.customers.create({
            metadata: {
                customerComment: customerComment,
                coachId: coachId,
            },
        });

        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            discounts: [
                {
                    coupon: "cDywEfqE",
                },
            ],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            customer: customer.id,
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
