import { useState, useEffect } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useSEO } from "@/hooks/useSEO";

const JaiswalParivaarPrivacyPolicy = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  useSEO({
    title: "Privacy Policy | Jaiswal Parivaar | Devdhara Technologies",
    description: "Read the official Privacy Policy for the Jaiswal Parivaar Android application developed by Devdhara Technologies. Learn how user information is collected, used, protected, and managed.",
    keywords: "Jaiswal Parivaar Privacy Policy, Devdhara Technologies Android App"
  });

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-we-collect', title: '2. Information We Collect' },
    { id: 'why-we-collect-information', title: '3. Why We Collect Information' },
    { id: 'data-sharing', title: '4. Data Sharing' },
    { id: 'data-security', title: '5. Data Security' },
    { id: 'data-retention', title: '6. Data Retention' },
    { id: 'user-rights', title: '7. User Rights' },
    { id: 'third-party-services', title: '8. Third-Party Services' },
    { id: 'childrens-privacy', title: '9. Children\'s Privacy' },
    { id: 'changes', title: '10. Changes to this Policy' },
    { id: 'contact-us', title: '11. Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      let currentActive = 'introduction';
      
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            currentActive = el.id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200 selection:bg-blue-200 dark:selection:bg-blue-900 overflow-x-hidden relative">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-12 flex flex-col md:flex-row gap-12 relative z-10">
        
        {/* Table of Contents (Desktop Sticky) */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-28 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">Contents</h3>
            <ul className="space-y-3 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`text-left block w-full transition-colors ${
                      activeSection === section.id
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Policy Content */}
        <div className="flex-1 max-w-[900px]">
          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <a href="/apps" className="ml-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors md:ml-2">Apps</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-gray-500 dark:text-gray-400 md:ml-2">Jaiswal Parivaar</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-gray-700 dark:text-gray-300 md:ml-2 font-medium">Privacy Policy</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              This Privacy Policy describes how the Jaiswal Parivaar Android application collects, uses, stores, and protects your information.
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900 mb-12">
            <div className="bg-blue-50 dark:bg-blue-900/30 px-6 py-4 border-b border-blue-100 dark:border-blue-900">
              <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-200 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Application Overview
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <span className="block text-gray-500 dark:text-gray-400">Application Name</span>
                <span className="font-medium text-gray-900 dark:text-white">Jaiswal Parivaar</span>
              </div>
              <div>
                <span className="block text-gray-500 dark:text-gray-400">Developer</span>
                <span className="font-medium text-gray-900 dark:text-white">Devdhara Technologies</span>
              </div>
              <div>
                <span className="block text-gray-500 dark:text-gray-400">Platform</span>
                <span className="font-medium text-gray-900 dark:text-white">Android</span>
              </div>
              <div>
                <span className="block text-gray-500 dark:text-gray-400">Current Version</span>
                <span className="font-medium text-gray-900 dark:text-white">1.0.0</span>
              </div>
              <div>
                <span className="block text-gray-500 dark:text-gray-400">Last Updated</span>
                <span className="font-medium text-gray-900 dark:text-white">July 2026</span>
              </div>
              <div>
                <span className="block text-gray-500 dark:text-gray-400">Website</span>
                <a href="https://devdhar.in" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">https://devdhar.in</a>
              </div>
            </div>
          </div>

          <div className="prose prose-blue prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-12">
            
            <section id="introduction" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p>
                Devdhara Technologies values user privacy and is committed to protecting user information while providing community services through the Jaiswal Parivaar application. This policy details our practices and your rights regarding your data.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information when you use our application:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
                <li>Community Information</li>
                <li>Profile Photo (if uploaded)</li>
                <li>Device Information</li>
                <li>App Usage Information</li>
                <li>Notification Token</li>
                <li>Technical Logs</li>
              </ul>
            </section>

            <section id="why-we-collect-information" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Why We Collect Information</h2>
              <p>The information we collect is used for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>User registration</li>
                <li>Account authentication</li>
                <li>Community member management</li>
                <li>Profile management</li>
                <li>Event notifications</li>
                <li>App improvements</li>
                <li>Customer support</li>
                <li>Security and fraud prevention</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section id="data-sharing" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Sharing</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <p className="m-0 font-medium text-blue-900 dark:text-blue-100">
                  Devdhara Technologies does NOT sell users' personal information.
                </p>
              </div>
              <p>Information may only be shared with trusted service providers required to operate the application such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Firebase</li>
                <li>Google Play Services</li>
                <li>Cloud Hosting Providers</li>
              </ul>
              <p className="mt-4">We may also share information when legally required by law.</p>
            </section>

            <section id="data-security" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Security</h2>
              <p>We implement standard security measures to protect your data, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>HTTPS encryption</li>
                <li>Secure cloud infrastructure</li>
                <li>Authentication mechanisms</li>
                <li>Restricted employee access</li>
                <li>Security monitoring</li>
                <li>Regular updates</li>
              </ul>
            </section>

            <section id="data-retention" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Retention</h2>
              <p>User information is retained only while the account remains active or as required by law. If you delete your account, your personal data will be removed from our active systems according to our data deletion protocols.</p>
            </section>

            <section id="user-rights" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. User Rights</h2>
              <p>As a user, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your data</li>
                <li>Update profile information</li>
                <li>Request correction</li>
                <li>Request account deletion</li>
                <li>Request deletion of personal data</li>
                <li>Contact support</li>
              </ul>
            </section>

            <section id="third-party-services" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Third-Party Services</h2>
              <p>Our application utilizes the following third-party services which may collect information used to identify you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Firebase Authentication</li>
                <li>Firebase Firestore</li>
                <li>Firebase Cloud Messaging</li>
                <li>Google Play Services</li>
                <li>Google Maps APIs</li>
                <li>Crash Reporting</li>
                <li>Analytics</li>
              </ul>
            </section>

            <section id="childrens-privacy" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
              <p>The application is not intended for children under 13 years of age unless specifically stated. We do not knowingly collect personally identifiable information from children under 13.</p>
            </section>

            <section id="changes" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to this Privacy Policy</h2>
              <p>This Privacy Policy may be updated from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Users should review this page periodically.</p>
            </section>

            <section id="contact-us" className="scroll-mt-28 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">11. Contact Us</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Get in Touch</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">We're here to help with any privacy-related concerns.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-900 dark:text-white w-32 shrink-0">Company:</span>
                    <span className="text-gray-700 dark:text-gray-300">Devdhara Technologies</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-900 dark:text-white w-32 shrink-0">Website:</span>
                    <a href="https://devdhar.in" className="text-blue-600 dark:text-blue-400 hover:underline">https://devdhar.in</a>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-900 dark:text-white w-32 shrink-0">Support Email:</span>
                    <a href="mailto:support@devdhar.in" className="text-blue-600 dark:text-blue-400 hover:underline">support@devdhar.in</a>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-gray-900 dark:text-white w-32 shrink-0">Privacy Email:</span>
                    <a href="mailto:privacy@devdhar.in" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@devdhar.in</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default JaiswalParivaarPrivacyPolicy;
