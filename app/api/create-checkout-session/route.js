// app/api/create-checkout-session/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
});

// Map human-readable codes to actual Stripe coupon IDs
// E.g., "newyears25" => "coupon_abc123"
const COUPON_MAP = {
    FRIENDS30: "promo_1RNvOhRsF5Uw8CjuEsnm6gon", // <-- promoCode: "Coupon_ID",
    COACHING20: "promo_1QpcuGRsF5Uw8CjuPH56nlb7", // <-- promoCode: "Coupon_ID",
    STRONG1000: "promo_1PvhJkRsF5Uw8CjuUD59WYE1", // <-- promoCode: "Coupon_ID",
};
export async function POST(request) {
    try {
        const { priceId, coachId, customerComment, couponCode } =
            await request.json();

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

        // Base session configuration
        const sessionData = {
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            customer: customer.id,
        };

        // If a coupon code is provided, map to correct Stripe coupon ID
        if (couponCode) {
            // Normalize user input (in case they type uppercase, etc.)
            const normalizedCode = couponCode.trim().toUpperCase();
            const stripePromoId = COUPON_MAP[normalizedCode];

            if (stripePromoId) {
                sessionData.discounts = [
                    {
                        promotion_code: stripePromoId,
                    },
                ];
            } else {
                return NextResponse.json(
                    { error: `Ugyldig kupongkode: ${couponCode}` },
                    { status: 400 }
                );
            }
        }

        // Create the Checkout Session
        const session = await stripe.checkout.sessions.create(sessionData);

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
