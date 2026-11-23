import { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useSEO } from "@/hooks/useSEO";
import { 
  ShieldCheck, 
  Copyright, 
  ChevronRight, 
  FileText, 
  Lock, 
  AlertTriangle, 
  Mail, 
  Scale, 
  Code2, 
  Building2,
  ExternalLink
} from 'lucide-react';

const JaiswalSamajCopyright = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  useSEO({
    title: "Copyright & Intellectual Property Notice | Jaiswal Samaj App | Devdhara Technologies",
    description: "Official Copyright, Intellectual Property Notice, and DMCA takedown policy for the Jaiswal Samaj (Jaiswal Parivaar) mobile application engineered by Devdhara Technologies.",
    keywords: "Jaiswal Samaj Copyright, Jaiswal Parivaar IP Notice, Apple App Store Copyright, Devdhara Technologies Legal, DMCA Policy"
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden relative selection:bg-blue-200 dark:selection:bg-blue-900">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <a href="/apps/jaiswal-samaj" className="ml-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Jaiswal Samaj</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-gray-900 dark:text-white font-medium">Copyright & IP Notice</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-10 border-b border-gray-200 dark:border-gray-700 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Copyright className="w-3.5 h-3.5" /> Legal Notice & Intellectual Property
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Copyright & Intellectual Property Notice
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Official intellectual property guidelines, proprietary ownership statements, and copyright infringement procedures for the <strong className="font-semibold text-gray-900 dark:text-white">Jaiswal Samaj (Jaiswal Parivaar / Jaiswal Bandhu Shakti Sangathan)</strong> mobile application.
          </p>
        </div>

        {/* Primary Copyright Declaration Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-900/60 shadow-sm mb-12 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Copyright className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Official Copyright Declaration
              </h2>
              <p className="font-mono text-sm text-blue-700 dark:text-blue-300 font-semibold">
                Copyright © 2026 Devdhara Technologies & Jaiswal Bandhu Shakti Sangathan. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                This mobile application, including all related source code, user interface designs, graphical illustrations, database architectures, trademarks, logos, and accompanying documentation, is legally protected under Indian copyright laws (Indian Copyright Act, 1957), international copyright treaties, and the United States Digital Millennium Copyright Act (DMCA).
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              1. Ownership of Software & Technology
            </h3>
            <p className="mb-4">
              The proprietary software code (including Flutter, Dart, native iOS Swift, native Android Kotlin modules, backend cloud functions, APIs, and administrative control suites) is the exclusive intellectual property of <strong>Devdhara Technologies</strong>.
            </p>
            <p>
              Devdhara Technologies retains all worldwide rights, titles, and interests in the underlying technology, algorithms, system architecture, database design, visual layouts, and styling patterns utilized in the application.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              2. Ownership of Trademarks & Community Brand
            </h3>
            <p className="mb-4">
              The names <strong>"Jaiswal Samaj"</strong>, <strong>"Jaiswal Bandhu Shakti Sangathan"</strong>, <strong>"Jaiswal Parivaar"</strong>, the Samaj emblem, seal, organization logos, and community heraldry are the proprietary intellectual property and trademarks of <strong>Jaiswal Bandhu Shakti Sangathan (Naroda / Gujarat)</strong>.
            </p>
            <p>
              No individual or third-party entity is authorized to use these trademarks, emblems, or brand names for commercial purposes or unauthorized representations without prior written authorization from the governing executive council of Jaiswal Bandhu Shakti Sangathan.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              3. Permitted & Prohibited Uses
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Permitted Use:</h4>
                <p>
                  Verified community members are granted a revocable, non-exclusive, non-transferable, personal license to download, install, and access the application on personal mobile devices solely for legitimate family networking, directory browsing, matrimonial coordination, and community communication.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Strictly Prohibited Actions:</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-600 dark:text-gray-400">
                  <li>Reverse engineering, decompiling, disassembling, or extracting the application binary or source code.</li>
                  <li>Automated scraping, crawling, harvesting, or bulk downloading of community member phone numbers, addresses, family trees, or matrimonial profiles.</li>
                  <li>Selling, renting, leasing, sublicensing, or distributing the application or member directory to marketing agencies or third parties.</li>
                  <li>Creating derivative works or unauthorized clones of the software or UI.</li>
                  <li>Circumventing community authentication, encryption, or security access controls.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              4. User Content & Member-Submitted Data
            </h3>
            <p className="mb-4">
              Community members retain ownership of photos, family biographies, and documents they upload to the application. By uploading, members grant the application an operational license to host, display, and transmit such data to authenticated Samaj members strictly for the functioning of the app.
            </p>
            <p>
              Users are strictly prohibited from uploading copyrighted photographs, documents, or media for which they do not possess explicit legal ownership or authorized consent.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              5. Copyright Infringement & DMCA Takedown Procedure
            </h3>
            <p className="mb-4">
              Devdhara Technologies respects the intellectual property rights of others and responds promptly to valid copyright infringement notices under the Digital Millennium Copyright Act (DMCA) and Indian Copyright Act 1957.
            </p>
            <p className="mb-4">
              If you believe in good faith that any content, image, or profile displayed within the Jaiswal Samaj app infringes your copyrighted work, please submit a written notification containing:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
              <li>A physical or electronic signature of the authorized copyright owner or representative.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Precise identification of the material claimed to be infringing within the app (including screenshots, profile names, or URL references).</li>
              <li>Your contact information (legal name, mailing address, telephone number, and email address).</li>
              <li>A statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement made under penalty of perjury that the information in the notification is accurate and that you are authorized to act on behalf of the owner.</li>
            </ol>

            <div className="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
              <span className="font-semibold text-gray-900 dark:text-white block mb-1">Designated Copyright Agent:</span>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Devdhara Technologies Legal & IP Compliance Department<br />
                Email: <a href="mailto:legal@devdhar.in" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">legal@devdhar.in</a> / <a href="mailto:support@devdhar.in" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">support@devdhar.in</a><br />
                Address: Ahmedabad, Gujarat, India
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              6. Open Source Software Acknowledgements
            </h3>
            <p className="mb-4">
              The application incorporates open-source software libraries licensed under open standards such as MIT, Apache 2.0, and BSD licenses (including the Flutter SDK, Google Firebase SDKs, and cryptographic protocols).
            </p>
            <p>
              All applicable open-source notices, licenses, and disclaimers are preserved in accordance with their respective licensing terms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              7. Governing Law & Jurisdiction
            </h3>
            <p>
              This Copyright Notice and any disputes arising from the use or violation of intellectual property shall be governed and interpreted in accordance with the laws of India. Any legal action or proceeding related hereto shall be brought exclusively in the competent courts located in Ahmedabad, Gujarat, India.
            </p>
          </section>

        </div>

        {/* Quick Links Footer Navigation */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Official App Compliance & Support Navigation</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">Direct documentation links for Apple App Store Connect reviewers and users</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold">
            <a href="/apps/jaiswal-samaj/support" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Support Center <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-samaj" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Marketing Page <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-parivaar/privacy-policy" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Privacy Policy <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-parivaar/child-safety" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Child Safety <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-parivaar/delete-account" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Delete Account <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </main>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default JaiswalSamajCopyright;
