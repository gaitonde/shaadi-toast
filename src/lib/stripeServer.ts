import Stripe from 'stripe';

function createStripeClient(useSandbox: boolean): Stripe {
  const secretKey = useSandbox
    ? process.env.STRIPE_SECRET_KEY_TEST
    : process.env.STRIPE_SECRET_KEY_LIVE;

  if (!secretKey) {
    throw new Error(`Stripe secret key not found for ${useSandbox ? 'sandbox' : 'live'} mode`);
  }

  return new Stripe(secretKey, { apiVersion: '2024-06-20' });
}

export { createStripeClient };
