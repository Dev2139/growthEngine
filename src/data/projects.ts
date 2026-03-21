import projectDental from "@/assets/project-dental.jpg";
import projectPlumbing from "@/assets/project-plumbing.jpg";
import projectRealty from "@/assets/project-realty.jpg";
import projectFitness from "@/assets/project-fitness.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectAuto from "@/assets/project-auto.jpg";

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
}

export const projects: Project[] = [
  {
    slug: "fintech-platform",
    title: "Building a Scalable Fintech Platform from Scratch",
    client: "PayFlow",
    category: "Full-Stack Development",
    image: projectDental,
    excerpt: "Architected and built a real-time payment processing platform handling 100K+ daily transactions with 99.99% uptime.",
    description: "PayFlow needed a next-generation payment platform to compete with established players. Starting from zero, we built a production-ready system that could scale globally.",
    services: ["Backend Development", "API Design", "Cloud Infrastructure", "DevOps"],
    results: [
      { label: "Daily Transactions", value: "100K+" },
      { label: "System Uptime", value: "99.99%" },
      { label: "Response Time", value: "<100ms" },
      { label: "Time to Launch", value: "16 weeks" },
    ],
    challenge: "Build a fintech platform that handles payment processing, fraud detection, and compliance required for global operations. Requires microservices architecture, real-time data processing, and bulletproof security.",
    solution: "We architected a microservices platform using Node.js backend, PostgreSQL for transactional data, and Redis for real-time caching. Deployed on Kubernetes with auto-scaling. Implemented comprehensive testing, security audits, and monitoring with Datadog.",
    testimonial: {
      quote: "GrowthAxis delivered a platform that's not just functional, but enterprise-grade. The architecture is clean, the code is maintainable, and it scales. We couldn't have done this without them.",
      name: "David Kumar",
      role: "CEO, PayFlow",
    },
  },
  {
    slug: "ecommerce-mobile",
    title: "Cross-Platform E-Commerce App with 2M+ Users",
    client: "ShopHub",
    category: "Mobile Development",
    image: projectPlumbing,
    excerpt: "Developed a React Native e-commerce app that scaled to 2M+ users with 4.7-star ratings across iOS and Android.",
    description: "ShopHub needed a mobile-first strategy to compete with established e-commerce players. We built a cross-platform app that delivered a seamless shopping experience.",
    services: ["React Native Development", "Backend API", "Payment Integration", "Analytics"],
    results: [
      { label: "Active Users", value: "2M+" },
      { label: "App Rating", value: "4.7/5" },
      { label: "Monthly Downloads", value: "150K" },
      { label: "Cart Conversion", value: "28%" },
    ],
    challenge: "Build a high-performance mobile app that works flawlessly on both iOS and Android, handles millions of products, manages real-time inventory, and integrates payment processing.",
    solution: "Built a React Native app with offline-first architecture using SQLite for local caching. Implemented server-side pagination, image optimization, and lazy loading for performance. Integrated with Stripe for payments and Firebase for analytics and push notifications.",
    testimonial: {
      quote: "The app they built isn't just pretty—it's blazingly fast and handles our peak traffic without breaking a sweat. GrowthAxis understands mobile development.",
      name: "Priya Singh",
      role: "Product Lead, ShopHub",
    },
  },
  {
    slug: "saas-platform",
    title: "SaaS Platform for Enterprise Resource Planning",
    client: "CloudERP",
    category: "Web Development",
    image: projectRealty,
    excerpt: "Built a multi-tenant SaaS platform that helps enterprises manage operations, used by 500+ companies managing $2B in revenue.",
    description: "CloudERP needed a modern, cloud-native ERP platform to help enterprises streamline operations. We architected and built a flexible, scalable multi-tenant system.",
    services: ["Full-Stack Development", "Cloud Architecture", "Database Design", "Security"],
    results: [
      { label: "Enterprise Clients", value: "500+" },
      { label: "Revenue Managed", value: "$2B+" },
      { label: "System Availability", value: "99.95%" },
      { label: "Onboarding Time", value: "2 weeks" },
    ],
    challenge: "Build a secure, multi-tenant SaaS platform that handles complex business logic, manages sensitive financial data, scales to handle millions of transactions, and achieves SOC2 compliance.",
    solution: "Architected a React frontend with TypeScript, Node.js backend with Express, PostgreSQL for data with row-level security, and Redis for caching. Deployed on AWS with auto-scaling, implemented comprehensive logging with ELK stack, and achieved SOC2 Type II certification.",
    testimonial: {
      quote: "GrowthAxis didn't just build software—they built a platform. The architecture is so clean that our team can iterate quickly. This is what enterprise software should look like.",
      name: "Michael Green",
      role: "CTO, CloudERP",
    },
  },
  {
    slug: "real-time-collaboration",
    title: "Real-Time Collaboration Platform for Design Teams",
    client: "DesignSync",
    category: "Full-Stack Development",
    image: projectFitness,
    excerpt: "Built a real-time collaboration platform enabling 10,000+ concurrent users to design simultaneously with WebSocket-powered live sync.",
    description: "DesignSync needed a tool for distributed design teams to collaborate in real-time. We built a WebSocket-powered platform that syncs changes instantly.",
    services: ["WebSocket Development", "Real-Time Architecture", "Frontend (React)", "Backend (Node.js)"],
    results: [
      { label: "Concurrent Users", value: "10K+" },
      { label: "Sync Latency", value: "<50ms" },
      { label: "Team Collaborations", value: "50K+/month" },
      { label: "User Satisfaction", value: "95%" },
    ],
    challenge: "Build a real-time collaboration platform where multiple users can edit simultaneously, changes sync instantly, conflict resolution works seamlessly, and the platform handles peak loads.",
    solution: "Implemented WebSocket connections using Socket.io for real-time communication. Built conflict-free replicated data types (CRDT) for simultaneous editing without conflicts. Used Redis for session management and AWS for scalable infrastructure.",
    testimonial: {
      quote: "The real-time sync is magic. Our team feels like they're in the same room even when they're across continents. GrowthAxis created something special.",
      name: "Elena Costa",
      role: "Founder, DesignSync",
    },
  },
  {
    slug: "healthcare-api",
    title: "HIPAA-Compliant Healthcare API for Patient Records",
    client: "MediConnect",
    category: "API Development",
    image: projectRestaurant,
    excerpt: "Designed and built a HIPAA-compliant healthcare API managing 5M+ patient records with end-to-end encryption.",
    description: "MediConnect needed a secure backend API to manage patient health records across multiple healthcare providers. Compliance and security were paramount.",
    services: ["API Development", "Security Implementation", "Cloud Infrastructure", "Compliance"],
    results: [
      { label: "Patient Records", value: "5M+" },
      { label: "API Requests/Day", value: "50M+" },
      { label: "Data Security", value: "End-to-end AES-256" },
      { label: "HIPAA Compliance", value: "✓ Certified" },
    ],
    challenge: "Build a medical-grade API that handles sensitive patient data, meets HIPAA requirements, encrypts data in transit and at rest, scales to handle millions of requests, and maintains data integrity.",
    solution: "Built a Node.js/Express API with PostgreSQL using encrypted columns for sensitive data. Implemented comprehensive audit logging, role-based access control, and API rate limiting. Deployed on AWS with VPC isolation, used KMS for key management, and achieved HIPAA compliance.",
    testimonial: {
      quote: "We needed a team that understands healthcare regulations AND building scalable systems. GrowthAxis delivered both. Our patients' data is secure.",
      name: "Dr. Arun Patel",
      role: "CTO, MediConnect",
    },
  },
  {
    slug: "mv-fluid-online-presence",
    title: "Building Local Dominance: M V Fluid's Digital Transformation",
    client: "M V Fluid",
    category: "Digital Growth Strategy",
    image: projectAuto,
    excerpt: "Transformed M V Fluid from zero online presence to a market leader in Ahmedabad with 500+ qualified leads per month and #1 local rankings.",
    description: "M V Fluid, a leading fluid distribution company in Ahmedabad, had a strong local reputation but virtually no online presence. Competitors were capturing their market online. We built a complete digital ecosystem to dominate their local market.",
    services: ["Local SEO Strategy", "Website Development", "Lead Generation", "Content Marketing", "Google Business Optimization"],
    results: [
      { label: "Monthly Qualified Leads", value: "500+" },
      { label: "Google Local Rankings", value: "#1 - 8 Keywords" },
      { label: "Website Traffic", value: "15K+/month" },
      { label: "Lead Conversion Rate", value: "14%" },
    ],
    challenge: "Build an online presence for a traditional B2B fluid distribution business competing against established digital players in Ahmedabad. Clients were searching online but couldn't find them. They needed to capture market share in their local area through digital channels.",
    solution: "Created a high-converting website optimized for local search, implemented a comprehensive local SEO strategy targeting Ahmedabad and surrounding areas, set up Google Business Profile optimization, built content around their key services, and implemented lead capture systems. Used paid ads to accelerate initial visibility while organic rankings ramped up.",
    testimonial: {
      quote: "GrowthAxis transformed how we acquire clients. We went from chasing leads to leads chasing us. The system is automated, scalable, and it works exactly as promised. Best investment we've made.",
      name: "Jayesh Patel",
      role: "Owner, M V Fluid",
    },
  },
];

