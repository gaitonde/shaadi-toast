'use client'

import { Suspense, useEffect, useState } from 'react'
import { Inter, Merriweather } from 'next/font/google'
import Head from 'next/head'
import { useSearchParams } from "next/navigation"
import { ClipboardCopy } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] })

function ImportantSection() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className={`text-2xl font-bold text-[#8b0000] mb-4 ${merriweather.className}`}>
        Important: Save Your Speech
      </h2>
      <p className="text-lg text-[#333] mb-6 font-bold">
        Please copy your speech NOW. This speech will not be available once you leave this page.
      </p>
    </section>
  )
}

function SpeechContent({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section className="text-center mb-8">
{/*
      <h1 className={`text-4xl md:text-5xl font-bold text-[#8b0000] mb-6 ${merriweather.className} leading-tight`}>
        Your Toast is Ready!
      </h1>
 */}
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 bg-[#8b0000] text-white rounded-full hover:bg-[#a50000] transition-colors duration-300"
          aria-label="Copy speech to clipboard"
        >
          <ClipboardCopy size={20} />
        </button>
        {isCopied && (
          <div className="absolute top-4 right-16 bg-green-500 text-white px-2 py-1 rounded text-sm">
            Copied!
          </div>
        )}
        <p className="text-lg text-[#333] mb-4">
          {content}
        </p>
      </div>
    </section>
  )
}

export default function SuccessPage() {
  const [speechContent, setSpeechContent] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const localSpeech = localStorage.getItem('speechResult') || ''
    const json = localSpeech ? JSON.parse(localSpeech) : {}
    setSpeechContent(json.speech)
  }, [searchParams])

  return (
    <>
      <Head>
        <title>Your Toast is Ready! | ShaadiToast</title>
        <meta name="description" content="Your personalized wedding toast is ready to view and copy" />
      </Head>
      <div className={`min-h-screen bg-[#fff5e6] ${inter.className}`}>
        <header className="bg-[#8b0000] text-white py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <h1 className={`text-2xl ${merriweather.className} font-bold`}>ShaadiToast</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <ImportantSection />
          <Suspense fallback={<div>Loading...</div>}>
            <SpeechContent content={speechContent} />
          </Suspense>
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