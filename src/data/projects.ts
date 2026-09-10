import projectRomang from "@/assets/romang-patel.png";
import projectOmax from "@/assets/omax-industries.png";
import projectRestoplus from "@/assets/restoplus.png";
import projectJaiswal from "@/assets/jaiswal-app.png";
import projectJaag from "@/assets/jaag-alumni.png";
import projectMvFluid from "@/assets/mv-fluid.png";
import projectInvoxa from "@/assets/invoxa-erp.png";
import projectAwmStore from "@/assets/awm-store.png";
import projectSavioErp from "@/assets/savio-erp.png";
import projectChemx from "@/assets/chemx-pumps.png";
import projectSchoolErp from "@/assets/school-erp.png";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  excerpt: string;
  description: string;
  services: string[];
  results: { label: string; value: string }[];
  challenge: string;
  solution: string;
  testimonial?: { quote: string; name: string; role: string };
  searchKeywords?: string[];
  altNames?: string[];
}

export const projects: Project[] = [
  {
    slug: "scholargrid-school-management-erp",
    title: "ScholarGrid ERP - Next-Gen School Management & Educational Ecosystem",
    client: "In-House Product",
    category: "SaaS Products",
    image: projectSchoolErp,
    excerpt: "Our proprietary enterprise educational ERP SaaS engineered to digitize K-12 and university student lifecycles, automated fee billing, attendance, grading, and parent portals.",
    description: "ScholarGrid ERP is our in-house enterprise school management platform designed from the ground up to digitize and automate educational institution operations. Built to handle end-to-end K-12 and higher education administrative lifecycles, the platform unifies student admissions, automated fee collection with online payment gateways, biometric attendance tracking, examination gradebooks, timetable generation, and multi-channel parent-teacher communication into one intuitive cloud-native dashboard.",
    searchKeywords: [
      "ScholarGrid ERP",
      "School Management ERP",
      "School Management System",
      "EduPulse ERP",
      "Educational ERP SaaS",
      "School Administration Software",
      "Student Information System SIS",
      "School Fee Invoicing SaaS"
    ],
    altNames: ["ScholarGrid ERP", "EduPulse School ERP", "School Management System"],
    services: [
      "In-House Product Engineering",
      "Multi-Tenant SaaS Architecture",
      "Automated Fee Collection & Gateways",
      "Real-Time Attendance & Biometric Sync",
      "Examination & Gradebook Engine",
      "Parent-Teacher Mobile Communication Portal"
    ],
    results: [
      { label: "Product Type", value: "In-House SaaS" },
      { label: "Target Sector", value: "K-12 & Higher Ed" },
      { label: "Core Modules", value: "15+ Academic" },
      { label: "Status", value: "Production Ready" },
    ],
    challenge: "Educational institutions frequently face severe operational bottlenecks due to fragmented software tools for fee collection, attendance tracking, grading, and parent communication, resulting in high administrative costs and delayed reporting.",
    solution: "We engineered ScholarGrid ERP as a unified, cloud-native SaaS ecosystem. It integrates student lifecycle management, automated online fee payment with instant digital receipts, automated report card generation, and real-time SMS/WhatsApp attendance alerts. School administrators gain centralized operational control while parents and teachers benefit from dedicated mobile-responsive portals.",
    testimonial: {
      quote: "Designed and engineered by our team, ScholarGrid ERP empowers educational institutions to replace tedious paperwork with intelligent automation and seamless digital collaboration.",
      name: "DevDhara Product Team",
      role: "SaaS Product Architects",
    },
  },
  {
    slug: "romang-patel-associates",
    title: "Romang Patel And Associates - Professional Architectural Portfolio",
    client: "Romang Patel And Associates",
    category: "Fullstack Development",
    image: projectRomang,
    excerpt: "A high-performance architectural business platform featuring a dynamic project gallery and secure admin dashboard for portfolio management.",
    description: "This project is a professional business website for Romang Patel And Associates, a premier architectural and consulting firm. It is a modern, high-performance web application built to showcase their portfolio, services, and company profile. The application serves both as a public-facing brand platform and an internal management tool for the firm.",
    searchKeywords: [
      "Romang Patel",
      "Romang Patel and Associates",
      "Romang Patel Architect",
      "Romang Patel Portfolio",
      "Architectural Portfolio Ahmedabad"
    ],
    altNames: ["Romang Patel & Associates", "Romang Patel Architecture"],
    services: [
      "React 19 Development",
      "Supabase Backend",
      "Admin Dashboard",
      "Tailwind CSS v4 Styling",
      "Material UI Integration",
      "SEO Optimization"
    ],
    results: [
      { label: "Tech Stack", value: "React 19" },
      { label: "Backend", value: "Supabase" },
      { label: "Styling", value: "Tailwind v4" },
      { label: "Performance", value: "Elite" },
    ],
    challenge: "The objective was to create a dual-purpose platform: a premium public site for brand building and a secure internal tool for managing a dynamic architectural portfolio.",
    solution: "We built a full-stack solution using React 19 and Vite for speed, Tailwind CSS v4 and Material UI for a premium aesthetic, and Supabase for secure admin authentication and database management. Integrated React Slick for galleries and EmailJS/Formspree for lead generation.",
    testimonial: {
      quote: "The website perfectly represents our firm's architectural excellence. The admin panel makes managing our projects effortless.",
      name: "Romang Patel",
      role: "Principal Architect",
    },
  },
  {
    slug: "industrial-cooling-solutions-omax-industries",
    title: "Omax Industries - Advanced Industrial Cooling & Thermal Regulation",
    client: "Omax Industries",
    category: "Fullstack Development",
    image: projectOmax,
    excerpt: "A comprehensive digital platform and product catalog for a global leader in industrial cooling, featuring high-precision thermal management solutions.",
    description: "Omax Industries is a premier manufacturer and supplier of industrial cooling systems. This project involved building a robust digital platform to showcase their energy-efficient thermal management equipment. The catalog includes specialized solutions for food & beverage, pharmaceuticals, and medical research sectors, emphasizing ISO-certified engineering excellence.",
    searchKeywords: [
      "Omax Industries",
      "Omax Chillers",
      "Omax Industrial Cooling",
      "Omax Thermal Regulation",
      "Omax Cooling Solutions"
    ],
    altNames: ["Omax Industries", "Omax Thermal Systems"],
    services: [
      "Full-Stack Web Development",
      "Dynamic Product Catalog",
      "Technical SEO Optimization",
      "Global CDN Integration",
      "Lead Generation Systems",
      "Responsive UI/UX Design"
    ],
    results: [
      { label: "Energy Savings", value: "Up to 75%" },
      { label: "Reach", value: "Global" },
      { label: "Materials", value: "SS304/316" },
      { label: "Accuracy", value: "±0.1°C" },
    ],
    challenge: "The challenge was to present a complex range of high-precision industrial products—from water chillers to heat pumps—in an accessible, SEO-optimized catalog that speaks to global manufacturing and healthcare leaders.",
    solution: "We implemented a modular full-stack architecture with a focus on SEO-friendly content structures and fast-loading technical specs. The platform highlights specialized cooling solutions like CNC spindle chillers and lab chillers, using a high-performance frontend to mirror the precision of the products themselves.",
    testimonial: {
      quote: "Our new digital platform has significantly expanded our global reach. The technical clarity and SEO performance have made us a leader in the industrial cooling space online.",
      name: "Omax Sales Team",
      role: "Global Distribution",
    },
  },
  {
    slug: "restoplus-smart-ordering-saas",
    title: "RestoPlus - Our Proprietary Smart Restaurant Ecosystem",
    client: "In-House Product",
    category: "SaaS Products",
    image: projectRestoplus,
    excerpt: "Our flagship 'Smart Ordering' SaaS product, built from the ground up to modernize dining experiences and streamline restaurant operations globally.",
    description: "RestoPlus is our proprietary professional SaaS platform designed to revolutionize the hospitality industry. Built entirely by our team, it is an open ecosystem available to all restaurants seeking digital transformation. The platform combines contactless QR-based ordering with real-time analytics and WebSocket synchronization to create a seamless bridge between customers and kitchen staff.",
    searchKeywords: [
      "RestoPlus",
      "Resto Plus",
      "RestoPlus Smart Ordering",
      "RestoPlus SaaS",
      "Restaurant Smart Ordering System"
    ],
    altNames: ["RestoPlus", "Resto Plus SaaS"],
    services: [
      "In-House Product Engineering",
      "SaaS Architecture Design",
      "Real-Time WebSocket Sync",
      "Business Intelligence (BI) Analytics",
      "Mobile-First Experience",
      "Global Scalability"
    ],
    results: [
      { label: "Availability", value: "Public SaaS" },
      { label: "Target Market", value: "Global" },
      { label: "Tech Core", value: "Real-time" },
      { label: "Status", value: "Live" },
    ],
    challenge: "We identified a major gap in the market for a truly 'live' ordering system that requires zero refreshes and offers deep analytics for small to large scale restaurants.",
    solution: "We developed RestoPlus as a scalable B2B SaaS product. Using a modern stack featuring WebSocket technology, we created an ecosystem that is now open to all restaurants. It offers a premium mobile-first menu for diners and a comprehensive command center for managers, setting a new standard in hospitality tech.",
    testimonial: {
      quote: "Built with passion by our engineering team, RestoPlus is now helping restaurants worldwide eliminate manual errors and embrace the digital future.",
      name: "DevDhara Team",
      role: "Product Architects",
    },
  },
  {
    slug: "jaiswal-bandhu-shakti-sangathan-app",
    title: "Jaiswal Bandhu Shakti Sangathan - Community Networking App",
    client: "Jaiswal Samaj (Naroda)",
    category: "Mobile Development",
    image: projectJaiswal,
    excerpt: "A comprehensive cross-platform Flutter application designed to digitally unite and empower the Jaiswal community through social and professional networking.",
    description: "Developed under GrowthAxis Software Solutions, this comprehensive community-centric platform serves as a social network, professional directory, and support ecosystem. The app facilitates information sharing, introduces community-owned businesses to one another, and fosters development through features like a digital directory, matrimonial hub, and job portal. It represents a shift from physical registers to a modern, mobile-first community management approach.",
    searchKeywords: [
      "Jaiswal Bandhu Shakti Sangathan",
      "Jaiswal Samaj App",
      "Jaiswal App",
      "Jaiswal Samaj Naroda",
      "Jaiswal Community Network"
    ],
    altNames: ["Jaiswal Samaj App", "Jaiswal Sangathan App"],
    services: [
      "Flutter Cross-Platform Development",
      "iOS & Android Deployment",
      "Matrimonial Hub Integration",
      "Digital Directory System",
      "Social News Feed Engine",
      "Secure Admin Dashboard"
    ],
    results: [
      { label: "Platform", value: "Flutter" },
      { label: "Community", value: "Jaiswal" },
      { label: "Support", value: "iOS/Android" },
      { label: "Impact", value: "Digital Union" },
    ],
    challenge: "The objective was to modernize traditional community record-keeping and networking, moving from physical registers to a secure, interactive digital environment that connects members across different locations.",
    solution: "We engineered a robust Flutter application that provides a unified hub for the Jaiswal community. Key features include a family tree mapping system, a secure matrimonial service, business and job portals, and a real-time help desk for social support—all managed via a sophisticated central admin dashboard.",
    testimonial: {
      quote: "This platform has revolutionized how our community connects. We've moved from dusty registers to a vibrant, interactive digital home that truly empowers every member.",
      name: "Community Leader",
      role: "Jaiswal Sangathan",
    },
  },
  {
    slug: "jaag-jnv-alumni-network",
    title: "JAAG - JNV Association of Alumni Gandhinagar Digital Hub",
    client: "JNV Alumni Association",
    category: "Web Development",
    image: projectJaag,
    excerpt: "A sophisticated professional and social networking ecosystem designed to bridge the gap between different generations of JNV Gandhinagar alumni and students.",
    description: "JAAG is more than just a directory; it's a comprehensive platform for the Navodayan community. It features a searchable alumni database with house-based color coding, professional profile management, an opportunity board for jobs and mentorship, and a modern social feed with stories and trending discussions. The platform prioritizes privacy with a secure passcode system and customizable visibility settings.",
    searchKeywords: [
      "JAAG Alumni",
      "JAAG JNV",
      "JNV Association of Alumni Gandhinagar",
      "JAAG Gandhinagar",
      "Navodayan Alumni Network"
    ],
    altNames: ["JAAG JNV Alumni", "JAAG Gandhinagar"],
    services: [
      "Custom Web Development",
      "Dynamic Networking Engine",
      "Professional Profile CMS",
      "Social Feed & Stories Integration",
      "Opportunity Board Architecture",
      "House-Based UI Theming"
    ],
    results: [
      { label: "Community", value: "Navodayan" },
      { label: "Identity", value: "House-Based" },
      { label: "Growth", value: "Multi-Gen" },
      { label: "Security", value: "Passcode" },
    ],
    challenge: "The association needed a way to unify decades of alumni across diverse professions and locations, while maintaining the unique JNV school culture and ensuring data privacy for thousands of members.",
    solution: "We built a multi-functional web ecosystem that leverages school-house identities (Aravali, Nilgiri, Shivalik, Udaygiri) for intuitive branding. We integrated professional networking tools with modern social features like Instagram-style stories, creating a space that is both professionally useful and socially engaging for all generations.",
    testimonial: {
      quote: "JAAG has transformed how we Navodayans connect. The house-based theming brings back school pride, and the opportunity board is helping our younger alumni find their path.",
      name: "Association President",
      role: "JNV Alumni Association",
    },
  },
  {
    slug: "mv-fluid-industrial-digital-authority",
    title: "MV Fluid - Precision Hydraulic Engineering & Digital Transformation",
    client: "MV Fluid",
    category: "Fullstack Development",
    image: projectMvFluid,
    excerpt: "A high-impact 'Dark Industrial' digital platform for an Ahmedabad leader in hydraulic solutions, optimized for instant lead generation and local SEO mastery.",
    description: "MV Fluid is a premium digital platform designed for a leading industrial manufacturing firm. It serves as a modern bridge between traditional heavy engineering and the digital-first business world. The platform features a high-impact visual catalog for specialized hydraulic cylinders and power packs, integrated with a direct-to-WhatsApp inquiry system to accelerate the B2B sales cycle. Optimized for the Ahmedabad industrial sector (Kathwada GIDC), it establishes digital authority through performance-first architecture and precision design.",
    searchKeywords: [
      "MV Fluid",
      "MV Fluids",
      "MV Fluid Hydraulic Engineering",
      "MV Fluid Kathwada",
      "Hydraulic Cylinder Manufacturer Ahmedabad"
    ],
    altNames: ["MV Fluid", "MV Fluids Hydraulic"],
    services: [
      "Fullstack Industrial Web App",
      "Local SEO Strategy (GIDC)",
      "WhatsApp Lead Integration",
      "Dark Industrial UI Design",
      "Framer Motion Animations",
      "Performance Optimization"
    ],
    results: [
      { label: "Lead Speed", value: "Instant" },
      { label: "Local SEO", value: "#1 Rank" },
      { label: "Design", value: "Dark" },
      { label: "Load Time", value: "<1s" },
    ],
    challenge: "The industrial sector often relies on traditional, friction-heavy sales cycles. MV Fluid needed a platform that could transform their manufacturing excellence into a global-standard brand while ensuring procurement officers could find them easily in local searches.",
    solution: "We built a 'Dark Industrial' themed platform using Vite and React for ultra-fast performance. We replaced slow email forms with a direct WhatsApp integration and implemented a deep local SEO strategy targeting Kathwada GIDC. The result is a future-proof foundation that positions MV Fluid as a top-tier engineering partner.",
    testimonial: {
      quote: "Our digital authority has soared since the launch. The WhatsApp integration has turned our product catalog into a high-converting sales machine, and our local rankings have never been better.",
      name: "MV Fluid Team",
      role: "Manufacturing Directors",
    },
  },
  {
    slug: "invoxaerp-saas-platform",
    title: "InvoxaERP - Comprehensive Business & Invoicing SaaS",
    client: "In-House Product",
    category: "SaaS Products",
    image: projectInvoxa,
    excerpt: "A powerful Enterprise Resource Planning (ERP) platform designed to streamline CRM, financial tracking, invoicing, and business analytics in one centralized SaaS ecosystem.",
    description: "InvoxaERP is our proprietary SaaS solution tailored for modern businesses to manage their end-to-end operations. From maintaining a detailed client CRM to generating professional PDF quotes and invoices, the platform acts as the financial backbone of an organization. It features a robust product catalog, real-time expense tracking, customizable tax management, and secure administrative controls, all wrapped in a clean, intuitive dashboard.",
    searchKeywords: [
      "InvoxaERP",
      "Invoxa ERP",
      "Invoxa SaaS",
      "Invoxa Invoicing",
      "Business Billing ERP SaaS"
    ],
    altNames: ["InvoxaERP", "Invoxa ERP SaaS"],
    services: [
      "SaaS Architecture & Development",
      "Financial Tracking & Tax Engine",
      "Dynamic PDF Generation",
      "Client Management (CRM)",
      "Secure Authentication & RBAC",
      "Analytics Dashboard UI"
    ],
    results: [
      { label: "Core Focus", value: "ERP/Billing" },
      { label: "Target Market", value: "B2B SaaS" },
      { label: "Availability", value: "Live Platform" },
      { label: "Architecture", value: "Cloud-Native" },
    ],
    challenge: "Businesses often struggle with fragmented tools for billing, CRM, and expense tracking. We recognized the need for a unified, scalable system that could handle complex workflows—like converting quotes to invoices—without overwhelming the user with a clunky interface.",
    solution: "We engineered InvoxaERP as a cohesive, cloud-native ecosystem. We implemented a sophisticated relational database to link clients, products, quotes, and invoices seamlessly. The platform features automated PDF generation, granular expense categorization, and an interactive analytics dashboard, providing businesses with absolute financial clarity and operational control.",
    testimonial: {
      quote: "InvoxaERP represents our commitment to building business-critical software. It drastically reduces administrative overhead and brings professional financial management to any growing enterprise.",
      name: "DevDhara Team",
      role: "Product Architects",
    },
  },
  {
    slug: "awm-store-affiliate-ecommerce",
    title: "AWM Store - Modern Affiliate-Driven E-Commerce Platform",
    client: "A World Marketing",
    category: "E-Commerce Development",
    image: projectAwmStore,
    excerpt: "A high-conversion e-commerce platform that seamlessly integrates a frictionless guest checkout experience with a robust, automated affiliate marketing ecosystem.",
    description: "AWM Store (A World Marketing) is a dynamic retail platform built to scale sales organically through a motivated network of agents. The ecosystem serves three distinct user bases: retail customers enjoying a frictionless shopping experience, affiliates tracking real-time commission earnings, and administrators managing operations from a centralized command center. The platform is engineered to maximize conversion rates while fully automating referral tracking and payouts.",
    searchKeywords: [
      "AWM Store",
      "A World Marketing",
      "AWM Affiliate Store",
      "AWM E-Commerce",
      "Affiliate E-Commerce Platform"
    ],
    altNames: ["AWM Store", "A World Marketing Store"],
    services: [
      "Custom E-Commerce Engine",
      "Affiliate Tracking System",
      "Frictionless Guest Checkout",
      "Agent Performance Dashboard",
      "Centralized Admin Oversight",
      "High-Engagement UI/UX"
    ],
    results: [
      { label: "Checkout", value: "Frictionless" },
      { label: "Affiliates", value: "Automated" },
      { label: "UI Design", value: "Vibrant" },
      { label: "Management", value: "Centralized" },
    ],
    challenge: "The business needed to merge a traditional retail storefront with a complex multi-level referral network. Forcing customers to create accounts creates friction, but tracking affiliate sales requires precise data attribution. The challenge was building a system that satisfies both without compromising user experience.",
    solution: "We engineered a dual-sided platform with strict role-based access. For customers, we implemented a highly vibrant, guest-friendly checkout flow for maximum conversion. For affiliates and admins, we built a sophisticated tracking engine that logs referrals in real-time and provides transparent commission oversight, all managed through a robust centralized dashboard.",
    testimonial: {
      quote: "The platform has completely transformed how we scale. The frictionless checkout keeps our customers happy, and the automated affiliate tracking has mobilized our sales agents like never before.",
      name: "Platform Management",
      role: "A World Marketing",
    },
  },
  {
    slug: "savioerp-b2b-marketing-platform",
    title: "SavioERP - Strategic B2B Marketing & Lead Generation Engine",
    client: "SavioERP",
    category: "Fullstack Development",
    image: projectSavioErp,
    excerpt: "A sophisticated digital storefront and marketing platform that translates a massive manufacturing ERP ecosystem into digestible, high-conversion business value.",
    description: "The SavioERP Website is a professional lead generation engine designed for a comprehensive Enterprise Resource Planning (ERP) software tailored to mid-to-large manufacturers. Acting as more than an informational brochure, the platform utilizes interactive module showcases to educate decision-makers on supply chain, production, finance, and CRM integrations. It establishes deep domain authority while driving prospective clients toward demo bookings.",
    searchKeywords: [
      "SavioERP",
      "Savio ERP",
      "SavioERP Manufacturing",
      "Savio ERP B2B",
      "Manufacturing ERP Software"
    ],
    altNames: ["SavioERP", "Savio ERP Marketing Platform"],
    services: [
      "B2B Corporate Website",
      "Lead Generation Integration",
      "Interactive Module Showcase",
      "Technical SEO Optimization",
      "Talent Acquisition Portal",
      "Brand Storytelling UI"
    ],
    results: [
      { label: "Target", value: "B2B Enterprise" },
      { label: "Goal", value: "Lead Gen" },
      { label: "Expertise", value: "15+ Years" },
      { label: "SEO Focus", value: "Manufacturing" },
    ],
    challenge: "Manufacturing ERPs are inherently complex. The challenge was to prevent the website from becoming an overwhelming wall of text, and instead create an engaging user journey that clearly articulates business benefits—like cost optimization and scalable growth—to C-level executives.",
    solution: "We engineered an interactive, full-stack marketing platform that breaks down the 9 core modules of SavioERP into intuitive, bite-sized components. We integrated prominent 'Book a Demo' CTAs, showcased a 15-year heritage of trust through a dedicated clientele section, and built a custom career portal to support internal corporate growth.",
    testimonial: {
      quote: "This platform successfully bridges the gap between our complex technical software and the business-centric needs of our clients. It has become our most powerful tool for lead generation and brand authority.",
      name: "Anand Patel",
      role: "Managing Director, SavioERP",
    },
  },
  {
    slug: "chemx-pumps-equipments-industrial-solutions",
    title: "ChemX Pumps & Equipments - Chemical Process & Industrial Pump Solutions",
    client: "ChemX Pumps & Equipments",
    category: "Fullstack Development",
    image: projectChemx,
    excerpt: "A premier digital showcase and chemical process pump catalog platform engineered for high-precision industrial fluid handling and instant quote generation.",
    description: "ChemX Pumps & Equipments is a leading manufacturer and supplier of heavy-duty chemical process pumps, metering pumps, and industrial fluid equipment. DevDhara Technologies engineered a modern, high-performance web platform featuring a digital product catalog, dynamic technical specification filters, and an integrated direct WhatsApp inquiry system. Optimized for chemical manufacturing hubs, the platform empowers procurement officers and plant engineers to quickly locate and order specialized equipment.",
    searchKeywords: [
      "Chemx pumps",
      "Chem-X pumps",
      "chemx",
      "chem x pumps",
      "ChemX Pumps & Equipments",
      "chemical process pumps",
      "metering pumps ahmedabad",
      "industrial pump catalog",
      "ChemX Pumps"
    ],
    altNames: [
      "ChemX Pumps",
      "Chem-X Pumps",
      "Chemx",
      "Chem X Pumps",
      "ChemX Pumps & Equipments"
    ],
    services: [
      "Fullstack Industrial Web App",
      "Digital Product Catalog",
      "Direct WhatsApp Lead System",
      "Technical Specification Filters",
      "Local & Industrial SEO Mastery",
      "Responsive Industrial UI/UX"
    ],
    results: [
      { label: "Tech Stack", value: "React 19 & Vite" },
      { label: "Lead Speed", value: "Instant Quote" },
      { label: "Industry", value: "Chemical & Fluid" },
      { label: "SEO Rank", value: "Top Tier" },
    ],
    challenge: "ChemX Pumps & Equipments needed a modern digital transformation to showcase their complex range of chemical transfer, magnetic drive, and dosing pumps while streamlining lead generation for plant managers and industrial buyers.",
    solution: "We engineered a clean, high-impact industrial web platform featuring interactive pump spec sheets, dynamic categorization by fluid chemical compatibility, and a frictionless WhatsApp quote request engine that instantly routes customer inquiries to the sales team.",
    testimonial: {
      quote: "DevDhara Technologies transformed our digital presence completely. The custom product catalog and instant quote system have brought in quality leads from chemical plant procurement teams across India.",
      name: "Kalpesh Patel",
      role: "Owner, ChemX Pumps & Equipments",
    },
  },
];
