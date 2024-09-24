'use client'

import { Playfair_Display, Poppins } from 'next/font/google'
import { Pen, Sparkles, MessageCircle } from 'lucide-react'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export function LandingPage() {
  return (
    <div className={`min-h-screen bg-[#fff5e6] ${poppins.className}`}>
      <header className="bg-[#8b0000] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`text-2xl ${playfairDisplay.className}`}>ShaadiToast</h1>
          <button className="bg-[#ffa500] text-[#8b0000] font-semibold py-2 px-4 rounded-full text-sm hover:bg-[#ff8c00] transition-colors duration-300">
            Start Writing
          </button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-24">
        <section className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <h1 className={`text-5xl font-bold text-[#8b0000] mr-4 ${playfairDisplay.className}`}>
              Create Your Personalized Desi Wedding Speech
            </h1>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N6VboDqm7nvHmvP1rdyOjatPDIFpwl.png"
              alt="Colorful traditional Indian dhol drum"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
          <p className="text-xl text-[#333] mb-8">
            Express your emotions with ease. Our AI-assisted tool, powered by ChatGPT, helps you craft a personal, culturally rich wedding speech that resonates with your audience.
          </p>
          <button className="bg-[#ffa500] text-[#8b0000] font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#ff8c00] transition-colors duration-300">
            Start Writing
          </button>
        </section>

        <section className="mb-16">
          <img
            src="https://placehold.co/200x400/000000/FF0000?text=ShaadiToast+Image"
            alt="Desi wedding celebration"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </section>

        <section className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-[#8b0000] mb-6 ${playfairDisplay.className}`}>Simple Steps to Your Perfect Speech</h2>
          <p className="text-xl text-[#333] max-w-3xl mx-auto mb-12">
            Creating a memorable Desi wedding speech is easier than you think. Our intuitive process guides you through each step, ensuring your words capture the essence of the occasion.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd700] rounded-full p-4 mb-4">
                <Pen className="w-8 h-8 text-[#8b0000]" />
              </div>
              <h3 className={`text-2xl font-semibold text-[#8b0000] mb-2 ${playfairDisplay.className}`}>1. Share Your Story</h3>
              <p className="text-[#333]">
                Tell us about the couple and your relationship. Our guided questions help you recall meaningful moments and cultural touches to include.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd700] rounded-full p-4 mb-4">
                <Sparkles className="w-8 h-8 text-[#8b0000]" />
              </div>
              <h3 className={`text-2xl font-semibold text-[#8b0000] mb-2 ${playfairDisplay.className}`}>2. Refine Your Words</h3>
              <p className="text-[#333]">
                Our AI assistant helps organize your thoughts into a coherent, flowing speech. You'll have a draft to review and personalize further.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#ffd700] rounded-full p-4 mb-4">
                <MessageCircle className="w-8 h-8 text-[#8b0000]" />
              </div>
              <h3 className={`text-2xl font-semibold text-[#8b0000] mb-2 ${playfairDisplay.className}`}>3. Deliver with Confidence</h3>
              <p className="text-[#333]">
                Practice your polished speech. With your personal touches and our structure, you'll feel prepared to share your heartfelt words on the big day.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-[#ffefd5] py-16 px-4 rounded-lg">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#ffd700] text-[#8b0000] text-sm font-semibold px-3 py-1 rounded-full mb-6">
              Thoughtfully Designed
            </div>
            <h2 className={`text-4xl font-bold text-[#8b0000] mb-6 ${playfairDisplay.className}`}>
              Your Personal Speech Writing Companion
            </h2>
            <p className="text-xl text-[#333] max-w-3xl mx-auto">
              Our tool combines your personal touch with AI assistance to create a speech that's uniquely yours. It's designed to enhance your ideas, not replace them, ensuring your voice shines through.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <p className={`${playfairDisplay.className} text-[#8b0000] text-3xl mb-2`}>Effortless and Personal</p>
              <p className="text-[#333] mb-4">
                We know your time is precious, especially during wedding preparations. ShaadiToast streamlines your speech writing process, allowing you to create a beautiful, heartfelt speech in just minutes. Simply fill out our thoughtfully designed questionnaire, and watch as our AI transforms your input into a polished draft. Spend less time worrying about words and more time enjoying the celebration.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/200x400/000000/FF0000?text=ShaadiToast+Image"
                alt="Effortless and personal speech writing"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="md:w-1/2">
              <h3 className={`text-3xl font-bold text-[#8b0000] mb-4 ${playfairDisplay.className}`}>Your Words, Enhanced</h3>
              <p className="text-[#333] mb-4">
                We understand the importance of this moment. Our tool is here to support you, not to take over. It helps organize your thoughts and suggests ways to express your feelings, all while maintaining your personal style and the cultural nuances that make your speech special.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/200x400/000000/FF0000?text=ShaadiToast+Image"
                alt="Enhanced speech writing"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className={`text-4xl font-bold text-[#8b0000] mb-6 text-center ${playfairDisplay.className}`}>
            Don't take our word for it
          </h2>
          <p className="text-xl text-[#333] max-w-3xl mx-auto mb-12 text-center">
            Our AI-powered speeches have been the highlight of countless weddings. But don't just take our word for it, hear from those who have toasted with us.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Saloni D",
                role: "Maid of honor",
                content: "When my best friend asked me to be her maid of honor, I was thrilled, but the thought of giving a speech terrified me. ShaadiToast was a lifesaver! It helped me craft a speech that was both funny and touching. The AI understood the nuances of our friendship and wove in cultural elements beautifully. The bride was moved to tears, and guests kept complimenting me throughout the night. I couldn't have done it without this amazing tool!"
              },
              {
                name: "Sanjay M",
                role: "Best man",
                content: "As someone who dreads public speaking, I was nervous about my best man speech. ShaadiToast made the process incredibly easy and fun! The AI-generated draft captured my voice perfectly and included anecdotes I had forgotten. With a few personal tweaks, I had a speech that had everyone laughing and crying. The groom even joked that I should become a professional speechwriter. Thank you, ShaadiToast, for helping me nail this important moment!"
              },
              {
                name: "Arun P",
                role: "Father of the bride",
                content: "Watching my little girl get married was emotional enough, but the task of delivering a speech seemed overwhelming. ShaadiToast guided me through the process, helping me express my love, pride, and hopes for her future. The AI understood the significance of this moment and suggested beautiful ways to incorporate our family traditions. My daughter hugged me after the speech, saying it was perfect. ShaadiToast turned my jumbled thoughts into a heartfelt message I'll cherish forever."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#8b0000] text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://placehold.co/100x100/ffd700/8b0000?text=${testimonial.name.charAt(0)}`}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className={`text-xl font-semibold ${playfairDisplay.className}`}>{testimonial.name}</h3>
                    <p className="text-[#ffd700]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}