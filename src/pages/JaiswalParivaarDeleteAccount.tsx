import { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useSEO } from "@/hooks/useSEO";
import { CheckCircle, AlertTriangle, ChevronRight, Mail } from 'lucide-react';

const JaiswalParivaarDeleteAccount = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  useSEO({
    title: "Delete Jaiswal Parivaar Account | Devdhara Technologies",
    description: "Request permanent deletion of your Jaiswal Parivaar account and associated personal information. Official account deletion page by Devdhara Technologies.",
    keywords: "Jaiswal Parivaar Delete Account, Account Deletion, Devdhara Technologies"
  });

  const deletedData = [
    "User Profile",
    "Member Information",
    "Community Details",
    "Uploaded Profile Photo",
    "Contact Information",
    "Login Credentials",
    "Notification Tokens",
    "App Preferences"
  ];

  const faqs = [
    {
      q: "Can I recover my account after deletion?",
      a: "No. Account deletion is permanent."
    },
    {
      q: "How long does deletion take?",
      a: "Up to 7 business days after identity verification."
    },
    {
      q: "Will all my data be deleted?",
      a: "Yes, except information that must be retained temporarily for legal, fraud prevention, or security purposes."
    },
    {
      q: "Do I need to uninstall the app?",
      a: "No. However, after your account is deleted, you can uninstall the application if you no longer intend to use it."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden relative selection:bg-blue-200 dark:selection:bg-blue-900">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-16 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <a href="/apps" className="ml-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors md:ml-2">Apps</a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="ml-1 text-gray-500 dark:text-gray-400 md:ml-2">Jaiswal Parivaar</span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="ml-1 text-gray-900 dark:text-gray-100 md:ml-2 font-medium">Delete Account</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Delete Your Jaiswal Parivaar Account
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Users can permanently request the deletion of their Jaiswal Parivaar account and associated personal data from this page. This page is provided to comply with Google Play's Account Deletion policy.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/30 px-6 py-4 border-b border-blue-100 dark:border-blue-900">
            <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-200 flex items-center">
              Application Details
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
              <span className="block text-gray-500 dark:text-gray-400">Website</span>
              <a href="https://devdhar.in" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">https://devdhar.in</a>
            </div>
            <div className="md:col-span-2">
              <span className="block text-gray-500 dark:text-gray-400">Support Email</span>
              <a href="mailto:support@devdhar.in" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">support@devdhar.in</a>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r mb-12 shadow-sm">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mt-0.5 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-red-800 dark:text-red-300 font-bold mb-1">Important Notice</h3>
              <p className="text-red-700 dark:text-red-200">
                Deleting your account is permanent and cannot be undone. Once your request has been processed, you will lose access to your account and associated services.
              </p>
            </div>
          </div>
        </div>

        {/* How to Request */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Request Account Deletion</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Users can request permanent deletion of their account by sending an email to the support team.
            </p>
            <div className="mb-8">
              <p className="font-semibold text-gray-900 dark:text-white mb-3">The email should include:</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside ml-2">
                <li>Registered Full Name</li>
                <li>Registered Mobile Number</li>
                <li>Registered Email Address (if available)</li>
                <li>Reason for deletion (optional)</li>
              </ul>
            </div>
            
            <a 
              href="mailto:support@devdhar.in?subject=Account%20Deletion%20Request"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Deletion Request
            </a>
          </div>
        </section>

        {/* What Happens After Your Request */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Happens After Your Request</h2>
          <div className="relative border-l-2 border-blue-100 dark:border-gray-700 ml-3 md:ml-4 space-y-8">
            {[
              "User submits a deletion request.",
              "Devdhara Technologies verifies ownership of the account.",
              "The account is permanently deleted.",
              "Personal information is removed from active systems.",
              "Confirmation is sent to the user by email."
            ].map((step, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute w-8 h-8 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold text-sm -left-[17px] top-[-4px] ring-4 ring-white dark:ring-gray-900">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600 dark:text-gray-400 italic">
            Note: Requests are processed within 7 business days.
          </p>
        </section>

        {/* Data Deleted */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data Deleted</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deletedData.map((item, i) => (
              <div key={i} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Data That May Be Retained */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Data That May Be Retained</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Certain information may be retained only where legally required. Examples include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Security Logs</li>
            <li>Fraud Prevention Records</li>
            <li>Legal Compliance Records</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            Retained information is automatically deleted within 90 days, unless a longer retention period is required by law.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-blue-100 dark:border-gray-700 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="font-semibold text-gray-900 dark:text-white w-32 shrink-0">Developer:</span>
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
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default JaiswalParivaarDeleteAccount;
