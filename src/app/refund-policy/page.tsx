'use client'

import { Inter, Merriweather } from 'next/font/google'
import Head from 'next/head'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] })

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy | ShaadiToast</title>
        <meta name="description" content="ShaadiToast refund policy for AI-generated wedding toasts" />
      </Head>
      <div className={`min-h-screen bg-[#fff5e6] ${inter.className}`}>
        <header className="bg-[#8b0000] text-white py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <Link href="/" className="hover:text-[#ffd700] transition-colors duration-300">
            <h1 className={`text-2xl ${merriweather.className} font-bold`}>ShaadiToast</h1>
            </Link>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h1 className={`text-3xl font-bold text-[#8b0000] mb-6 ${merriweather.className}`}>
              Refund Policy
            </h1>
            <div className="space-y-4 text-[#333]">
              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Refund Eligibility
              </h2>
              <p>
                Customers can request a full refund within seven (7) calendar days from the purchase date.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Refund Request Process
              </h2>
              <p>
                To initiate a refund, please reach out to our customer support team at <strong>shaaditoast@greenpenailabs.com</strong>, providing your email address and a brief explanation for the request.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Refund Timeframe
              </h2>
              <p>
                Once approved, refunds will be processed and returned to the original payment method within ten (10) business days.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Delayed or Missing Refunds
              </h2>
              <p>
                If your refund hasn&apos;t been received within the expected timeframe, please check with your bank or credit card provider, as it may take some time for the refund to be posted. If you&apos;ve done this and still haven&apos;t received it, contact us at <strong>shaaditoast@greenpenailabs.com</strong>.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Discounted Purchases
              </h2>
              <p>
                Speeches purchased with a discount or coupon code are not eligible for refunds.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Policy Updates
              </h2>
              <p>
                ShaadiToast reserves the right to modify this refund policy at any time. Changes will be updated on this page.
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-[#8b0000] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${merriweather.className}`}>ShaadiToast</h2>
                <p className="text-sm max-w-md">
                  We believe every wedding speech should be as unique and vibrant as the celebration itself. Our AI-powered assistant is here to help you craft words that resonate deeply with your loved ones, capturing the essence of Indian weddings while relieving you of the stress of speech writing.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Pages</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Craft Your Speech</a></li>
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Refund policy</a></li>
                    <li><a href="https://www.shaaditoast.com" className="hover:text-[#ffd700] transition-colors duration-300">FAQs</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="/terms" className="hover:text-[#ffd700] transition-colors duration-300">Terms</a></li>
                    <li><a href="/privacy-policy" className="hover:text-[#ffd700] transition-colors duration-300">Privacy</a></li>
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-[#a50000] pt-8 text-sm text-center">
              <p>&copy; {new Date().getFullYear()} ShaadiToast. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
