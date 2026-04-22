import { Globe, Smartphone, Layout, Database, Code2, Layers, Cpu, ShieldCheck, Zap, Monitor, SmartphoneNfc, Terminal } from "lucide-react";

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
    title: "Web Development",
    services: [
      { name: "Full-Stack Web Apps", slug: "full-stack-web", icon: Globe },
      { name: "React & Next.js", slug: "react-nextjs", icon: Code2 },
      { name: "E-commerce Solutions", slug: "ecommerce", icon: Layers },
      { name: "SaaS Development", slug: "saas-dev", icon: Database },
    ]
  },
  {
    title: "Mobile App Development",
    services: [
      { name: "iOS App Development", slug: "ios-dev", icon: Smartphone },
      { name: "Android App Development", slug: "android-dev", icon: SmartphoneNfc },
      { name: "Cross-Platform (Flutter)", slug: "flutter-dev", icon: Zap },
      { name: "React Native Apps", slug: "react-native", icon: Smartphone },
    ]
  },
  {
    title: "UI/UX Design",
    services: [
      { name: "Product Design", slug: "product-design", icon: Layout },
      { name: "Mobile UI Design", slug: "mobile-ui", icon: Smartphone },
      { name: "Web Interface Design", slug: "web-ui", icon: Monitor },
      { name: "Prototype Development", slug: "prototyping", icon: Layers },
    ]
  },
  {
    title: "Custom IT Solutions",
    services: [
      { name: "Enterprise Software", slug: "enterprise-software", icon: Cpu },
      { name: "Cloud Infrastructure", slug: "cloud-infra", icon: ShieldCheck },
      { name: "API & System Integration", slug: "api-integration", icon: Terminal },
      { name: "IT Consulting", slug: "it-consulting", icon: Layers },
    ]
  }
];

// Helper to avoid massive file size while providing high detail
const commonFaqs = {
  web: [
    { q: "How long does a typical web project take?", a: "Most full-stack web applications take between 6 to 12 weeks from design to deployment, depending on the complexity of features." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. I follow a mobile-first responsive design approach, ensuring your site looks and functions perfectly on all devices." },
    { q: "Do you provide hosting and maintenance?", a: "Yes, I offer cloud hosting setup and ongoing maintenance packages to ensure your application stays secure and updated." }
  ],
  mobile: [
    { q: "Can you help with App Store submissions?", a: "Yes, I handle the entire submission process for both the Apple App Store and Google Play Store, including metadata and compliance." },
    { q: "Should I build native or cross-platform?", a: "It depends on your requirements. Native is best for high-performance games or heavy hardware usage, while cross-platform is ideal for most business apps." },
    { q: "Do the apps work offline?", a: "I can implement robust offline-first capabilities using local database synchronization, ensuring a seamless experience even without internet." }
  ],
  design: [
    { q: "What design tools do you use?", a: "I primarily use Figma for collaborative design and prototyping, along with Adobe Creative Suite for advanced asset creation." },
    { q: "How many revisions are included?", a: "My process includes iterative feedback loops. I typically provide 3 major revision rounds during the high-fidelity design phase." },
    { q: "Do I get the source design files?", a: "Yes, you will receive full ownership of all Figma files, assets, and documentation once the project is finalized." }
  ],
  it: [
    { q: "How do you ensure data security?", a: "I implement industry-standard encryption (AES-256), secure VPC configurations, and regular security audits to protect your infrastructure." },
    { q: "Can you integrate with my existing CRM?", a: "Yes, I specialize in building secure API bridges between modern software and legacy enterprise systems like Salesforce or SAP." },
    { q: "What cloud providers do you support?", a: "I have extensive experience with AWS, Microsoft Azure, and Google Cloud Platform (GCP)." }
  ]
};

export const services: ServiceDetail[] = [
  {
    slug: "full-stack-web",
    title: "Full-Stack Web Development",
    category: "Web Development",
    icon: Globe,
    tagline: "End-to-end web solutions engineered for performance.",
    description: "Scalable, secure, and modern web applications built with the latest technologies.",
    fullDescription: "At DevDhara, I specialize in building robust full-stack applications that handle complex business logic and provide seamless user experiences. From database design to frontend polish, I handle every layer of the stack to ensure your product is production-ready and scalable.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
    benefits: ["Modern Tech Stack", "Scalable Architecture", "API-first Approach", "Performance Focused"],
    techStack: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB", "AWS"],
    deliverables: ["Full Source Code", "API Documentation", "Deployment Manual", "Database Schema", "UI/UX Design Files"],
    faqs: commonFaqs.web,
    features: [
      { title: "Frontend Excellence", desc: "Dynamic, responsive interfaces built with React and Tailwind CSS." },
      { title: "Backend Robustness", desc: "Secure Node.js and Python backends with high-throughput APIs." },
      { title: "Database Architecture", desc: "Optimized SQL and NoSQL schemas for data integrity and speed." }
    ]
  },
  {
    slug: "react-nextjs",
    title: "React & Next.js Development",
    category: "Web Development",
    icon: Code2,
    tagline: "Building the fastest web experiences on the planet.",
    description: "Leverage the power of React and Next.js for lightning-fast, SEO-friendly web applications.",
    fullDescription: "I build high-performance web applications using the Next.js framework, ensuring your site is not only fast but also highly visible to search engines. By utilizing server-side rendering and static site generation, I deliver experiences that feel instantaneous to the end-user.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80&fit=crop",
    benefits: ["Sub-second Loads", "Superior SEO", "Type Safety", "Edge-Ready"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
    deliverables: ["Next.js Codebase", "SEO Audit", "Performance Report", "CI/CD Setup", "Training Session"],
    faqs: commonFaqs.web,
    features: [
      { title: "Server-Side Rendering", desc: "Delivering fully rendered pages to the browser for instant visibility." },
      { title: "Static Site Generation", desc: "Pre-rendering pages at build time for extreme performance." },
      { title: "Incremental Static Regeneration", desc: "Updating static content without a full rebuild." }
    ]
  },
  {
    slug: "ios-dev",
    title: "iOS App Development",
    category: "Mobile App Development",
    icon: Smartphone,
    tagline: "Premium mobile experiences for Apple's ecosystem.",
    description: "Native and high-performance iOS applications built with Swift and cutting-edge frameworks.",
    fullDescription: "I design and develop premium iOS applications that take full advantage of Apple's hardware and software features. My focus is on creating smooth, intuitive, and high-performance apps that stand out in the App Store.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    benefits: ["Native Swift", "HID Compliance", "iCloud Integration", "Battery Optimized"],
    techStack: ["Swift", "SwiftUI", "Core Data", "Combine", "XCode", "TestFlight"],
    deliverables: ["Native Swift Code", "App Store Metadata", "User Testing Report", "API Integration Guide", "Sketch/Figma Assets"],
    faqs: commonFaqs.mobile,
    features: [
      { title: "SwiftUI Interfaces", desc: "Modern, declarative UI development for faster iteration." },
      { title: "Core Data & Sync", desc: "Offline-first capabilities with robust data persistence." },
      { title: "App Store Deployment", desc: "End-to-end handling of the submission and review process." }
    ]
  },
  {
    slug: "flutter-dev",
    title: "Cross-Platform Flutter Apps",
    category: "Mobile App Development",
    icon: Zap,
    tagline: "One codebase, unlimited reach.",
    description: "High-quality apps for both iOS and Android from a single codebase with Google's Flutter.",
    fullDescription: "I build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter. This approach significantly reduces development time and costs while maintaining a premium feel across all platforms.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&fit=crop",
    benefits: ["One Codebase", "Native Performance", "Faster Market Entry", "Beautiful UI"],
    techStack: ["Flutter", "Dart", "Firebase", "Provider/Riverpod", "SQLite", "GitHub Actions"],
    deliverables: ["Flutter Codebase", "Android & iOS Builds", "Technical Documentation", "UI Kit", "Admin Dashboard (Optional)"],
    faqs: commonFaqs.mobile,
    features: [
      { title: "Custom Widget Design", desc: "Creating unique, branded components that look great everywhere." },
      { title: "Dart Backend Integration", desc: "Leveraging the speed of Dart for complex app logic." },
      { title: "Hot Reload Efficiency", desc: "Iterating on features and fixes in real-time." }
    ]
  },
  {
    slug: "product-design",
    title: "UI/UX & Product Design",
    category: "UI/UX Design",
    icon: Layout,
    tagline: "Where aesthetic beauty meets functional perfection.",
    description: "User-centric designs that drive engagement and simplify complex user journeys.",
    fullDescription: "Design is more than just how it looks; it's how it works. I combine deep user research with creative visual design to build products that are as functional as they are beautiful. My process ensures every interaction is meaningful and every pixel has a purpose.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=800&q=80&fit=crop",
    benefits: ["User-Centered", "Rapid Prototypes", "Brand Aligned", "Accessibility"],
    techStack: ["Figma", "Adobe CC", "Framer", "Miro", "Zeplin", "Principle"],
    deliverables: ["Interactive Prototypes", "Design System", "User Persona Docs", "High-Fidelity Mockups", "Development Handoff Files"],
    faqs: commonFaqs.design,
    features: [
      { title: "Wireframing", desc: "Mapping out user journeys and information architecture." },
      { title: "Visual Design", desc: "Crafting high-fidelity mockups with premium aesthetics." },
      { title: "Interactive Prototypes", desc: "Bringing designs to life for user testing and feedback." }
    ]
  },
  {
    slug: "enterprise-software",
    title: "Enterprise IT Solutions",
    category: "Custom IT Solutions",
    icon: Cpu,
    tagline: "Custom software built for your business scale.",
    description: "Bespoke software solutions that solve complex operational challenges and automate workflows.",
    fullDescription: "Every business has unique challenges that off-the-shelf software can't solve. I build custom enterprise solutions that integrate seamlessly with your existing systems, automate repetitive tasks, and provide deep insights into your operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
    benefits: ["Process Automation", "Legacy Modernization", "Secure & Compliant", "Scalable Microservices"],
    techStack: ["Java/Spring", "Go", "Kubernetes", "PostgreSQL", "Docker", "Apache Kafka"],
    deliverables: ["Microservices Architecture", "Integration Middleware", "Security Audit Report", "User Training Manual", "Post-Launch Support Plan"],
    faqs: commonFaqs.it,
    features: [
      { title: "System Integration", desc: "Connecting disparate platforms into a unified ecosystem." },
      { title: "Cloud Migration", desc: "Moving your infrastructure to AWS, Azure, or GCP safely." },
      { title: "Internal Tools", desc: "Dashboards and platforms built for your specific team needs." }
    ]
  },
  {
    slug: "cloud-infra",
    title: "Cloud Infrastructure & DevOps",
    category: "Custom IT Solutions",
    icon: ShieldCheck,
    tagline: "Secure, scalable, and resilient cloud architecture.",
    description: "Infrastructure as code and automated deployment pipelines for modern software delivery.",
    fullDescription: "I design and manage cloud-native infrastructure that grows with your business. By implementing DevOps best practices and automated CI/CD pipelines, I ensure that your software is delivered reliably and remains highly available under any load.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&fit=crop",
    benefits: ["Auto-Scaling", "High Availability", "Cost Optimized", "Zero Downtime"],
    techStack: ["Terraform", "AWS", "Jenkins", "Ansible", "Nginx", "Prometheus"],
    deliverables: ["IaC Scripts", "Monitoring Dashboards", "Backup Strategy", "Security Policy Docs", "Deployment Pipelines"],
    faqs: commonFaqs.it,
    features: [
      { title: "Infrastructure as Code", desc: "Managing your servers and services through version-controlled code." },
      { title: "Docker & Kubernetes", desc: "Containerizing applications for consistent deployment." },
      { title: "CI/CD Pipelines", desc: "Automating the build, test, and release cycle." }
    ]
  },
  {
    slug: "ecommerce",
    title: "E-commerce Solutions",
    category: "Web Development",
    icon: Layers,
    tagline: "Selling online, redefined.",
    description: "Modern e-commerce platforms built for conversion and high-volume transactions.",
    fullDescription: "I build e-commerce solutions that go beyond just a shopping cart. My platforms are optimized for speed, SEO, and conversion, providing your customers with a frictionless buying experience while giving you the tools to manage your store with ease.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&fit=crop",
    benefits: ["Frictionless Checkout", "Inventory Automations", "Secure Payments", "Marketing Ready"],
    techStack: ["Shopify", "React", "Node.js", "Stripe", "Prismic CMS", "Redis"],
    deliverables: ["Storefront Codebase", "CMS Training", "Payment Gateway Setup", "Inventory Integration", "Conversion Audit"],
    faqs: commonFaqs.web,
    features: [
      { title: "Headless Commerce", desc: "Separating the frontend from the backend for maximum flexibility." },
      { title: "Custom Shopify Themes", desc: "Bespoke storefronts built on the world's most popular platform." },
      { title: "Analytics Integration", desc: "Deep insights into customer behavior and sales performance." }
    ]
  },
  {
    slug: "saas-dev",
    title: "SaaS Product Development",
    category: "Web Development",
    icon: Database,
    tagline: "From concept to scalable subscription product.",
    description: "Building the next generation of software-as-a-service platforms with modern tech stacks.",
    fullDescription: "I help founders and enterprises turn ideas into profitable SaaS products. From multi-tenant architecture to subscription billing and user management, I build the entire foundation needed to launch and scale a successful software business.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    benefits: ["Multi-Tenant Ready", "Billing Integrated", "Role-Based Access", "High Scale"],
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Clerk Auth", "AWS Lambda"],
    deliverables: ["Product Roadmap", "SaaS Core Platform", "Billing Workflows", "API Layer", "Admin Management Panel"],
    faqs: commonFaqs.web,
    features: [
      { title: "Onboarding Workflows", desc: "Frictionless user signup and setup experiences." },
      { title: "Usage Analytics", desc: "Tracking how users interact with your features." },
      { title: "API Marketplace", desc: "Allowing third-party integrations with your SaaS." }
    ]
  },
  {
    slug: "android-dev",
    title: "Android App Development",
    category: "Mobile App Development",
    icon: SmartphoneNfc,
    tagline: "Robust mobile solutions for the Android ecosystem.",
    description: "High-performance Android applications built with Kotlin and modern development patterns.",
    fullDescription: "I build native Android apps that provide a premium experience across the vast landscape of Android devices. Using Kotlin and the latest Jetpack libraries, I ensure your app is robust, responsive, and ready for the Google Play Store.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80&fit=crop",
    benefits: ["Kotlin Performance", "Material 3 Design", "Wide Compatibility", "Play Store Ready"],
    techStack: ["Kotlin", "Jetpack Compose", "Retrofit", "Dagger Hilt", "Room", "Firebase"],
    deliverables: ["Native Kotlin Code", "Store Assets", "Unit Test Suites", "Device Compatibility Report", "Architecture Docs"],
    faqs: commonFaqs.mobile,
    features: [
      { title: "Jetpack Compose UI", desc: "Modern, reactive UI development for Android." },
      { title: "Coroutines & Flow", desc: "Handling complex asynchronous tasks with ease." },
      { title: "Camera & Sensor APIs", desc: "Leveraging hardware features for advanced functionality." }
    ]
  },
  {
    slug: "react-native",
    title: "React Native Mobile Apps",
    category: "Mobile App Development",
    icon: Smartphone,
    tagline: "Native performance with the speed of web development.",
    description: "Building high-quality iOS and Android apps using the familiar React framework.",
    fullDescription: "I leverage React Native to build mobile applications that share the majority of their code between platforms without sacrificing the native look and feel. This allows for rapid development and consistent features across iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    benefits: ["Shared Codebase", "Native Look & Feel", "Rapid Iteration", "Large Ecosystem"],
    techStack: ["React Native", "JavaScript/TS", "Redux", "Expo", "React Navigation", "App Center"],
    deliverables: ["Cross-Platform Code", "iOS & Android Builds", "Documentation", "UI Components", "Bridge Configuration"],
    faqs: commonFaqs.mobile,
    features: [
      { title: "Bridge Optimization", desc: "Ensuring smooth communication between JS and Native code." },
      { title: "Over-the-Air Updates", desc: "Pushing fixes and features directly to users." },
      { title: "Native Module Integration", desc: "Accessing platform-specific features when needed." }
    ]
  },
  {
    slug: "mobile-ui",
    title: "Mobile Interface Design",
    category: "UI/UX Design",
    icon: Smartphone,
    tagline: "Interfaces designed for the palm of your hand.",
    description: "Ergonomic and visually stunning designs optimized for mobile interaction patterns.",
    fullDescription: "Mobile design requires a unique focus on ergonomics, speed, and limited screen real estate. I create mobile-first interfaces that feel natural to use, prioritizing common thumb zones and minimizing cognitive load through clear visual hierarchy.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&fit=crop",
    benefits: ["Thumb-Friendly", "Optimized Targets", "Adaptive Themes", "Micro-Interactions"],
    techStack: ["Figma", "Sketch", "Protopie", "Lottie", "After Effects", "InVision"],
    deliverables: ["Mobile UI Kit", "Interactive Prototype", "Icon Sets", "Motion Spec", "Accessibility Audit"],
    faqs: commonFaqs.design,
    features: [
      { title: "Mobile Style Guides", desc: "Defining typography and spacing for small screens." },
      { title: "Gesture Design", desc: "Implementing intuitive swiping and pinching actions." },
      { title: "Loading State Polish", desc: "Ensuring the app feels fast even on slow networks." }
    ]
  },
  {
    slug: "web-ui",
    title: "Web Interface Design",
    category: "UI/UX Design",
    icon: Monitor,
    tagline: "Responsive design for the modern web.",
    description: "Stunning web interfaces that adapt perfectly to any screen size, from desktop to mobile.",
    fullDescription: "The modern web is accessed from an endless variety of screens. I design web interfaces that are truly responsive, ensuring your brand looks premium whether it's viewed on a 27-inch monitor or a 5-inch smartphone.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80&fit=crop",
    benefits: ["Fluid Layouts", "Visual Hierarchy", "Design Systems", "Web Optimized"],
    techStack: ["Figma", "Webflow", "Spline (3D)", "Framer", "Adobe XD", "Miro"],
    deliverables: ["Responsive Mockups", "Web Style Guide", "Component Library", "Grid Specs", "Brand Assets"],
    faqs: commonFaqs.design,
    features: [
      { title: "Design Systems", desc: "Building a library of reusable UI components." },
      { title: "Information Architecture", desc: "Organizing content for maximum discoverability." },
      { title: "SVG & Vector Graphics", desc: "Resolution-independent visuals for crisp display." }
    ]
  },
  {
    slug: "prototyping",
    title: "Rapid Prototype Development",
    category: "UI/UX Design",
    icon: Layers,
    tagline: "Fail fast, learn faster, ship better.",
    description: "Interactive prototypes that allow you to validate your ideas before writing a single line of production code.",
    fullDescription: "I build interactive prototypes that mimic the final product's behavior, allowing you to test assumptions, gather user feedback, and refine your concept before committing to full-scale development. This significantly reduces project risk and ensures a better final product.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&fit=crop",
    benefits: ["Risk Reduction", "Stakeholder Alignment", "Early Feedback", "Clear Handoff"],
    techStack: ["Figma", "Protopie", "Origami", "Rive", "Spline", "UserTesting.com"],
    deliverables: ["High-Fi Prototype", "User Test Results", "MVP Scope Document", "Interaction Map", "Animation Assets"],
    faqs: commonFaqs.design,
    features: [
      { title: "Figma Prototypes", desc: "High-fidelity interactive designs for testing." },
      { title: "User Testing Scripts", desc: "Guiding users through the prototype to find pain points." },
      { title: "MVP Definition", desc: "Helping you identify the core features for launch." }
    ]
  },
  {
    slug: "api-integration",
    title: "API & System Integration",
    category: "Custom IT Solutions",
    icon: Terminal,
    tagline: "Connecting your digital ecosystem.",
    description: "Seamlessly connecting your software to third-party services and legacy systems.",
    fullDescription: "Modern software doesn't exist in a vacuum. I build robust API integrations that connect your application to payment processors, CRMs, social networks, and legacy internal systems, creating a unified and automated digital ecosystem.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80&fit=crop",
    benefits: ["Auto Workflows", "No Manual Data", "Unified Reporting", "Extended Power"],
    techStack: ["Node.js", "Python", "GraphQL", "Zapier/Make", "Postman", "Swagger"],
    deliverables: ["Integration Layer", "API Connector Code", "Error Logging System", "Data Mapping Docs", "Security Key Management"],
    faqs: commonFaqs.it,
    features: [
      { title: "REST & GraphQL APIs", desc: "Building and consuming modern web services." },
      { title: "Webhook Implementation", desc: "Real-time data synchronization across platforms." },
      { title: "Legacy Bridges", desc: "Connecting modern apps to older enterprise systems." }
    ]
  },
  {
    slug: "it-consulting",
    title: "IT Strategy & Consulting",
    category: "Custom IT Solutions",
    icon: Layers,
    tagline: "Expert guidance for your technical roadmap.",
    description: "Strategic advice on technology stacks, architecture, and digital transformation.",
    fullDescription: "Choosing the right technology can make or break a business. I provide expert consulting to help you make informed decisions about your technical roadmap, from selecting a tech stack to auditing your current systems for security and performance.",
    image: "https://images.unsplash.com/photo-1454165833762-b201c0009f80?w=800&q=80&fit=crop",
    benefits: ["Expert Selection", "Security Audits", "Scalability Planning", "Debt Management"],
    techStack: ["LucidChart", "Confluence", "Jira", "GitHub", "SonarQube", "Notion"],
    deliverables: ["Tech Roadmap", "Architecture Diagram", "Security Audit", "Vendor Selection List", "Performance Report"],
    faqs: commonFaqs.it,
    features: [
      { title: "Tech Stack Audits", desc: "Reviewing your current code and infrastructure." },
      { title: "Architecture Design", desc: "Mapping out the foundation for new products." },
      { title: "Scaling Strategy", desc: "Planning for growth before it happens." }
    ]
  }
];
