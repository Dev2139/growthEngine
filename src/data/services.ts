import { Globe, Smartphone, Layout, Database, Code2, Layers, Cpu, ShieldCheck, Zap, Monitor, SmartphoneNfc, Terminal, Search, TrendingUp, Settings } from "lucide-react";

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
    title: "Growth & SEO",
    services: [
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
      { title: "Interactive UI", desc: "Engaging interfaces that keep users on your site." }
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
      { title: "Data Security", desc: "Built with industry-standard encryption and security protocols." }
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
      { title: "Offline Sync", desc: "Allow users to work even without an internet connection." }
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
    slug: "seo-services",
    title: "SEO Services",
    category: "Growth & SEO",
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
      { title: "Backlink Strategy", desc: "Building authority through high-quality external links." }
    ]
  },
  {
    slug: "google-ranking",
    title: "Google Ranking",
    category: "Growth & SEO",
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
