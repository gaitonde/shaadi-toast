'use client'

import { Inter, Merriweather } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

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
            <h1 className={`text-2xl ${merriweather.className} font-bold`}>
              <Link href="/" className="hover:text-[#ffd700] transition-colors duration-300">
                ShaadiToast
              </Link>
            </h1>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h1 className={`text-3xl font-bold text-[#8b0000] mb-6 ${merriweather.className}`}>
              Privacy Policy
            </h1>
            <div className="space-y-4 text-[#333]">
              <p className="font-bold">Last Updated: 09/10/2024</p>
              
              <p>
                GreenPen AI Labs, Inc. doing business as ShaadiToast (&quot;ShaadiToast,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;) provides an AI-powered tool to assist our customers in writing wedding speeches. This Privacy Policy is designed to help you understand how we collect, use, and share your personal information and to help you understand and exercise your privacy rights.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Scope
              </h2>
              <p>
                This Privacy Policy applies to personal information processed by us on our website, our services offered via the website, and our related online and offline offerings. To make this Privacy Policy easier to read, our websites, our services offered via the website, and our related offerings are collectively called &quot;Services.&quot;
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Changes to Our Privacy Policy
              </h2>
              <p>
                We may revise this Privacy Policy from time to time in our sole discretion. If there are any material changes to this Privacy Policy, we will update the policy here and change the &quot;Last Updated&quot; date. It is your responsibility to review the updated Privacy Policy for changes.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Personal Information We Collect
              </h2>
              <p>
                The categories of personal information we collect depend on how you interact with us, our Services, and the requirements of applicable law. We collect information you provide to us, information we obtain automatically when you use our Services, and information from other sources such as third-party services and organizations, as described below.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Information You Provide to Us Directly
              </h3>
              <p>We may collect the following personal information that you provide to us:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Account Creation: We may collect information when you create an account, such as your name and email address.</li>
                <li>Purchases: We may collect personal information and details associated with your purchases, including payment information. In some cases, you may need to provide us with additional information to verify your identity before completing a transaction. Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment card information entered through our Services, but we may receive information associated with your payment card information (e.g., your billing details).</li>
                <li>Your Communications with Us: We may collect personal information, such as email address, phone number, or mailing address, when you request information about our Services, register for our newsletter or marketing, request customer or technical support, or otherwise communicate with us.</li>
                <li>Surveys: We may contact you to participate in surveys. If you decide to participate, you may be asked to provide certain information, which may include personal information.</li>
                <li>Interactive Features: We and others who use our Services may collect personal information that you submit or make available through our interactive features (e.g., collaboration tools, messaging, and chat features, commenting functionalities, forums, blogs, and social media pages). Any information you provide on the public sections of these features will be considered &quot;public,&quot; unless otherwise required by applicable law, and is not subject to the privacy protections referenced herein.</li>
                <li>Sweepstakes or Contests: We may collect personal information you provide for any sweepstakes or contests that we offer. In some jurisdictions, we are required to publicly share information about sweepstakes and contest winners.</li>
                <li>Conferences, Trade Shows, and Other Events: We may collect personal information from individuals when we attend conferences, trade shows, and other events.</li>
                <li>Business Development and Strategic Partnerships: We may collect personal information from individuals and third parties to assess and pursue potential business opportunities.</li>
                <li>Job Applications: We may post job openings and opportunities on our Services. If you reply to one of these postings by submitting your application, CV, and/or cover letter to us, we will collect and use your information to assess your qualifications.</li>
              </ul>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Information Collected Automatically
              </h3>
              <p>We may collect personal information automatically when you use our Services:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Automatic Data Collection: We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), and Internet service provider. We may also automatically collect information regarding your use of our Services, such as pages that you visit before, during, and after using our Services, information about the links you click, the types of content you interact with, the frequency and duration of your activities, and other information about how you use our Services. In addition, we may collect information that other people provide about you when they use our Services, including information about you when they tag you.</li>
                <li>Cookies, Pixel Tags/Web Beacons, and Other Technologies: We, as well as third parties that provide content, advertising, or other functionality on our Services, may use cookies, pixel tags, local storage, and other technologies (&quot;Technologies&quot;) to automatically collect information through your use of our Services.</li>
                <li>Cookies: Cookies are small text files placed in device browsers that store preferences and facilitate and enhance your experience.</li>
                <li>Pixel Tags/Web Beacons: A pixel tag (also known as a web beacon) is a piece of code embedded in our Services that collects information about engagement on our Services. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in emails to understand whether messages have been opened, acted on, or forwarded.</li>
              </ul>

              <p>Our uses of these Technologies fall into the following general categories:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Operationally Necessary: This includes Technologies that allow you access to our Services, applications, and tools that are required to identify irregular website behavior, prevent fraudulent activity, and improve security, or that allow you to make use of our functionality;</li>
                <li>Performance-Related: We may use Technologies to assess the performance of our Services, including as part of our analytic practices to help us understand how individuals use our Services (see Analytics below);</li>
                <li>Functionality-Related: We may use Technologies that allow us to offer you enhanced functionality when accessing or using our Services. This may include identifying you when you sign into our Services or keeping track of your specified preferences, interests, or past items viewed;</li>
                <li>Advertising- or Targeting-Related: We may use first-party or third-party Technologies to deliver content, including ads relevant to your interests, on our Services or on third-party websites.</li>
              </ul>

              <p>See Section 6 below to understand your choices regarding these Technologies.</p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Analytics
              </h3>
              <p>
                We may use Technologies and other third-party tools to process analytics information on our Services. Some of our analytics partners include Google Analytics. For more information, please visit Google Analytics&apos; Privacy Policy. To learn more about how to opt-out of Google Analytics&apos; use of your information on our website, please contact us.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Social Media Platforms
              </h3>
              <p>
                Our Services may contain social media buttons (that might include widgets such as the &quot;share this&quot; button or other interactive mini programs). These features may collect your IP address, which page you are visiting on our Services, and may set a cookie to enable the feature to function properly. Your interactions with these platforms are governed by the Privacy Policy of the company providing it.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Information Collected from Other Sources
              </h3>
              <p>
                We may obtain information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect information about you from that third-party application that you have made available via your privacy settings.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                How We Disclose Your Information
              </h2>
              <p>
                We disclose your information to third parties for a variety of business purposes, including to provide our Services, protect our business or others, or in the event of a major business transaction such as a merger, sale, or asset transfer, as described below.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Disclosures to Provide Our Services
              </h3>
              <p>The categories of third parties with whom we may share your information are described below:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Service Providers: We may share your personal information with third-party service providers who use that information to help us provide our Services. This includes service providers that assist with IT support, hosting, payment processing, customer service, and related services.</li>
                <li>Other ShaadiToast Users at Your Direction: When you use the Services, including ShaadiToast&apos;s interactive features, you may direct ShaadiToast to share certain information with other ShaadiToast users. This information may include personal information about yourself and details about your work and your use of the Services.</li>
                <li>Business Partners: We may share your personal information with business partners to provide you with a product or service you have requested. We may also share your personal information with business partners with whom we jointly offer products or services.</li>
                <li>Affiliates: We may share your personal information with our company affiliates for administrative purposes, including activities such as IT management, for them to provide services to you, or to support and supplement the Services we provide.</li>
                <li>Advertising Partners: We may share your personal information with third-party advertising partners. These third-party advertising partners may set tracking technologies (such as cookies or pixel tags) on our Services to collect information regarding your activities and your device (e.g., IP address, cookie identifiers, page(s) visited, location, and time of day). These advertising partners may use this information (and similar information collected from other services) for delivering personalized advertisements to you when you visit digital properties within their networks. This practice is commonly referred to as &quot;interest-based advertising&quot; or &quot;personalized advertising.&quot; Some of our advertising partners include Google Ads. For more information, please visit Google Ads&apos; Privacy Policy. To learn more about how to opt out of Google Ads&apos; use of your information on our website, please contact us.</li>
                <li>APIs/SDKs: We may use third-party application program interfaces (APIs) and software development kits (SDKs) as part of the functionality of our Services. These APIs and SDKs may allow third parties to collect your personal information to provide and improve the Services. For more information about our use of APIs and SDKs, please contact us as set forth below.</li>
              </ul>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Disclosures to Protect Us or Others
              </h3>
              <p>
                We may access, preserve, and disclose any information we store associated with you to external parties if we, in good faith, believe doing so is required or appropriate to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comply with law enforcement or national security requests and legal processes, such as a court order or subpoena;</li>
                <li>Protect your, our, or others&apos; rights, property, or safety;</li>
                <li>Enforce our policies or contracts;</li>
                <li>Collect amounts owed to us; or</li>
                <li>Assist with an investigation or prosecution of suspected or actual illegal activity.</li>
              </ul>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Disclosure in the Event of Merger, Sale, or Other Asset Transfers
              </h3>
              <p>
                If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, purchase or sale of assets, or transition of service to another provider, your information may be sold or transferred as part of such a transaction, as permitted by law and/or contract.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Your Privacy Choices and Rights
              </h2>
              <p>Your privacy choices regarding your personal information are determined by applicable law, as described below:</p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Email Communications
              </h3>
              <p>
                If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email to opt-out of receiving future emails. Note that you will continue to receive transaction-related emails regarding products or Services you have requested. We may also send you certain non-promotional communications regarding us and our Services, which you will not be able to opt out of (e.g., communications regarding our Services or updates to our Terms of Service or this Privacy Policy).
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                &quot;Do Not Track&quot;
              </h3>
              <p>
                Do Not Track (&quot;DNT&quot;) is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Cookies and Interest-Based Advertising
              </h3>
              <p>
                You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, our Services may not function properly. Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt out of personalized advertisements on some mobile applications by following the instructions for Android, iOS, and others.
              </p>
              <p>
                The online advertising industry also provides websites from which you may opt-out of receiving targeted ads from data partners and other advertising partners that participate in self-regulatory programs. You can learn more about these programs by visiting:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Network Advertising Initiative</li>
                <li>Digital Advertising Alliance</li>
                <li>European Digital Advertising Alliance</li>
                <li>Digital Advertising Alliance of Canada</li>
              </ul>
              <p>
                Please note you must separately opt-out in each browser and on each device.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Your Privacy Rights
              </h3>
              <p>In accordance with applicable law, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access Personal Information about you, including: (i) Confirming whether we are processing your personal information; (ii) Obtaining access to or a copy of your personal information;</li>
                <li>Request Correction of your personal information if it is inaccurate, incomplete, or outdated. In some cases, we may provide self-service tools that enable you to update your personal information;</li>
                <li>Request Deletion, Anonymization, or Blocking of your personal information when processing is based on your consent or when processing is unnecessary, excessive, or noncompliant;</li>
                <li>Request Restriction of or Object to our processing of your personal information;</li>
                <li>Withdraw Your Consent to our processing of your personal information. If you refrain from providing personal information or withdraw your consent to processing, some features of our Services may not be available;</li>
                <li>Request a Portable Copy of your personal information;</li>
                <li>Be Informed about third parties with which your personal information has been shared; and</li>
                <li>Request the Review of decisions taken exclusively based on automated processing if that could affect your data subject rights.</li>
              </ul>
              <p>
                If you would like to exercise any of these rights, please contact us as set forth below. We will process such requests in accordance with applicable laws.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                California Consumer Privacy Act (CCPA) Notice
              </h2>
              <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Right to Know: You have the right to request that we disclose the categories and specific pieces of personal information that we collect, use, disclose, and sell about you. This includes information about the categories of third parties with whom we share personal information, and the business or commercial purposes for collecting or selling personal information.</li>
                <li>Right to Delete: You have the right to request the deletion of personal information that we have collected from you, subject to certain exceptions provided by law. If an exception applies, we will inform you of the specific legal reason for denying your deletion request.</li>
                <li>Right to Opt-Out of Sale: We do not sell your personal information. However, if we change our business practices in the future, we will notify you and provide you with the opportunity to opt-out of the sale of your personal information.</li>
                <li>Right to Non-Discrimination: You have the right not to receive discriminatory treatment for exercising any of your CCPA rights. We will not deny you services, charge you different prices, or provide a different level or quality of service if you exercise your CCPA rights.</li>
              </ul>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                How to Exercise Your CCPA Rights:
              </h3>
              <p>To submit a request to exercise any of your CCPA rights, you may contact us by:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email: shaaditoast@greenpenailabs.com</li>
                <li>Postal Mail: 2625 Middlefield Rd #435, Palo Alto, CA 94306</li>
              </ul>
              <p>
                Please provide sufficient information that allows us to verify you are the person about whom we collected personal information (such as your name and email address) and describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Authorized Agents:
              </h3>
              <p>
                You may designate an authorized agent to make a request on your behalf. To do so, you must provide the authorized agent with written permission to submit such a request, and we may require you to verify your identity directly with us.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Categories of Information We Collect:
              </h3>
              <p>
                We collect personal information including, but not limited to, your name, email address, IP address, payment information, and any other information you provide through our services. For more details on the information we collect, please see our Privacy Policy.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Do Not Sell My Personal Information:
              </h3>
              <p>
                Although we do not sell personal information, California residents can contact us at any time to inquire about our data practices or to opt-out of any future potential sale of their personal information.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Changes to This CCPA Notice
              </h3>
              <p>
                We may update this CCPA notice from time to time. If we make significant changes, we will notify you through our website or by email.
              </p>

              <h3 className={`text-lg font-semibold text-[#8b0000] mt-2 ${merriweather.className}`}>
                Data Requests
              </h3>
              <p>To make any CCPA-related requests, you can reach us at:</p>
              <p>
                Email: shaaditoast@greenpenailabs.com<br />
                Mailing Address: 2625 Middlefield Rd #435, Palo Alto, CA 94306
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Security of Your Information
              </h2>
              <p>
                We take steps to ensure that your information is treated securely and in accordance with this Privacy Policy. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized disclosure.
              </p>
              <p>
                By using our Services or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues related to your use of our Services. If we learn of a security breach, we may attempt to notify you electronically by posting a notice on our Services, by mail, or by sending an email to you.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                International Data Transfers
              </h2>
              <p>
                All information processed by us may be transferred, processed, and stored anywhere in the world, including, but not limited to, the United States or other countries, which may have data protection laws that are different from the laws where you live. We endeavor to safeguard your information consistent with the requirements of applicable laws.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Retention of Personal Information
              </h2>
              <p>
                We store the personal information we collect as described in this Privacy Policy for as long as you use our Services or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, and comply with applicable laws.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Children&apos;s Information
              </h2>
              <p>
                The Services are not directed to children under 13 (or other age as required by local law), and we do not knowingly collect personal information from children. If you learn that your child has provided us with personal information without your consent, you may contact us as set forth below. If we learn that we have collected a child&apos;s personal information in violation of applicable law, we will promptly take steps to delete such information.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Third-Party Websites/Applications
              </h2>
              <p>
                The Services may contain links to other websites/applications, and other websites/applications may reference or link to our Services. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen, or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Supervisory Authority
              </h2>
              <p>
                If you are located in the European Economic Area, Switzerland, the United Kingdom, or Brazil, you have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable law.
              </p>

              <h2 className={`text-xl font-bold text-[#8b0000] mt-4 ${merriweather.className}`}>
                Contact Us
              </h2>
              <p>
               If you have any questions about our privacy practices or this Privacy Policy, or to exercise your rights as detailed in this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                ShaadiToast<br />
                2625 Middlefield Rd #435<br />
                PaloAlto, CA 94306<br />
                shaaditoast@greenpenailabs.com
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
