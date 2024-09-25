import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20', // Use the latest API version
});

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1Q2cY7R8kMC0X94hIslMnmFi', //hard-coded price for now (this ties to the price in the Stripe Sanddbox)
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${req.headers.get('origin')}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/speech`,
    });

    console.log('XXX123 session', session.url);
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error. Unable to create checkout session.", err);
    return NextResponse.json({ url: `${req.headers.get('origin')}/speech` });
  }
}