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
    slug: "metro-dental-group",
    title: "Dominating Local Search for a Multi-Location Dental Practice",
    client: "Metro Dental Group",
    category: "GBP Optimization",
    image: projectDental,
    excerpt: "Took a 3-location dental practice from page 3 to the #1 Map Pack position, driving a 312% increase in inbound calls.",
    description: "Metro Dental Group had three locations across the metro area but virtually no Google presence. Patients were finding competitors first — despite Metro having better reviews and more experience.",
    services: ["GBP Optimization", "Local SEO", "Review Management", "Web Development"],
    results: [
      { label: "Increase in Calls", value: "312%" },
      { label: "Monthly Calls", value: "95" },
      { label: "Google Ranking", value: "#1 Map Pack" },
      { label: "New Patients/Month", value: "47" },
    ],
    challenge: "Three locations with inconsistent NAP data, zero GBP optimization, and a website that hadn't been updated in 4 years. Google couldn't determine which location served which area, diluting all three profiles.",
    solution: "We rebuilt their GBP profiles from scratch — optimized categories, attributes, photos, and posts for each location. Deployed a hyper-local content strategy targeting neighborhood-specific keywords. Built a new conversion-focused website with location-specific landing pages and integrated online booking.",
    testimonial: {
      quote: "Within 60 days, our phone was ringing off the hook. GrowthEngine didn't just optimize our profile — they built a system that prints appointments.",
      name: "Sarah Mitchell",
      role: "Owner, Metro Dental Group",
    },
  },
  {
    slug: "summit-plumbing",
    title: "Building a Lead Generation Machine for Emergency Plumbing",
    client: "Summit Plumbing Co.",
    category: "Lead Generation",
    image: projectPlumbing,
    excerpt: "Designed an automated lead system that grew call volume by 5.2X in 90 days for a local plumbing company.",
    description: "Summit Plumbing relied entirely on word-of-mouth and a single yard sign. They had no online presence, no website, and no way to capture the hundreds of local searches happening daily.",
    services: ["Lead Generation", "Local SEO", "GBP Optimization", "Web Development"],
    results: [
      { label: "Lead Growth", value: "5.2X" },
      { label: "Monthly Leads", value: "62" },
      { label: "Cost Per Lead", value: "$12" },
      { label: "Revenue Growth", value: "340%" },
    ],
    challenge: "Zero digital presence. No website, no Google Business Profile, no reviews. Competing against established companies with 10+ years of SEO history and hundreds of reviews.",
    solution: "Built a high-converting landing page optimized for emergency plumbing keywords. Created and optimized a GBP profile with service-area targeting. Deployed an automated review request system that generated 47 five-star reviews in 60 days. Set up call tracking and a CRM to capture and nurture every lead.",
    testimonial: {
      quote: "We went from invisible on Google to the #1 result in our area. The ROI has been unreal. Best investment we've made in 10 years.",
      name: "James Chen",
      role: "CEO, Summit Plumbing Co.",
    },
  },
  {
    slug: "luxe-home-realty",
    title: "Premium Web Presence for a Luxury Real Estate Brand",
    client: "Luxe Home Realty",
    category: "Web Development",
    image: projectRealty,
    excerpt: "Designed and built a premium website that increased profile views by 847% and positioned the brand as the local luxury leader.",
    description: "Luxe Home Realty had the listings and the expertise but looked like every other agent online. They needed a digital presence that matched their premium positioning.",
    services: ["Web Development", "Local SEO", "GBP Optimization", "Review Management"],
    results: [
      { label: "Profile Views", value: "847%" },
      { label: "Monthly Inquiries", value: "74" },
      { label: "Google Ranking", value: "#2 Map Pack" },
      { label: "Avg. Time on Site", value: "4:32" },
    ],
    challenge: "A generic template website that looked identical to competitors. No local SEO strategy. Google Business Profile had incorrect information and zero engagement.",
    solution: "Designed a bespoke website with immersive property showcases, neighborhood guides, and an integrated IDX feed. Rebuilt their GBP with professional photography, virtual tours, and weekly posts. Implemented a local content strategy targeting luxury real estate keywords in every target neighborhood.",
    testimonial: {
      quote: "Professional, data-driven, and relentless. They delivered exactly what they promised — more leads, better rankings, real growth.",
      name: "Maria Rodriguez",
      role: "Founder, Luxe Home Realty",
    },
  },
  {
    slug: "ironworks-fitness",
    title: "Custom App & Growth System for a Boutique Gym",
    client: "IronWorks Fitness",
    category: "App Development",
    image: projectFitness,
    excerpt: "Built a custom member app and local growth system that increased memberships by 180% in 6 months.",
    description: "IronWorks Fitness was a well-loved boutique gym but struggled to compete with big-box franchises on digital marketing. They needed technology to level the playing field.",
    services: ["App Development", "GBP Optimization", "Review Management", "Lead Generation"],
    results: [
      { label: "Membership Growth", value: "180%" },
      { label: "App Downloads", value: "1,200+" },
      { label: "Class Bookings/Week", value: "340" },
      { label: "5-Star Reviews", value: "89" },
    ],
    challenge: "Manual class scheduling via phone calls, no member app, and a GBP profile with outdated photos and no posts. Members loved the gym but had no easy way to book, track, or refer friends.",
    solution: "Built a custom mobile app with workout tracking, class scheduling, and membership management. Optimized their GBP with professional gym photography, class schedules, and weekly posts. Deployed an automated referral and review system that turned happy members into growth engines.",
  },
  {
    slug: "coastal-kitchen",
    title: "Review & Reputation Overhaul for a Restaurant Group",
    client: "Coastal Kitchen",
    category: "Review Management",
    image: projectRestaurant,
    excerpt: "Transformed a 3.2-star restaurant into a 4.8-star local favorite through systematic reputation management.",
    description: "Coastal Kitchen served incredible food but had a 3.2-star Google rating dragging them down. Negative reviews from years ago dominated their profile, scaring away potential diners.",
    services: ["Review Management", "GBP Optimization", "Local SEO", "Web Development"],
    results: [
      { label: "Google Rating", value: "3.2→4.8★" },
      { label: "Monthly Reservations", value: "420+" },
      { label: "Review Response Rate", value: "100%" },
      { label: "Revenue Increase", value: "215%" },
    ],
    challenge: "A 3.2-star Google rating with several unaddressed negative reviews. No system for requesting reviews from satisfied customers. Menu and hours were incorrect on Google.",
    solution: "Implemented an automated review request system triggered after every dining experience. Crafted professional responses to every existing review — positive and negative. Updated all GBP information, added professional food photography, and launched a weekly posting schedule featuring seasonal specials.",
  },
  {
    slug: "precision-auto",
    title: "Full Digital Transformation for an Auto Repair Shop",
    client: "Precision Auto Care",
    category: "Web Development",
    image: projectAuto,
    excerpt: "Built a complete booking system and digital presence that doubled monthly service appointments in 120 days.",
    description: "Precision Auto Care was the best-kept secret in town — literally. Despite 20 years of expert service, they had zero online presence and relied entirely on drive-by traffic.",
    services: ["Web Development", "App Development", "GBP Optimization", "Lead Generation"],
    results: [
      { label: "Service Appointments", value: "2X" },
      { label: "Online Bookings", value: "78%" },
      { label: "Google Ranking", value: "#1 Local" },
      { label: "Customer Retention", value: "94%" },
    ],
    challenge: "No website, no online booking, no Google presence. All appointments were walk-ins or phone calls. The owner was spending zero on marketing and losing customers to newer shops with better online visibility.",
    solution: "Built a full-service website with online booking, service tracking, and automated maintenance reminders. Created and optimized their GBP profile with service menus, before/after photos, and customer testimonials. Deployed an automated follow-up system that turns every service visit into a review opportunity.",
  },
  {
    slug: "mv-fluid",
    title: "Hydraulics & Machinery Excellence: Dominating Industrial Supply",
    client: "MV Fluid",
    category: "B2B Lead Generation",
    image: projectAuto,
    excerpt: "Positioned MV Fluid as the go-to hydraulics supplier in the region, generating 280+ qualified monthly leads from zero online presence.",
    description: "MV Fluid is a specialized supplier of hydraulic systems and industrial machinery. Despite 15 years of expertise and a solid client base, they had virtually no online presence and relied entirely on word-of-mouth and cold calls.",
    services: ["GBP Optimization", "Local SEO", "B2B Website Development", "Lead Generation"],
    results: [
      { label: "Monthly Qualified Leads", value: "280+" },
      { label: "Website Conversions", value: "1,850/month" },
      { label: "Google Ranking", value: "#1-3 Local" },
      { label: "Revenue Growth", value: "425%" },
    ],
    challenge: "Industrial B2B market with advanced technical requirements. Zero Google visibility despite targeting high-value industrial buyers. Competitors occupying Map Pack positions with outdated profiles. No system for capturing and nurturing technical inquiries.",
    solution: "Built a technical B2B website showcasing product specifications, case studies, and technical documentation. Created a comprehensive GBP profile with product photos, service descriptions, and detailed specs. Implemented local SEO targeting industrial district keywords and technical searches. Deployed an automated lead qualification system that pre-screens inquiries by industry and equipment type.",
    testimonial: {
      quote: "GrowthEngine transformed how we acquire clients. We went from chasing leads to leads chasing us. The system is automated, scalable, and it works exactly as promised. Best investment we've made.",
      name: "Jayesh Patel",
      role: "Owner, MV Fluid",
    },
  },
];

