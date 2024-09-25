'use client'

import Image from 'next/image'
import { Merriweather, Inter } from 'next/font/google'
import { Pen, Sparkles, MessageCircle } from 'lucide-react'
import { useRouter } from "next/navigation"

const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export function LandingPage() {
  const router = useRouter()

  const handleStartWriting = () => {
    router.push('/wiz')
  }

  return (
    <div className={`min-h-screen bg-[#fff5e6] ${inter.className}`}>
      <header className="bg-[#8b0000] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`text-2xl ${merriweather.className} font-bold`}>ShaadiToast</h1>
          <button className="bg-[#ffa500] text-[#8b0000] font-semibold py-2 px-4 rounded-full text-sm hover:bg-[#ff8c00] transition-colors duration-300"
          onClick={handleStartWriting}>
            Craft Your Speech
          </button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-24">
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold text-[#8b0000] mb-6 ${merriweather.className} leading-tight`}>
            Create Your Personalized Desi Wedding Speech
          </h1>
          <p className="text-xl text-[#333] mb-8">
            Effortlessly craft a personal, culturally rich wedding speech with our AI-powered tool, powered by ChatGPT.
          </p>
          <button className="bg-[#ffa500] text-[#8b0000] font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#ff8c00] transition-colors duration-300"
          onClick={handleStartWriting}>
            Craft Your Speech
          </button>
        </section>

        <section className="mb-16">
          <Image
            src="/images/shaaditoast-1.jpg"
            alt="Desi wedding celebration"
            width={200}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </section>

        <section className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#8b0000] mb-6 ${merriweather.className}`}>Simple Steps to Your Perfect Speech</h2>
          <p className="text-lg md:text-xl text-[#333] max-w-3xl mx-auto mb-12">
            Creating a memorable Desi wedding speech is easier than you think. Our intuitive process guides you through each step, ensuring your words capture the essence of the occasion.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd700] rounded-full p-4 mb-4">
                <Pen className="w-8 h-8 text-[#8b0000]" />
              </div>
              <h3 className={`text-xl md:text-2xl font-semibold text-[#8b0000] mb-2 ${merriweather.className}`}>1. Share Your Story</h3>
              <p className="text-base text-[#333]">
                Tell us about the couple and your relationship. Our guided questions help you recall meaningful moments and cultural touches to include.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd700] rounded-full p-4 mb-4">
                <Sparkles className="w-8 h-8 text-[#8b0000]" />
              </div>
              <h3 className={`text-xl md:text-2xl font-semibold text-[#8b0000] mb-2 ${merriweather.className}`}>2. Refine Your Words</h3>
              <p className="text-base text-[#333]">
                Our AI assistant helps organize your thoughts into a coherent, flowing speech. You&apos;ll have a draft to review and personalize further.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd700] rounded-full p-4 mb-4">
                <MessageCircle className="w-8 h-8 text-[#8b0000]" />
              </div>
              <h3 className={`text-xl md:text-2xl font-semibold text-[#8b0000] mb-2 ${merriweather.className}`}>3. Deliver with Confidence</h3>
              <p className="text-base text-[#333]">
                Practice your polished speech. With your personal touches and our structure, you&apos;ll feel prepared to share your personalized words on the big day.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-[#ffefd5] py-16 px-4 rounded-lg">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#ffd700] text-[#8b0000] text-sm font-semibold px-3 py-1 rounded-full mb-6">
              Thoughtfully Designed
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-[#8b0000] mb-6 ${merriweather.className}`}>
              Your Personal Speech Writing Companion
            </h2>
            <p className="text-lg md:text-xl text-[#333] max-w-3xl mx-auto">
              Our tool combines your personal touch with AI assistance to create a speech that&apos;s uniquely yours. It&apos;s designed to enhance your ideas, not replace them, ensuring your voice shines through.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <p className={`${merriweather.className} text-[#8b0000] text-2xl md:text-3xl mb-2`}>Effortless and Personal</p>
              <p className="text-base text-[#333] mb-4">
                Your time is valuable during wedding prep. ShaadiToast simplifies speech writing, turning your input into a polished draft within minutes. Complete our easy questionnaire, and let AI craft your heartfelt speech, so you can enjoy the celebration.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/shaaditoast-2.jpg"
                alt="Effortless and personal speech writing"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <h3 className={`text-2xl md:text-3xl font-bold text-[#8b0000] mb-4 ${merriweather.className}`}>Your Words, Enhanced</h3>
              <p className="text-base text-[#333] mb-4">
                We understand the importance of this moment. Our tool is here to support you, not to take over. It helps organize your thoughts and suggests ways to express your feelings, all while maintaining your personal style and the cultural nuances that make your speech special.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/shaaditoast-3.jpg"
                alt="Enhanced speech writing"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <h3 className={`text-2xl md:text-3xl font-bold text-[#8b0000] mb-4 ${merriweather.className}`}>Worry-Free Wedding Words</h3>
              <p className="text-base text-[#333] mb-4">
                Bid farewell to the stress of crafting the perfect speech. Our sophisticated AI transforms the daunting task of speech writing into a breeze, generating a tailor-made, heartfelt wedding toast just for you. Embrace the excitement of the celebration while we handle the words. Experience the tranquility that comes from knowing your speech will captivate and inspire, leaving a lasting impression on the newlyweds and guests alike.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/shaaditoast-4.jpg"
                alt="Stress-free speech writing"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#8b0000] mb-6 text-center ${merriweather.className}`}>
            Hear from our happy users
          </h2>
          <p className="text-lg md:text-xl text-[#333] max-w-3xl mx-auto mb-12 text-center">
            Our AI-powered speeches have been the highlight of countless weddings. But don&apos;t just take our word for it, hear from those who have toasted with us.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Laura D",
                role: "Maid of honor",
                content: "When my best friend asked me to be her maid of honor, I was thrilled, but the thought of giving a speech at her huge Indian wedding terrified me. My friend pointed me to ShaadiToast, and it was a lifesaver! It helped me craft a speech that was both funny and touching. The AI took the stories of our friendship and wove in cultural elements beautifully. The bride was moved to tears, and guests kept complimenting me throughout the night. I couldn't have done it without this amazing tool!",
                image: "/images/laura-d.jpg"
              },
              {
                name: "Arun P",
                role: "Father of the bride",
                content: "Watching my little girl get married was emotional enough, but the task of delivering a speech seemed overwhelming. ShaadiToast guided me through the process, helping me express my love, pride, and hopes for her future. The AI understood the significance of this moment and suggested beautiful ways to incorporate our family traditions. My daughter hugged me after the speech, saying it was perfect. ShaadiToast turned my jumbled thoughts into a heartfelt message I'll cherish forever.",
                image: "/images/arun-p.jpg"
              },
              {
                name: "Sanjay M",
                role: "Best man",
                content: "As someone who dreads public speaking, I was nervous about my best man speech. ShaadiToast made the process incredibly easy and fun! The AI-generated draft captured my style perfectly. With just a few personal tweaks, I had a speech that had everyone laughing and crying in less than 30 minutes. The groom even joked that I should become a professional speechwriter. Thank you, ShaadiToast, for helping me nail this important moment!",
                image: "/images/sanjay-m.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#8b0000] text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className={`text-lg md:text-xl font-semibold ${merriweather.className}`}>{testimonial.name}</h3>
                    <p className="text-[#ffd700] text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-[#8b0000] mb-6 text-center ${merriweather.className}`}>
            Have questions?
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "Why is ShaadiToast the right choice for me?",
                answer: "ShaadiToast is perfect if you want to give a memorable speech but feel unsure about writing it. It's great for those who are short on time, nervous about public speaking, or just want to ensure their words truly resonate with the couple and guests."
              },
              {
                question: "How do I create my speech using ShaadiToast?",
                answer: "It's simple! Just select your speech type and answer a few questions about the couple and your relationship. Our AI then uses this information to craft a personalized speech that captures your voice and sentiments. You'll get your custom speech in seconds."
              },
              {
                question: "What's the technology behind ShaadiToast?",
                answer: "ShaadiToast uses advanced AI, powered by ChatGPT, to analyze your input and create a unique speech. It considers your writing style, the stories you share, and your desired tone to produce a speech that sounds authentically like you."
              },
              {
                question: "How will I receive my speech?",
                answer: "After completing our questionnaire, you'll instantly receive three different versions of your speech on-screen. You can then choose your favorite or mix elements from each to create your perfect speech."
              },
              {
                question: "What can I expect in terms of speech quality?",
                answer: "You'll get a high-quality, personalized speech based on your input. While the AI does an excellent job, you might want to review and make minor adjustments to ensure everything is 100% accurate and to your liking."
              },
              {
                question: "What's the typical length of a ShaadiToast speech?",
                answer: "Most speeches are between 500-700 words, which translates to about 3-5 minutes when spoken. The length can vary based on how much information you provide. You're always free to add or remove content as you see fit."
              },
              {
                question: "What types of wedding speeches can ShaadiToast help with?",
                answer: "ShaadiToast can assist with speeches for the Best Man, Maid of Honor, Bride, Groom, and parents. You can set the tone to be emotional, humorous, or a mix of both - whatever suits your style and the occasion."
              },
              {
                question: "How quickly can ShaadiToast generate my speech?",
                answer: "Once you've completed the questionnaire, ShaadiToast typically takes just 2-3 minutes to generate your speech. It's perfect whether you're planning well in advance or need a great speech at the last minute."
              },
              {
                question: "Is my ShaadiToast speech truly original?",
                answer: "Each speech is created uniquely based on the information you provide. We don't use templates, ensuring your speech is one-of-a-kind and personal to you and the couple."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className={`text-xl font-bold text-[#8b0000] mb-2 ${merriweather.className}`}>{faq.question}</h3>
                <p className="text-base text-[#333]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 bg-[#ffefd5] rounded-lg">
          <h2 className={`text-4xl md:text-5xl font-bold text-[#8b0000] mb-4 ${merriweather.className} leading-tight`}>
            Inspire with Your Words
          </h2>
          <p className="text-lg md:text-xl text-[#333] mb-8 max-w-2xl mx-auto">
            Your heartfelt speech is just moments away. Begin your journey to a memorable toast - no account needed.
          </p>
          <button className="bg-[#8b0000] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#a50000] transition-colors duration-300"
          onClick={handleStartWriting}>
            Craft Your Speech
          </button>
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
  )
}