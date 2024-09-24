import Link from 'next/link';

export default function CheckoutCanceledPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Payment Canceled</h1>
      <p className="text-xl mb-8">Your payment was canceled. No charges were made.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Return to Home
      </Link>
    </div>
  );
}