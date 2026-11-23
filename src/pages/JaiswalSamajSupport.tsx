import { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useSEO } from "@/hooks/useSEO";
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown, 
  MessageSquare, 
  AlertTriangle, 
  UserCheck, 
  Smartphone, 
  HeartHandshake, 
  FileText, 
  Lock,
  Search,
  ExternalLink
} from 'lucide-react';
import { submitToFormspree } from "@/lib/formspree";
import { toast } from "@/hooks/use-toast";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Account & Login",
    question: "How do I register an account on the Jaiswal Samaj (Parivaar) app?",
    answer: "Download the app from the Apple App Store or Google Play Store. Open the app, tap 'Register / Create Account', enter your mobile number to receive an SMS OTP, and complete your basic personal and family details. Once submitted, your profile is verified by the community administrator to ensure authentic Samaj membership."
  },
  {
    category: "Account & Login",
    question: "I am not receiving the SMS OTP on my mobile phone. What should I do?",
    answer: "Please ensure your mobile number is active and has good cellular reception. Wait 60 seconds before requesting a resend. If you still do not receive the OTP, check if your phone has DND (Do Not Disturb) active or contact our support team at support@devdhar.in with your registered mobile number."
  },
  {
    category: "Account & Login",
    question: "Can I update my phone number or email address after registration?",
    answer: "Yes. Go to your Profile tab within the app, tap 'Edit Profile', and update your contact information. If you change your phone number, a one-time OTP verification will be required to confirm your new number."
  },
  {
    category: "Directory & Family Tree",
    question: "How can I add or edit my family members in the digital directory?",
    answer: "Navigate to the 'Family Tree' or 'My Family' section in your profile. Tap 'Add Family Member', select the relationship (spouse, parent, child, sibling), and fill in their basic details. Family members can also be linked to their own accounts once approved."
  },
  {
    category: "Directory & Family Tree",
    question: "Who can see my family's contact details and address?",
    answer: "Only verified and authenticated members of Jaiswal Samaj can view directory listings. Furthermore, you have granular privacy settings within 'Settings > Privacy' to hide your private phone number or email address from the public member view if preferred."
  },
  {
    category: "Matrimonial Hub",
    question: "How does the Matrimonial section work, and is it secure?",
    answer: "The Matrimonial section is an exclusive, dignified portal for Jaiswal community families looking for prospective alliances. Biodata is submitted with parent or guardian consent and verified before listing. Contact details are shared only upon mutual consent and interest acceptance to preserve family privacy."
  },
  {
    category: "Community & Events",
    question: "How do I post an announcement, event, or business listing?",
    answer: "Verified members can submit announcements, business listings, or event proposals via the 'Community Feed' or 'Business Hub'. Every submission is quickly reviewed by the community moderation team to keep the feed spam-free and constructive."
  },
  {
    category: "Emergency & Blood Help",
    question: "How do I access the Emergency Blood Donor directory?",
    answer: "The 'Blood Helpdesk' is available 24/7 in the app under the Emergency Services tab. You can filter registered blood donors by blood group (A+, B+, O+, AB+, etc.) and city/region. If you need urgent assistance, you can trigger an emergency community broadcast with one tap."
  },
  {
    category: "Privacy & Account Deletion",
    question: "How do I request account deletion or removal of my data?",
    answer: "You can request account deletion at any time directly inside the app (under Settings > Delete Account) or by visiting our official web deletion page at /apps/jaiswal-parivaar/delete-account. All your personal data and uploaded photos will be permanently deleted within 7 business days."
  },
  {
    category: "Technical Issues",
    question: "What iOS version is required to run the app?",
    answer: "The Jaiswal Samaj app is optimized for iOS 14.0 or later on iPhone and iPad, as well as Android 8.0 (Oreo) and above. Please keep your device operating system updated to the latest version for the best experience and security."
  }
];

const JaiswalSamajSupport = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('App Support / Help Request');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: "App Support | Jaiswal Samaj & Parivaar App | Devdhara Technologies",
    description: "Official Support Center for the Jaiswal Samaj (Jaiswal Parivaar) iOS & Android mobile application. Get help with login, family directory, matrimonial portal, troubleshooting, and contact our dedicated support team.",
    keywords: "Jaiswal Samaj Support URL, Jaiswal Parivaar App Help, Apple App Store Support URL, Devdhara Technologies App Support, Jaiswal App FAQ"
  });

  const categories = ['All', 'Account & Login', 'Directory & Family Tree', 'Matrimonial Hub', 'Community & Events', 'Emergency & Blood Help', 'Privacy & Account Deletion', 'Technical Issues'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and description of your issue.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    const res = await submitToFormspree({
      name,
      email,
      phone,
      subject: `[Jaiswal App Support] ${subject}`,
      message,
      form_type: "jaiswal_app_support"
    });
    setIsSubmitting(false);

    if (res.success) {
      toast({
        title: "Support Request Sent",
        description: "Our support engineering team has received your inquiry and will respond within 24-48 hours.",
      });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      toast({
        title: "Submission Failed",
        description: res.error || "Could not submit inquiry. Please email support@devdhar.in directly.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden relative selection:bg-blue-200 dark:selection:bg-blue-900">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <a href="/projects/jaiswal-bandhu-shakti-sangathan-app" className="ml-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Apps</a>
              </div>
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
                <span className="ml-1 text-gray-900 dark:text-white font-medium">App Support</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 md:p-14 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide text-blue-200 mb-6 uppercase">
              <HelpCircle className="w-4 h-4" /> Official Apple App Store & Google Play Support
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Jaiswal Samaj Support Center
            </h1>
            <p className="text-lg text-blue-100/90 leading-relaxed font-light mb-8">
              Welcome to the official support portal for the <strong className="font-semibold text-white">Jaiswal Samaj (Jaiswal Parivaar)</strong> mobile application. Find answers to frequently asked questions, troubleshooting instructions, or contact our engineering and moderation helpdesk.
            </p>

            {/* Quick Stats / Info Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200 block">Response Time</span>
                <span className="text-sm font-bold text-white">&lt; 24-48 Hours</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200 block">Supported OS</span>
                <span className="text-sm font-bold text-white">iOS 14+ & Android</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200 block">Current Version</span>
                <span className="text-sm font-bold text-white">v1.0.0 (Production)</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <span className="text-xs text-blue-200 block">Engineering</span>
                <span className="text-sm font-bold text-white">Devdhara Tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Technical Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              For app crashes, OTP verification failures, profile issues, or bug reports.
            </p>
            <a 
              href="mailto:support@devdhar.in?subject=Jaiswal%20Samaj%20App%20Support%20Request" 
              className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              support@devdhar.in <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Samaj Community Desk</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              For membership verification, matrimonial bio-data approval, and event inquiries.
            </p>
            <a 
              href="mailto:community@devdhar.in?subject=Jaiswal%20Samaj%20Community%20Verification" 
              className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              community@devdhar.in <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Support Hours</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Monday – Saturday: 9:00 AM – 7:00 PM IST
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Emergency blood donation requests are prioritized 24/7 via the in-app emergency system.
            </p>
          </div>
        </div>

        {/* Support Grid: Left FAQ, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* FAQ Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Browse our knowledgebase to find instant solutions for common app queries.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search troubleshooting questions (e.g. OTP, family tree, matrimonial)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white font-medium shadow-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = expandedIndex === index;
                  return (
                    <div 
                      key={index}
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setExpandedIndex(isOpen ? null : index)}
                        className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            {faq.category}
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white text-base">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/60">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No FAQs found matching "{searchQuery}". Please send us a message below.</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Support Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm sticky top-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Submit a Support Ticket</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Directly contact our iOS & Android engineering team</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Jaiswal"
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Issue Category
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="OTP / Login Issue">OTP / Login Issue</option>
                    <option value="Profile Verification">Profile Verification</option>
                    <option value="Family Tree Update">Family Tree Update</option>
                    <option value="Matrimonial Listing">Matrimonial Listing</option>
                    <option value="App Bug / Crash Report">App Bug / Crash Report</option>
                    <option value="Data Privacy / Account Deletion">Data Privacy / Account Deletion</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Detailed Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe what happened, including device model (iPhone / Android) and iOS version if applicable..."
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Sending Request..." : "Submit Support Request"}
                </button>

                <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-2">
                  We treat all submitted data confidentially in accordance with our <a href="/apps/jaiswal-parivaar/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Apple App Store & Developer Information Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            App Store Metadata & Compliance Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="block font-semibold text-gray-900 dark:text-white mb-1">Application Title:</span>
              <span>Jaiswal Samaj (Jaiswal Parivaar / Jaiswal Bandhu Shakti Sangathan)</span>
            </div>
            <div>
              <span className="block font-semibold text-gray-900 dark:text-white mb-1">App Developer & Engineering:</span>
              <span>Devdhara Technologies (Ahmedabad, India)</span>
            </div>
            <div>
              <span className="block font-semibold text-gray-900 dark:text-white mb-1">Target Platform:</span>
              <span>iOS 14.0+ (iPhone, iPad) & Android</span>
            </div>
            <div>
              <span className="block font-semibold text-gray-900 dark:text-white mb-1">Official Support URL:</span>
              <a href="https://devdhar.in/apps/jaiswal-samaj/support" className="text-blue-600 dark:text-blue-400 hover:underline">https://devdhar.in/apps/jaiswal-samaj/support</a>
            </div>
            <div>
              <span className="block font-semibold text-gray-900 dark:text-white mb-1">Marketing URL:</span>
              <a href="https://devdhar.in/apps/jaiswal-samaj" className="text-blue-600 dark:text-blue-400 hover:underline">https://devdhar.in/apps/jaiswal-samaj</a>
            </div>
            <div>
              <span className="block font-semibold text-gray-900 dark:text-white mb-1">Copyright Holder:</span>
              <span className="text-gray-800 dark:text-gray-200">© 2026 Devdhara Technologies & Jaiswal Samaj</span>
            </div>
          </div>
        </div>

        {/* Quick Links Footer Navigation */}
        <div className="p-6 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Official App Compliance & Legal Resources</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">Direct documentation links required for App Store and Google Play deployment</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold">
            <a href="/apps/jaiswal-samaj" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Marketing Page <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-parivaar/privacy-policy" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Privacy Policy <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-samaj/copyright" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Copyright Notice <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-parivaar/child-safety" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Child Safety Standards <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a href="/apps/jaiswal-parivaar/delete-account" className="text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1">
              Account Deletion <ChevronRight className="w-3.5 h-3.5" />
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

export default JaiswalSamajSupport;
