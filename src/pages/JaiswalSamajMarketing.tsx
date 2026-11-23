import { useState } from 'react';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useSEO } from "@/hooks/useSEO";
import { 
  Users, 
  Heart, 
  Briefcase, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  Smartphone, 
  Download, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  HelpCircle, 
  Lock, 
  Globe2, 
  Star,
  Quote
} from 'lucide-react';
import projectJaiswal from "@/assets/jaiswal-app.png";

const JaiswalSamajMarketing = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  useSEO({
    title: "Jaiswal Samaj (Parivaar) App | Official Community Platform | Devdhara Technologies",
    description: "The official iOS and Android community mobile application for Jaiswal Samaj (Jaiswal Parivaar / Jaiswal Bandhu Shakti Sangathan). Explore family directories, verified matrimonial profiles, business network, and community events.",
    keywords: "Jaiswal Samaj App, Jaiswal Parivaar App, Jaiswal Bandhu Shakti Sangathan, Jaiswal Community App, Apple App Store Jaiswal App, Devdhara Technologies"
  });

  const features = [
    {
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      title: "Digital Directory & Family Tree",
      desc: "Connect with verified Jaiswal families across cities. Explore family trees, discover relatives, and keep contact details securely updated."
    },
    {
      icon: Heart,
      color: "from-rose-500 to-pink-600",
      title: "Verified Matrimonial Portal",
      desc: "A dignified, private matrimonial matchmaking hub designed specifically for Jaiswal families. Complete biodatas with verified parental contacts."
    },
    {
      icon: Briefcase,
      color: "from-amber-500 to-orange-600",
      title: "Business & Career Hub",
      desc: "Empower community enterprises. Search verified Samaj-owned businesses, post job vacancies, and foster professional partnerships."
    },
    {
      icon: Calendar,
      color: "from-purple-500 to-violet-600",
      title: "News, Events & Sammelans",
      desc: "Stay informed with real-time community announcements, cultural festival schedules, youth conferences, and annual Samaj gatherings."
    },
    {
      icon: Activity,
      color: "from-emerald-500 to-teal-600",
      title: "Emergency Blood Donor Network",
      desc: "Instant access to a 24/7 volunteer blood donor registry filterable by blood group and city to save lives during critical medical situations."
    },
    {
      icon: ShieldCheck,
      color: "from-cyan-500 to-blue-600",
      title: "Privacy & Child Safety Protected",
      desc: "Strict administrator verification for every member, zero intrusive advertisements, encrypted data transmission, and strict CSAE child safety standards."
    }
  ];

  const highlights = [
    { value: "10,000+", label: "Community Members Connected" },
    { value: "100%", label: "Verified Samaj Profiles" },
    { value: "24/7", label: "Emergency Blood Support" },
    { value: "4.9 ★", label: "Average User Rating" }
  ];

  const steps = [
    {
      step: "01",
      title: "Download the App",
      desc: "Install the app free of charge from the Apple App Store or Google Play Store on your smartphone."
    },
    {
      step: "02",
      title: "Verify Mobile Number",
      desc: "Sign up securely using an instant one-time SMS OTP and enter your basic family profile information."
    },
    {
      step: "03",
      title: "Samaj Verification",
      desc: "Local community administrators verify your profile details to ensure a safe, spam-free environment."
    },
    {
      step: "04",
      title: "Connect & Flourish",
      desc: "Access the digital directory, explore matrimonial listings, expand your business, and participate in events."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden relative selection:bg-blue-200 dark:selection:bg-blue-900">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="pt-28 pb-20 relative z-10">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Official App for Jaiswal Samaj Worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1]">
                Uniting & Empowering The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Jaiswal Community</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-2xl">
                The premier digital home for Jaiswal families. Experience a seamless family directory, respectful matrimonial matchmaking, community business promotions, and 24/7 emergency support—all in one elegant, secure mobile app.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="#download"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-gray-800 transition-all font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.03.63-2.67 1.39-.56.65-.99 1.7-0.87 2.74 1.03.08 2.03-.54 2.62-1.26z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight text-gray-300">Download on the</div>
                    <div className="text-base font-bold leading-tight">Apple App Store</div>
                  </div>
                </a>

                <a
                  href="#download"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.213 2.213 0 0 1-.22-.989V2.803c0-.36.08-.7.22-.989zM15.207 13.414l2.58 2.58-13.407 7.74 10.827-10.32zm0-2.828L4.38 0.266l13.407 7.74-2.58 2.58zm1.414 1.414l3.535 2.04c1.13.653 1.13 1.716 0 2.369l-3.535 2.04-2.122-2.122 2.122-2.327z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight text-blue-200">Get it on</div>
                    <div className="text-base font-bold leading-tight">Google Play</div>
                  </div>
                </a>

                <a
                  href="/apps/jaiswal-samaj/support"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium text-sm"
                >
                  <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  App Support Center
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Verified Community
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-blue-500" /> End-to-End Encrypted Data
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-500" /> Zero Commercial Ads
                </div>
              </div>
            </div>

            {/* Right App Mockup Preview (5 cols) */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-sm">
                
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl -z-10" />

                {/* Device Frame */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 relative group">
                    <img 
                      src={projectJaiswal} 
                      alt="Jaiswal Samaj Mobile Application Preview" 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Jaiswal Samaj (Parivaar)</div>
                        <div className="text-[10px] text-gray-300">v1.0.0 for iOS & Android</div>
                      </div>
                      <span className="px-2 py-1 bg-blue-600 text-[10px] font-bold rounded-md">Official App</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Family Tree</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Digitally Connected</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Highlights Bar */}
        <section className="bg-white dark:bg-gray-800/80 border-y border-gray-200 dark:border-gray-800 py-10 mb-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((h, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                  {h.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Complete Community Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-2 mb-4">
              Everything Your Samaj Needs In One Place
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              Designed from the ground up to replace outdated paper directories with an interactive, modern, and trustworthy mobile experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feat.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Simple Onboarding
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-2">
              How To Join Jaiswal Samaj
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 relative">
                <span className="text-3xl font-black text-blue-600/20 dark:text-blue-400/20 mb-2 block font-mono">
                  {st.step}
                </span>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">{st.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-light">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Testimonial */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center">
            <Quote className="w-12 h-12 text-blue-400/30 mx-auto mb-4" />
            <p className="text-lg sm:text-xl font-light italic leading-relaxed text-blue-100 max-w-2xl mx-auto mb-6">
              "This platform has transformed how our community connects. We've moved from dusty registers to a vibrant, interactive digital home that truly empowers every member across generations."
            </p>
            <div className="font-bold text-white text-base">Community Executive Council</div>
            <div className="text-xs text-blue-300">Jaiswal Bandhu Shakti Sangathan</div>
          </div>
        </section>

        {/* Download Call To Action */}
        <section id="download" className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-blue-200 dark:border-blue-900/60 p-8 sm:p-12 text-center shadow-lg relative">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
              Ready to Join the Community?
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8 font-light">
              Download the official Jaiswal Samaj application today on your iPhone, iPad, or Android phone and stay connected with your community roots.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-gray-800 transition-all font-semibold text-sm shadow-md"
              >
                <Download className="w-5 h-5 text-gray-300" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-300 leading-tight">Available on</div>
                  <div className="text-base font-bold leading-tight">Apple App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold text-sm shadow-md"
              >
                <Download className="w-5 h-5 text-blue-200" />
                <div className="text-left">
                  <div className="text-[10px] text-blue-200 leading-tight">Get it on</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Legal & Compliance Footer Bar (Required for App Store Review) */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-100 dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Developer:</span> Devdhara Technologies | <span className="font-semibold text-gray-900 dark:text-white">Client:</span> Jaiswal Samaj (Naroda / Gujarat)
              </div>
              <div className="flex flex-wrap gap-4 font-medium">
                <a href="/apps/jaiswal-samaj/support" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Support URL</a>
                <span>•</span>
                <a href="/apps/jaiswal-parivaar/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="/apps/jaiswal-samaj/copyright" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Copyright Notice</a>
                <span>•</span>
                <a href="/apps/jaiswal-parivaar/child-safety" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Child Safety</a>
                <span>•</span>
                <a href="/apps/jaiswal-parivaar/delete-account" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Delete Account</a>
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

export default JaiswalSamajMarketing;
