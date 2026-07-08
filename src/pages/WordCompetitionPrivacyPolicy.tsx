import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useSEO } from "@/hooks/useSEO";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";
import { 
  Shield, 
  Eye, 
  Settings, 
  Lock, 
  Database, 
  ShieldAlert, 
  UserCheck, 
  History, 
  Mail, 
  Globe, 
  Camera, 
  FolderOpen, 
  Wifi, 
  Bell, 
  Smartphone, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

const WordCompetitionPrivacyPolicy = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrollProgress, setScrollProgress] = useState(0);

  useSEO({
    title: "Privacy Policy | Word Competition | Devdhara Technologies",
    description: "Read the Privacy Policy for the Word Competition educational app developed by Devdhara Technologies. Learn how we collect, use, and protect your data.",
    keywords: "Word Competition Privacy Policy, શબ્દ સ્પર્ધા, Devdhara Technologies App, educational app privacy policy, data protection policy",
    canonicalUrl: "https://devdhar.in/app/word-competition/privacy-policy"
  });

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-we-collect', title: '2. Information We Collect' },
    { id: 'how-we-use-information', title: '3. How We Use Information' },
    { id: 'permissions-used', title: '4. Permissions Used' },
    { id: 'third-party-services', title: '5. Third-Party Services' },
    { id: 'data-security', title: '6. Data Security' },
    { id: 'childrens-privacy', title: '7. Children\'s Privacy' },
    { id: 'data-retention', title: '8. Data Retention' },
    { id: 'user-rights', title: '9. User Rights' },
    { id: 'changes-to-policy', title: '10. Changes to This Policy' },
    { id: 'contact', title: '11. Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      let currentActive = 'introduction';
      
      for (const el of sectionElements) {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            currentActive = el.id;
          }
        }
      }
      setActiveSection(currentActive);

      // Update reading progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-200 dark:bg-zinc-800 z-[110]">
        <div 
          className="h-full bg-gradient-to-r from-gold via-yellow-500 to-amber-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Table of Contents (Desktop Sticky) */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-32 glass-premium dark:glass-premium-dark rounded-[24px] p-6 shadow-sm border border-black/[0.04] dark:border-white/[0.08]">
            <div className="flex items-center gap-2 mb-4 border-b border-black/[0.05] dark:border-white/[0.05] pb-3">
              <BookOpen className="w-4 h-4 text-gold" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">Table of Contents</h3>
            </div>
            <ul className="space-y-2.5 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    className={`text-left block w-full transition-all duration-300 py-1 border-l-2 pl-3 ${
                      activeSection === section.id
                        ? 'border-gold text-gold font-semibold translate-x-1'
                        : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-gold dark:hover:text-gold hover:border-gold/30'
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
        <div className="flex-1 max-w-[900px] overflow-hidden">
          
          {/* Breadcrumb */}
          <nav className="flex text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a href="/" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-1 text-zinc-400">/</span>
                  <a href="/projects" className="hover:text-gold transition-colors">Apps</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-1 text-zinc-400">/</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Word Competition</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-1 text-zinc-400">/</span>
                  <span className="text-zinc-950 dark:text-white font-medium">Privacy Policy</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 dark:bg-gold/15 flex items-center justify-center text-gold border border-gold/20">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/5 dark:bg-gold/10 px-3 py-1 rounded-full border border-gold/10">
                Privacy Assurance
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp} 
              className="text-4xl md:text-5xl font-black font-display tracking-tight text-zinc-950 dark:text-white mb-6"
            >
              Privacy <span className="font-serif-italic italic text-gold font-light">Policy</span>.
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-medium"
            >
              Your privacy is important to us. This Privacy Policy explains how the Word Competition (શબ્દ સ્પર્ધા) app collects, uses, and protects your information.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-black/[0.02] dark:bg-white/[0.02] px-4 py-2 rounded-xl border border-black/[0.03] dark:border-white/[0.03]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Last Updated: July 2026
            </motion.div>
          </motion.div>

          {/* App Info Glass Card */}
          <div className="glass-premium dark:glass-premium-dark shadow-sm rounded-3xl p-6 md:p-8 border border-black/[0.04] dark:border-white/[0.08] mb-12">
            <h2 className="text-base font-bold text-zinc-950 dark:text-white flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-gold" />
              App Information
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Application</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Word Competition (શબ્દ સ્પર્ધા)</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Developer</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Devdhara Technologies</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Category</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Educational / Word Game</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Developer Site</span>
                <a href="https://devdhar.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">devdhar.in</a>
              </div>
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Platform Support</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Android & iOS</span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Current Release</span>
                <span className="font-semibold text-zinc-900 dark:text-white">1.0.0</span>
              </div>
            </div>
          </div>

          {/* Document Content */}
          <div className="space-y-12">
            
            {/* Section 1: Introduction */}
            <motion.section 
              id="introduction" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">1</span>
                Introduction
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                At Devdhara Technologies, we value user privacy and are committed to protecting user information. This Privacy Policy details our commitment and outlines what information the Word Competition application collects, how we manage it, and the security measures we deploy to ensure its protection.
              </p>
            </motion.section>

            {/* Section 2: Information We Collect */}
            <motion.section 
              id="information-we-collect" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">2</span>
                Information We Collect
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-6">
                To provide high-quality educational gameplay, multiplayer matchmaking, and global leaderboards, we may collect the following information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.03]">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    User Credentials & Profile
                  </h4>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 pl-3 list-disc">
                    <li>Name (if provided during setup)</li>
                    <li>Email Address (if provided for account recovery)</li>
                    <li>Profile Photo (optional user avatar)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.03]">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Game Mechanics Data
                  </h4>
                  <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 pl-3 list-disc">
                    <li>Game Scores and stats</li>
                    <li>Leaderboard Data (public ranks)</li>
                    <li>App Usage Analytics</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.03] md:col-span-2">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Technical System Details
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400 list-inside pl-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Device Information
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Crash Reports
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-400"></span> Network Information
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-zinc-400"></span> App Usage Analytics
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2.5 p-4 rounded-2xl bg-gold/5 border border-gold/15 text-sm text-gold-dark dark:text-gold-light font-semibold">
                <ShieldAlert className="w-5 h-5 shrink-0 text-gold" />
                <span>Devdhara Technologies does NOT collect unnecessary personal information from users.</span>
              </div>
            </motion.section>

            {/* Section 3: How We Use Information */}
            <motion.section 
              id="how-we-use-information" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">3</span>
                How We Use Information
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-4">
                The collected information is used to facilitate, improve, and secure your educational experience. Specifically, we use your data to:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Create user accounts & recover profiles",
                  "Display multiplayer matchmaking and leaderboard rankings",
                  "Improve core gameplay and educational vocabulary algorithms",
                  "Monitor and fix application bugs and software glitches",
                  "Improve and optimize application loading and device performance",
                  "Prevent cheating, fraud, and system abuse",
                  "Provide responsive user & customer support"
                ].map((usage, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                    <span>{usage}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Section 4: Permissions Used */}
            <motion.section 
              id="permissions-used" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-6">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">4</span>
                Permissions Used
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Permission Card: Camera */}
                <div className="glass-premium dark:glass-premium-dark rounded-2xl p-5 border border-black/[0.03] dark:border-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0 border border-gold/10">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-1">Camera</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                      Used only when actively required for taking a profile photo from within the app.
                    </p>
                  </div>
                </div>

                {/* Permission Card: Storage */}
                <div className="glass-premium dark:glass-premium-dark rounded-2xl p-5 border border-black/[0.03] dark:border-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0 border border-gold/10">
                    <FolderOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-1">Storage</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                      Used only to browse and select existing profile images from your device gallery.
                    </p>
                  </div>
                </div>

                {/* Permission Card: Internet */}
                <div className="glass-premium dark:glass-premium-dark rounded-2xl p-5 border border-black/[0.03] dark:border-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0 border border-gold/10">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-1">Internet</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                      Required to connect to servers for real-time multiplayer gameplay, syncing, and loading leaderboards.
                    </p>
                  </div>
                </div>

                {/* Permission Card: Notifications */}
                <div className="glass-premium dark:glass-premium-dark rounded-2xl p-5 border border-black/[0.03] dark:border-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0 border border-gold/10">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 dark:text-white mb-1">Notifications</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                      Used to deliver alerts for game updates, matchmaking queue completions, and announcements.
                    </p>
                  </div>
                </div>

              </div>
            </motion.section>

            {/* Section 5: Third-Party Services */}
            <motion.section 
              id="third-party-services" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">5</span>
                Third-Party Services
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-4">
                The app integrates with specific, verified Google and Firebase cloud services to run game systems safely. These include:
              </p>
              
              <ul className="space-y-2 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">Firebase Authentication:</span> handles logins, accounts, and session keys.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">Firebase Firestore:</span> stores game scores, match profiles, and leaderboard listings.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">Firebase Analytics:</span> registers general behavior, app usage, and screen clicks.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">Google Play Services / Apple Game Center:</span> manages app verification, achievement systems, and downloads.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">Google AdMob:</span> serves customized ads (only when ads are enabled by user settings).
                </li>
              </ul>
              
              <p className="text-xs text-zinc-500 dark:text-zinc-450 leading-relaxed italic border-t border-black/[0.05] dark:border-white/[0.05] pt-3 mt-3">
                Please note that these third-party platforms are governed by their own individual privacy policies, which we recommend you review when configuring your device settings.
              </p>
            </motion.section>

            {/* Section 6: Data Security */}
            <motion.section 
              id="data-security" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">6</span>
                Data Security
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-4">
                We design with security first in mind. To keep your information protected from breach, disclosure, or altering, we utilize these enterprise security standards:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-800 dark:text-zinc-200 block">Secure Connections (HTTPS)</strong>
                    All transmission of data between app client and Cloud DB uses modern SSL/TLS configurations.
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-800 dark:text-zinc-200 block">Encryption at Rest</strong>
                    User-sensitive fields and database entries are stored encrypted behind multi-factor protocols.
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-800 dark:text-zinc-200 block">Restricted Infrastructure Access</strong>
                    Employee access to backend panels, servers, and configurations is heavily restricted on a need-to-know basis.
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Lock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-800 dark:text-zinc-200 block">Regular Security Updates</strong>
                    Our engineering team deploys regular patches to database rules, plugins, and app builds to secure against new leaks.
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 7: Children's Privacy */}
            <motion.section 
              id="childrens-privacy" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">7</span>
                Children's Privacy
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                The Word Competition app is designed for educational purposes, helping players expand their vocabulary. We care deeply about children's safety. Children should use this application under parental, guardian, or school supervision when applicable. We do not design workflows to collect personal details from minors without consent.
              </p>
            </motion.section>

            {/* Section 8: Data Retention */}
            <motion.section 
              id="data-retention" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">8</span>
                Data Retention
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                We store and retain your user profiles, match data, and scores only as long as necessary to provide continuous services (such as maintaining leaderboard stats) or complying with statutory requirements and legal obligations.
              </p>
            </motion.section>

            {/* Section 9: User Rights */}
            <motion.section 
              id="user-rights" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">9</span>
                User Rights
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-4">
                We value your choices regarding data ownership. As a user, you have the right to request:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></span>
                  <div>
                    <strong>Access to Data:</strong> request a summary of the personal files and details we maintain about your account.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></span>
                  <div>
                    <strong>Correction of Data:</strong> update incorrect emails, username text, or configuration selections.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></span>
                  <div>
                    <strong>Deletion of Account:</strong> completely delete your profile database entry.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2"></span>
                  <div>
                    <strong>Removal of Personal Info:</strong> request the removal of names, photos, or scores from active leaderboards.
                  </div>
                </li>
              </ul>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-4 italic">
                To trigger any request, please write to our support staff at <a href="mailto:support@devdhar.in" className="text-gold font-semibold hover:underline">support@devdhar.in</a>. We process validated requests within 30 days.
              </p>
            </motion.section>

            {/* Section 10: Changes to This Policy */}
            <motion.section 
              id="changes-to-policy" 
              className="scroll-mt-28 p-6 md:p-8 rounded-3xl bg-white/20 dark:bg-zinc-900/10 backdrop-blur-sm border border-black/[0.02] dark:border-white/[0.02] transition-all hover:bg-white/40 dark:hover:bg-zinc-900/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-4">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">10</span>
                Changes to This Policy
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                We may periodically update this page to reflect feature upgrades, backend migration, or legislative shifts. The date of release is shown at the top. We encourage users to periodically review this Privacy Policy page.
              </p>
            </motion.section>

            {/* Section 11: Contact */}
            <motion.section 
              id="contact" 
              className="scroll-mt-28 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white flex items-center gap-3 mb-6">
                <span className="text-sm font-black bg-gold/10 text-gold w-7 h-7 rounded-lg flex items-center justify-center">11</span>
                Contact Us
              </h2>
              
              {/* Contact Card with premium gradient background */}
              <div className="relative rounded-3xl bg-zinc-950 text-white p-8 overflow-hidden border border-white/5 shadow-lg group">
                {/* Glowing details */}
                <div className="absolute right-[-10%] top-[-20%] w-[200px] h-[200px] bg-gold/10 rounded-full blur-[80px] pointer-events-none transition-all group-hover:bg-gold/15 duration-500" />
                <div className="absolute left-[-15%] bottom-[-20%] w-[220px] h-[220px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-gold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black tracking-tight font-display">Devdhara Technologies</h3>
                      <p className="text-xs text-white/50">Official Developer & Support Entity</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-4 border-t border-white/5">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs text-white/40 font-semibold uppercase tracking-wider mb-0.5">Support Email</span>
                          <a href="mailto:support@devdhar.in" className="font-semibold text-white hover:text-gold transition-colors">
                            support@devdhar.in
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Globe className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs text-white/40 font-semibold uppercase tracking-wider mb-0.5">Corporate Website</span>
                          <a 
                            href="https://devdhar.in" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-semibold text-white hover:text-gold transition-colors inline-flex items-center gap-1 group/link"
                          >
                            https://devdhar.in
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-white/45 mt-8 font-light max-w-lg leading-relaxed">
                    Have inquiries regarding user accounts, deletion permissions, or security? Drop a line to our web development team.
                  </p>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </main>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default WordCompetitionPrivacyPolicy;
