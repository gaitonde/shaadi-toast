'use client'

import { Inter, Merriweather } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] })

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ShaadiToast</title>
        <meta name="description" content="ShaadiToast privacy policy for AI-generated wedding toasts" />
      </Head>
      <div className={`min-h-screen bg-[#fff5e6] ${inter.className}`}>
        <header className="bg-[#8b0000] text-white py-4 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <h1 className={`text-2xl ${merriweather.className} font-bold`}>ShaadiToast</h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h1 className={`text-3xl font-bold text-[#8b0000] mb-6 ${merriweather.className}`}>
              Privacy Policy
            </h1>
            <div className="space-y-4 text-[#333]">
              <p className="font-bold">Last Updated: 10th September 2024</p>

              <p>
                ShaadiToast (&quot;ShaadiToast,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;) provides an AI-powered service to assist our customers in crafting personalized speeches for any occasion. This Privacy Policy is designed to help you understand how we collect, use, and share your personal information and to help you understand and exercise your privacy rights.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Scope
              </h2>
              <p>
                This Privacy Policy applies to personal information processed by us on our website, through our services offered via the website, and our related online and offline offerings. To make this Privacy Policy easier to read, our websites, services, and related offerings are collectively called &quot;Services.&quot;
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Changes to Our Privacy Policy
              </h2>
              <p>
                We may revise this Privacy Policy from time to time in our sole discretion. If there are any material changes, we will update the Privacy Policy here and change the &quot;Last Updated&quot; date.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Personal Information We Collect
              </h2>
              <p>
                The categories of personal information we collect depend on how you interact with us, our Services, and applicable law. We collect information you provide to us, information obtained automatically through your use of our Services, and information from third-party services and organizations.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Information You Provide to Us Directly:
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Account Creation: We collect details like your name and email address.</li>
                <li>Purchases: We may collect personal and payment information for purchases. Payments are processed by third-party providers; we don&apos;t store your payment information, but we may receive associated billing details.</li>
                <li>Communications: We may collect information like your email address or phone number when you request support or otherwise contact us.</li>
                <li>Surveys, Interactive Features, and Contests: We may collect information you provide through surveys, interactive features, or sweepstakes.</li>
                <li>Job Applications: Information like your CV or cover letter may be collected when applying for jobs.</li>
                <li>Events: Personal information may be collected when you attend conferences or other events.</li>
                <li>Business Development: Information may be collected to assess business opportunities.</li>
              </ul>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Information Collected Automatically:
              </h3>
              <p>
                We may collect data such as your IP address, user settings, device information, and location data when you use our Services. Cookies, pixel tags, and other technologies may be used for operational, performance, and advertising purposes.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Information from Other Sources:
              </h3>
              <p>
                We may obtain data from third-party services, such as when you use a social networking site to access our Services.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide and manage our Services.</li>
                <li>Communicate with you.</li>
                <li>Improve and enhance our Services.</li>
                <li>Market products and Services.</li>
                <li>Conduct research and maintain security.</li>
              </ul>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                How We Disclose Your Information
              </h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service Providers: For hosting, payment processing, and customer support.</li>
                <li>Other ShaadiToast Users: As directed by you, for example, via collaboration features.</li>
                <li>Business Partners: To offer joint products or services.</li>
                <li>Advertising Partners: To deliver personalized ads.</li>
                <li>In the Event of a Business Transfer: In the case of mergers or acquisitions.</li>
              </ul>
              <p>
                We may also share information to comply with legal obligations, protect our rights, or in case of fraudulent or illegal activity.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Your Privacy Choices and Rights (including CCPA for California Residents)
              </h2>
              <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Right to Know: You have the right to request details on the personal data we collect, use, and share.</li>
                <li>Right to Delete: You have the right to request the deletion of your personal data, subject to certain exceptions.</li>
                <li>Right to Opt-Out: If we sell personal information, you can opt out of such sales. However, ShaadiToast does not sell personal information.</li>
                <li>Right to Non-Discrimination: You have the right to receive equal service and pricing, even if you exercise your privacy rights.</li>
              </ul>
              <p>
                If you wish to exercise any of your rights under the CCPA, please contact us at hello@shaaditoast.ai with your request.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Additional Privacy Choices
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email Communications: You can unsubscribe from marketing emails using the link provided in the emails.</li>
                <li>Cookies: You can manage or disable cookies through your browser settings.</li>
                <li>Do Not Track (DNT): We do not currently respond to DNT signals.</li>
              </ul>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Security of Your Information
              </h2>
              <p>
                We take steps to ensure that your data is treated securely, but no system is 100% secure. We cannot guarantee the security of the information you provide to us. In the event of a breach, we may notify you electronically.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Retention of Personal Information
              </h2>
              <p>
                We retain your personal information as long as necessary for business, legal, and operational purposes.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Children&apos;s Information
              </h2>
              <p>
                Our Services are not intended for children under 13. If we learn that personal information from a child under 13 has been collected without parental consent, we will promptly delete that information.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Third-Party Websites/Applications
              </h2>
              <p>
                We are not responsible for the privacy practices of third-party websites or applications linked to our Services. We encourage you to read their privacy policies before interacting with them.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                International Data Transfers
              </h2>
              <p>
                Your personal information may be transferred and stored in countries other than your own. We will ensure your data is protected according to applicable laws.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Contact Us
              </h2>
              <p>
                ShaadiToast is the controller of your personal information. If you have any questions or wish to exercise your privacy rights, please contact us at:
              </p>
              <p className="mt-2">
                ShaadiToast<br />
                2625 Middlefield Rd #435<br />
                Palo Alto, CA 94306<br />
                hello@shaaditoast.ai
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
                    <li><a href="#" className="hover:text-[#ffd700] transition-colors duration-300">Privacy Policy</a></li>
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