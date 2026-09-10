import { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useSEO } from "@/hooks/useSEO";
import { ShieldCheck, ShieldAlert, Mail, AlertTriangle, ChevronRight, FileText, Lock } from 'lucide-react';

const JaiswalParivaarChildSafety = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  useSEO({
    title: "Child Safety Standards | Jaiswal Bandhu Sangathan | Devdhara Technologies",
    description: "Official Child Safety Standards and CSAE/CSAM prohibition policy for the Jaiswal Bandhu Sangathan (Jaiswal Parivaar) application by Devdhara Technologies.",
    keywords: "Jaiswal Bandhu Sangathan Child Safety, Jaiswal Parivaar CSAE Policy, CSAM Prohibition, Devdhara Technologies"
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden relative selection:bg-blue-200 dark:selection:bg-blue-900">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-gray-500 dark:text-gray-400">Apps</span>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <a href="/apps/jaiswal-parivaar/privacy-policy" className="ml-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Jaiswal Parivaar</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-gray-900 dark:text-white font-medium">Child Safety</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3.5 bg-blue-50 dark:bg-blue-950/60 rounded-xl text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Official Safety Policy
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                Child Safety Standards – Jaiswal Bandhu Sangathan
              </h1>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Our commitment to child protection, zero tolerance for child sexual abuse material (CSAM), and transparent reporting mechanisms.
          </p>
        </div>

        {/* Core Policy Document */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 space-y-8">
          
          {/* Commitment Statement */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                Commitment to Child Protection
              </h2>
            </div>
            <div className="bg-blue-50/50 dark:bg-blue-950/30 p-5 rounded-xl border border-blue-100 dark:border-blue-900/50">
              <p className="text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                <strong className="text-blue-700 dark:text-blue-300">Jaiswal Bandhu Sangathan</strong> is committed to protecting children from sexual abuse and exploitation (CSAE).
              </p>
            </div>
          </section>

          {/* Strictly Prohibited Content */}
          <section className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                Prohibited Conduct & Material
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We strictly prohibit child sexual abuse material (CSAM), grooming, sexual exploitation of minors, sextortion of minors, trafficking of minors, or any other sexual exploitation or endangerment of children through our app.
            </p>
          </section>

          {/* Reporting & Actions */}
          <section className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                Reporting & Enforcement
              </h2>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside leading-relaxed">
              <li>
                Users can report child-safety concerns through the in-app reporting mechanism or by contacting our designated child-safety contact.
              </li>
              <li>
                Any identified CSAM or child sexual exploitation content will be acted upon in accordance with our policies and applicable laws.
              </li>
              <li>
                We cooperate with appropriate law enforcement agencies and child protection authorities where legally required.
              </li>
            </ul>
          </section>

          {/* Official Contact Box */}
          <section className="pt-6 border-t border-gray-100 dark:border-gray-700">
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-500/20 rounded-lg text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Designated Contact Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                  <span className="text-gray-400 text-xs font-semibold uppercase block mb-1">Child Safety Contact</span>
                  <a 
                    href="mailto:support@devdhar.in" 
                    className="text-blue-400 font-bold hover:underline text-base flex items-center gap-2"
                  >
                    support@devdhar.in
                  </a>
                </div>

                <div className="bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                  <span className="text-gray-400 text-xs font-semibold uppercase block mb-1">Official Application Name</span>
                  <span className="text-white font-bold text-base block">Jaiswal Bandhu Sangathan</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-400 flex flex-wrap gap-x-6 gap-y-2">
                <span>Developer: Devdhara Technologies</span>
                <span>•</span>
                <span>Website: <a href="https://devdhar.in" className="text-blue-400 hover:underline">devdhar.in</a></span>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default JaiswalParivaarChildSafety;
