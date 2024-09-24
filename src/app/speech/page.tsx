'use client'

import { Suspense } from 'react'
import { Inter, Merriweather } from 'next/font/google'
import Head from 'next/head'
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] })

function SpeechContent({ content }: { content: string }) {
  const words = content.split(' ')
  const visibleContent = words.slice(0, 100).join(' ')
  const blurredContent = words.slice(100, 200).join(' ')

  return (
    <section className="text-center mb-8">
      <h1 className={`text-4xl md:text-5xl font-bold text-[#8b0000] mb-6 ${merriweather.className} leading-tight`}>
        Your Toast is Ready!
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg text-[#333] mb-4 relative">
          <span>{visibleContent}</span>
          <span className="blur-sm">{' ' + blurredContent}</span>
          <span className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></span>
        </p>
      </div>
    </section>
  )
}

export default function SpeechPage() {
  const [speechContent, setSpeechContent] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const speech = searchParams.get('speech') || ''
    setSpeechContent(speech)
  }, [searchParams])

  return (
    <>
      <Head>
        <title>Your Toast is Ready! | ShaadiToast</title>
        <meta name="description" content="Your personalized wedding toast is ready to view" />
      </Head>
      <div className={`min-h-screen bg-[#fff5e6] ${inter.className}`}>
        <header className="bg-[#8b0000] text-white py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <h1 className={`text-2xl ${merriweather.className} font-bold`}>ShaadiToast</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-24">
          <Suspense fallback={<div>Loading...</div>}>
            <SpeechContent content={speechContent} />
          </Suspense>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className={`text-2xl font-bold text-[#8b0000] mb-4 ${merriweather.className}`}>
              Get Your Full Speech
            </h2>
            <p className="text-lg text-[#333] mb-6">
              Unlock your complete personalized speech for just $4.99.
            </p>

            <form action="/api/create-checkout-session" method="POST">
              <button
                type="submit"
                className="w-full bg-[#8b0000] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#a50000] transition-colors duration-300"
              >
                Pay $4.99 and Get Your Speech
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              By clicking &quot;Pay $4.99 and Get Your Speech&quot;, you agree to our Terms of Service and Privacy Policy. Your payment will be processed securely, and your speech will be delivered to the email associated with your payment method. All sales are final.
            </p>
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
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Get started</a></li>
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Refund policy</a></li>
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">FAQs</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Terms</a></li>
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Privacy</a></li>
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