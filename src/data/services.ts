import { Globe, Smartphone, Layout, Database, Code2, Layers, Cpu, ShieldCheck, Zap, Monitor, SmartphoneNfc, Terminal, Search, TrendingUp, Settings, Megaphone, Target, Share2, BarChart3 } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  icon: any;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  techStack: string[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  process?: ProcessStep[];
  highlights?: { label: string; value: string }[];
}

export const serviceCategories = [
  {
    title: "Development",
    services: [
      { name: "Web Development", slug: "full-stack-web", icon: Globe },
      { name: "Software Development", slug: "enterprise-software", icon: Code2 },
      { name: "Mobile App Development", slug: "react-native", icon: Smartphone },
      { name: "Android / iOS Apps", slug: "ios-dev", icon: SmartphoneNfc },
    ]
  },
  {
    title: "Design & UX",
    services: [
      { name: "UI/UX Design", slug: "product-design", icon: Layout },
      { name: "Prototype Development", slug: "prototyping", icon: Layers },
    ]
  },
  {
    title: "Growth & Marketing",
    services: [
      { name: "Social Media Marketing", slug: "social-media-marketing", icon: Megaphone },
      { name: "Performance Marketing", slug: "performance-marketing", icon: Target },
      { name: "SEO Services", slug: "seo-services", icon: Search },
      { name: "Google Ranking", slug: "google-ranking", icon: TrendingUp },
    ]
  },
  {
    title: "Support & Solutions",
    services: [
      { name: "Custom IT Solutions", slug: "cloud-infra", icon: Cpu },
      { name: "E-commerce Solutions", slug: "ecommerce", icon: Layers },
      { name: "Maintenance Support", slug: "it-consulting", icon: Settings },
    ]
  }
];

const commonFaqs = {
  web: [
    { q: "How long does a typical web project take?", a: "Most web applications take between 6 to 12 weeks from design to deployment." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. We follow a mobile-first responsive design approach." },
    { q: "Do you provide hosting and maintenance?", a: "Yes, we offer cloud hosting setup and ongoing maintenance packages." }
  ],
  mobile: [
    { q: "Can you help with App Store submissions?", a: "Yes, we handle the entire submission process for both Apple App Store and Google Play Store." },
    { q: "Should I build native or cross-platform?", a: "It depends on your requirements. We specialize in both to ensure the best fit for your budget and performance needs." }
  ],
  seo: [
    { q: "How long does it take to see SEO results?", a: "SEO is a long-term strategy. Typically, significant ranking improvements are seen within 3-6 months." },
    { q: "Do you guarantee #1 ranking on Google?", a: "While no one can guarantee #1, we use data-driven strategies that consistently put our clients on the first page." }
  ],
  smm: [
    { q: "Which social media platforms do you manage?", a: "We manage and scale accounts on Meta (Instagram & Facebook), LinkedIn, Twitter/X, and YouTube depending on where your target audience hangs out." },
    { q: "Do you handle content creation and ad management?", a: "Yes, we provide end-to-end management including strategy, graphic design, reel editing, copywriting, and targeted ad campaign management." },
    { q: "How do we track the ROI of social media marketing?", a: "We provide detailed monthly analytics covering reach, engagement, click-through rates, lead generation, and ROAS (Return on Ad Spend)." }
  ]
};

export const services: ServiceDetail[] = [
  {
    slug: "full-stack-web",
    title: "Web Development",
    category: "Development",
    icon: Globe,
    tagline: "High-performance websites engineered for speed and conversion.",
    description: "Custom-built, high-performance websites engineered for speed and conversion.",
    fullDescription: "At DevDhara Technologies, we build robust web applications that handle complex business logic and provide seamless user experiences. From corporate websites to complex portals, we ensure your digital presence is elite.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    benefits: ["SEO Optimized", "Responsive Design", "Fast Loading", "Secure"],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    deliverables: ["Full Source Code", "UI/UX Assets", "Deployment Specs"],
    faqs: commonFaqs.web,
    features: [
      { title: "Custom Coding", desc: "No templates. Everything is built from scratch for your brand." },
      { title: "Interactive UI", desc: "Engaging interfaces that keep users on your site." },
      { title: "Headless CMS Setup", desc: "Empower your content creators with flexible, easy-to-use CMS integration." },
      { title: "Performance Tuning", desc: "Sub-second loading times for max conversion and SEO." }
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", desc: "Mapping your business goals, target audience, and defining technical specifications." },
      { step: "02", title: "UI/UX Engineering", desc: "Designing high-fidelity prototypes with interactive micro-animations." },
      { step: "03", title: "Full-Stack Development", desc: "Writing clean, modular code with modern frameworks and robust security." },
      { step: "04", title: "Deployment & Scaling", desc: "Automated CI/CD pipelines, SSL configuration, and global CDN deployment." }
    ],
    highlights: [
      { label: "Lighthouse Score", value: "99+ Performance" },
      { label: "Load Time", value: "< 0.8 Seconds" }
    ]
  },
  {
    slug: "enterprise-software",
    title: "Software Development",
    category: "Development",
    icon: Code2,
    tagline: "Enterprise-grade software solutions for modern businesses.",
    description: "Enterprise-grade custom software solutions tailored to your unique business needs.",
    fullDescription: "We build bespoke software tailored to your specific business challenges. Whether it's an internal tool or a customer-facing platform, our software is built to scale.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    benefits: ["Scalable", "Reliable", "Custom Built", "Secure"],
    techStack: ["Node.js", "Python", "PostgreSQL", "Docker"],
    deliverables: ["System Architecture", "Software Codebase", "Admin Guide"],
    faqs: commonFaqs.web,
    features: [
      { title: "Process Automation", desc: "Automate repetitive tasks to save time and money." },
      { title: "Data Security", desc: "Built with industry-standard encryption and security protocols." },
      { title: "API Integrations", desc: "Seamless integration with ERPs, CRMs, and third-party payment gateways." },
      { title: "High-Availability Architecture", desc: "Fault-tolerant design built for 99.99% operational uptime." }
    ],
    process: [
      { step: "01", title: "Requirement Analysis", desc: "Deconstructing workflows to architect customized software blueprints." },
      { step: "02", title: "Agile Development", desc: "Iterative sprints with bi-weekly client demos and continuous feedback loops." },
      { step: "03", title: "Security & QA", desc: "Rigorous automated testing, load testing, and penetration testing." },
      { step: "04", title: "Enterprise Rollout", desc: "Zero-downtime deployment, data migration, and team onboarding." }
    ]
  },
  {
    slug: "react-native",
    title: "Mobile App Development",
    category: "Development",
    icon: Smartphone,
    tagline: "Scalable and intuitive mobile applications for modern users.",
    description: "Scalable and intuitive mobile applications for Android and iOS platforms.",
    fullDescription: "We specialize in building mobile apps that provide native performance with a shared codebase, ensuring faster time-to-market and lower maintenance costs.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    benefits: ["Native Performance", "Cross-Platform", "Fast Updates", "App Store Ready"],
    techStack: ["React Native", "Expo", "Firebase", "TypeScript"],
    deliverables: ["App Codebase", "Store Assets", "API Documentation"],
    faqs: commonFaqs.mobile,
    features: [
      { title: "Native Feel", desc: "Apps that look and behave like they were built for the device." },
      { title: "Offline Sync", desc: "Allow users to work even without an internet connection." },
      { title: "Push Notifications", desc: "Engage users with automated push campaigns and deep linking." },
      { title: "In-App Payments", desc: "Secure multi-currency payment gateway integrations." }
    ],
    process: [
      { step: "01", title: "App Prototype", desc: "Creating clickable wireframes and user interaction flows." },
      { step: "02", title: "Cross-Platform Build", desc: "Engineered single codebase for smooth 60fps performance on iOS & Android." },
      { step: "03", title: "Store Submission", desc: "Navigating App Store and Google Play compliance guidelines for instant approval." },
      { step: "04", title: "Post-Launch Updates", desc: "OTA updates and ongoing performance monitoring." }
    ]
  },
  {
    slug: "ios-dev",
    title: "Android / iOS Apps",
    category: "Development",
    icon: SmartphoneNfc,
    tagline: "Premium mobile experiences for both major platforms.",
    description: "Native and cross-platform mobile solutions for Android and iOS.",
    fullDescription: "We deliver high-quality mobile applications for both Android and iOS, ensuring your brand reaches its audience wherever they are.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80&fit=crop",
    benefits: ["Broad Reach", "High Performance", "Modern UI", "Scaleable"],
    techStack: ["Kotlin", "Swift", "Flutter", "React Native"],
    deliverables: ["Binary Files", "Source Code", "Submission Support"],
    faqs: commonFaqs.mobile,
    features: [
      { title: "Device Optimized", desc: "Full advantage of hardware features like GPS and Camera." },
      { title: "User Retention", desc: "Designed to keep users coming back with push notifications." }
    ]
  },
  {
    slug: "product-design",
    title: "UI/UX Design",
    category: "Design & UX",
    icon: Layout,
    tagline: "User-centric designs that prioritize engagement and seamless flow.",
    description: "User-centric designs that prioritize engagement and seamless digital experiences.",
    fullDescription: "We believe a product should be as beautiful as it is functional. Our UI/UX process puts the user first, ensuring every interaction is intuitive.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&fit=crop",
    benefits: ["User Centered", "Modern Aesthetic", "Interactive", "Brand Aligned"],
    techStack: ["Figma", "Adobe CC", "Framer", "Protopie"],
    deliverables: ["High-Fi Mockups", "Interactive Prototype", "Design System"],
    faqs: commonFaqs.web,
    features: [
      { title: "Visual Storytelling", desc: "Using design to communicate your brand's unique value." },
      { title: "Micro-animations", desc: "Subtle movements that make the app feel alive and premium." }
    ]
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Growth & Marketing",
    icon: Megaphone,
    tagline: "Strategic social campaigns that build brand authority and drive viral growth.",
    description: "End-to-end social media management, creative content creation, and targeted brand growth across Instagram, LinkedIn, and Meta platforms.",
    fullDescription: "At DevDhara Technologies, we turn social media into a high-converting growth engine for your business. From visual storytelling and viral reel creation to community management and influencer partnerships, we elevate your brand image and connect you directly with your ideal audience.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80&fit=crop",
    benefits: ["Brand Authority", "Audience Engagement", "High Conversion", "Targeted Reach"],
    techStack: ["Meta Business Suite", "LinkedIn Ads", "Canva & Adobe Suite", "Hootsuite", "CapCut Pro", "GA4"],
    deliverables: ["Monthly Content Calendar", "Custom Graphics & Viral Reels", "Community Engagement Strategy", "Monthly ROI & Growth Analytics"],
    faqs: [
      { q: "Which social media platforms do you manage?", a: "We manage and scale accounts on Meta (Instagram & Facebook), LinkedIn, Twitter/X, and YouTube depending on where your target audience hangs out." },
      { q: "Do you handle video production and scriptwriting for Reels?", a: "Yes, we handle end-to-end production including scriptwriting, dynamic captions, trending audio curation, motion transitions, and high-definition reel editing." },
      { q: "How do we track the ROI of social media marketing?", a: "We provide detailed monthly analytics covering impressions, engagement rates, click-through rates (CTR), lead generation, and ROAS (Return on Ad Spend)." },
      { q: "Can we review and approve content before it goes live?", a: "Always. We upload all monthly content calendars, visual assets, and captions to a shared client dashboard for your review and approval prior to scheduling." },
      { q: "What frequency of posting is included?", a: "Our standard packages include 4 to 6 high-impact posts per week per platform, combining static carousels, dynamic reels, and interactive stories." }
    ],
    features: [
      { title: "Short-Form Reel & Video Studio", desc: "High-engagement Instagram Reels, Shorts, and TikTok videos crafted with viral hooks, custom motion graphics, and trending audio." },
      { title: "Visual Branding & Carousel Design", desc: "Premium aesthetic grid designs, multi-slide educational carousels, and infographics that establish industry leadership." },
      { title: "Targeted Paid Social Advertising", desc: "Hyper-targeted ad setup across Meta and LinkedIn to convert high-intent prospects into paying clients." },
      { title: "Community & Reputation Management", desc: "Active direct message response strategy, comment moderation, and active community engagement to foster customer loyalty." },
      { title: "Influencer & Creator Outreach", desc: "End-to-end strategic collaborations with micro and macro niche influencers to multiply organic brand reach." },
      { title: "Executive Thought Leadership", desc: "Ghostwriting and personal brand positioning on LinkedIn for founders, CEOs, and executive leaders." }
    ],
    process: [
      { step: "01", title: "Audit & Brand Strategy", desc: "In-depth research into your target demographic, brand identity tone, competitor tactics, and benchmark metrics." },
      { step: "02", title: "Content Creation & Studio", desc: "Designing eye-catching visuals, writing compelling ad copy, and editing short-form video reels 30 days in advance." },
      { step: "03", title: "Scheduling & Paid Campaigns", desc: "Multi-platform scheduling at peak audience activity hours paired with targeted paid campaign execution." },
      { step: "04", title: "Optimization & Scaling", desc: "Monthly performance reviews, double-down on top-performing content pillars, and audience scale growth." }
    ],
    highlights: [
      { label: "Average Growth", value: "3.5x Engagement" },
      { label: "Content Reach", value: "+250k Monthly Impressions" },
      { label: "Targeting Precision", value: "98% Demographic Match" }
    ]
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "Growth & Marketing",
    icon: Target,
    tagline: "Data-driven paid ads optimized for maximum ROAS and lead generation.",
    description: "High-ROI PPC, Meta ads, Google ads, and retargeting funnels engineered for scale.",
    fullDescription: "Accelerate revenue growth with high-yield performance marketing. We build, test, and scale paid advertising campaigns on Meta, Google, and LinkedIn that convert clicks into qualified leads and measurable revenue.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&fit=crop",
    benefits: ["Immediate Leads", "Measurable ROAS", "Hyper-Targeted Ads", "Scalable Funnels"],
    techStack: ["Google Ads Manager", "Meta Ads Manager", "LinkedIn Campaign Manager", "Hotjar", "Zapier"],
    deliverables: ["Ad Funnel Strategy", "Custom Ad Creatives & Copy", "Pixel & Conversion Setup", "Weekly Performance Dashboards"],
    faqs: [
      { q: "What minimum ad spend budget do you recommend?", a: "We recommend starting with a monthly ad budget of $1,000 – $3,000 to allow sufficient testing volume for algorithm machine learning and rapid scaling." },
      { q: "How quickly can we expect leads from paid advertising?", a: "Unlike organic SEO, paid campaigns begin generating traffic and leads within 24 to 48 hours of campaign launch." },
      { q: "How do you optimize ad performance over time?", a: "We continuously run A/B split tests on ad copy, visual assets, headlines, and landing page conversion paths to lower Cost-Per-Lead (CPL)." },
      { q: "Which ad platforms provide the best ROI?", a: "Google Ads excel for high-intent search queries, Meta (Instagram/Facebook) is ideal for visual product discovery & lead gen, and LinkedIn dominates for high-ticket B2B." }
    ],
    features: [
      { title: "Google Search & Shopping Ads", desc: "Capturing active buyer intent with targeted keyword bidding, responsive search ads, and shopping catalog feeds." },
      { title: "Meta Hyper-Targeted Ad Funnels", desc: "Multi-stage ad funnels on Instagram and Facebook leveraging custom lookalike audiences and retargeting." },
      { title: "LinkedIn B2B Lead Generation", desc: "Direct outreach campaigns reaching decision-makers, CEOs, and corporate procurement heads." },
      { title: "Dynamic Retargeting Campaigns", desc: "Re-engaging warm website visitors across channels to convert lost traffic into closed deals." },
      { title: "Landing Page CRO Optimization", desc: "Custom high-conversion landing page design engineered specifically to maximize ad click-to-lead ratios." },
      { title: "Server-Side Conversion API Setup", desc: "Accurate tracking with Meta CAPI and GA4 Server-Side tracking to bypass iOS privacy restrictions." }
    ],
    process: [
      { step: "01", title: "Funnel & Pixel Audit", desc: "Reviewing account history, configuring conversion tracking pixels, and identifying highest-converting audience segments." },
      { step: "02", title: "Creative & Copy Lab", desc: "Drafting high-converting ad copy variations, graphic creatives, and video hooks for A/B testing." },
      { step: "03", title: "Campaign Launch & Bidding", desc: "Launching structured ad campaigns with automated bid strategies, negative keywords, and fraud filters." },
      { step: "04", title: "Scale & ROAS Maximization", desc: "Reallocating budget to top-performing ad sets, launching retargeting funnels, and scaling weekly ad spend." }
    ],
    highlights: [
      { label: "Average ROAS", value: "4.2x Return on Ad Spend" },
      { label: "Conversion Lift", value: "+140% Lead Volume" },
      { label: "Cost Reduction", value: "-35% Cost per Acquisition" }
    ]
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    category: "Growth & Marketing",
    icon: Search,
    tagline: "Data-driven SEO strategies to increase visibility and growth.",
    description: "Data-driven SEO strategies to increase visibility and organic traffic.",
    fullDescription: "We help you dominate search engines by optimizing your content, structure, and authority. Our SEO services are designed for long-term growth.",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&q=80&fit=crop",
    benefits: ["Higher Traffic", "Brand Authority", "Lead Gen", "ROI Focused"],
    techStack: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog"],
    deliverables: ["SEO Audit", "Keyword Strategy", "Content Plan"],
    faqs: commonFaqs.seo,
    features: [
      { title: "On-Page SEO", desc: "Optimizing your website's content and structure for Google." },
      { title: "Backlink Strategy", desc: "Building authority through high-quality external links." },
      { title: "Technical SEO Fixes", desc: "Resolving crawl errors, schema markup, and canonical issues." },
      { title: "Content Strategy", desc: "Keyword research and blog content tailored to high-value intent." }
    ],
    process: [
      { step: "01", title: "SEO Site Audit", desc: "Comprehensive technical, content, and backlink profile analysis." },
      { step: "02", title: "Keyword & Strategy Blueprint", desc: "Mapping buyer intent keywords with low difficulty and high search volume." },
      { step: "03", title: "On-Page & Technical Execution", desc: "Optimizing site speed, meta tags, schema data, and mobile usability." },
      { step: "04", title: "Link Building & Scale", desc: "High-DA backlink outreach and monthly ranking reports." }
    ]
  },
  {
    slug: "google-ranking",
    title: "Google Ranking",
    category: "Growth & Marketing",
    icon: TrendingUp,
    tagline: "Get your business to the top of search results.",
    description: "Expert ranking strategies to get your business to the top of search results.",
    fullDescription: "Ranking on the first page of Google is no longer optional. We use advanced techniques to ensure your business is the first thing customers see.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    benefits: ["Page 1 Results", "Trust Building", "Increased Clicks", "Growth"],
    techStack: ["Google My Business", "Local SEO", "Technical SEO"],
    deliverables: ["Ranking Report", "Competitive Analysis", "Action Plan"],
    faqs: commonFaqs.seo,
    features: [
      { title: "Local SEO", desc: "Dominate search results in your specific geographic area." },
      { title: "Speed Optimization", desc: "Fast sites rank higher. We make your site blazingly fast." }
    ]
  },
  {
    slug: "cloud-infra",
    title: "Custom IT Solutions",
    category: "Support & Solutions",
    icon: Cpu,
    tagline: "Integrated IT strategies that solve complex challenges.",
    description: "Integrated IT strategies that solve complex technical challenges.",
    fullDescription: "From cloud infrastructure to complex system integrations, we provide the technical muscle your business needs to operate efficiently.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&fit=crop",
    benefits: ["Cost Efficient", "Scalable", "High Uptime", "Managed"],
    techStack: ["AWS", "Azure", "Terraform", "Kubernetes"],
    deliverables: ["Cloud Config", "Infrastructure Maps", "Security Docs"],
    faqs: commonFaqs.web,
    features: [
      { title: "Cloud Management", desc: "Managing your servers so you don't have to." },
      { title: "Disaster Recovery", desc: "Ensuring your data is safe and your business is resilient." }
    ]
  },
  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    category: "Support & Solutions",
    icon: Layers,
    tagline: "Robust online stores built to maximize sales.",
    description: "Robust online stores built to maximize sales and provide a smooth checkout.",
    fullDescription: "We build e-commerce platforms that convert. From Shopify to custom headless solutions, we ensure your store is ready for high volume.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&fit=crop",
    benefits: ["Conversion Ready", "Secure Payments", "Inventory Sync", "Fast Checkout"],
    techStack: ["Shopify", "React", "Stripe", "Next.js"],
    deliverables: ["Online Store", "CMS Access", "Payment Setup"],
    faqs: commonFaqs.web,
    features: [
      { title: "Headless E-commerce", desc: "Maximum flexibility and speed for your online storefront." },
      { title: "Abandoned Cart Recovery", desc: "Advanced tools to win back lost customers." }
    ]
  },
  {
    slug: "it-consulting",
    title: "Maintenance Support",
    category: "Support & Solutions",
    icon: Settings,
    tagline: "Reliable 24/7 technical support for your digital products.",
    description: "Reliable 24/7 technical support and maintenance for your digital products.",
    fullDescription: "Software needs care. We provide ongoing support to ensure your platforms stay secure, updated, and fast, long after launch.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fit=crop",
    benefits: ["24/7 Monitoring", "Security Patches", "Bug Fixes", "Priority Support"],
    techStack: ["Sentry", "New Relic", "GitHub", "Notion"],
    deliverables: ["Monthly Report", "Uptime Guarantee", "Support Portal"],
    faqs: commonFaqs.web,
    features: [
      { title: "Proactive Monitoring", desc: "We find and fix issues before they affect your users." },
      { title: "Security Audits", desc: "Regular checks to keep your data safe from threats." }
    ]
  }
];

