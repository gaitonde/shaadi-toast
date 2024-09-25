import { NextResponse } from 'next/server';
import { createStripeClient } from '@/lib/stripeServer';

export async function POST(req: Request) {
  const { email, useSandbox } = await req.json();

  const stripe = createStripeClient(useSandbox);
  const price = useSandbox ? process.env.PRODUCT_ID_TEST : process.env.PRODUCT_ID_LIVE;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/speech`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error. Unable to create checkout session.", err);
    return NextResponse.json({ url: `${req.headers.get('origin')}/speech` });
  }
}