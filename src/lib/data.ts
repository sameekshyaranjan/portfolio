export const personal = {
  name: "Sameekshya Ranjan Sahu",
  firstName: "Sameekshya",
  role: "Full stack developer",
  location: "Bengaluru, India",
  email: "sameekshyaranjan.official@gmail.com",
  github: "https://github.com/sameekshyaranjan",
  linkedin: "https://linkedin.com/in/sameekshyaranjan",
  resume: "https://drive.google.com/file/d/1lYxfwMEFE-Ins1llDyHxoG7DSyQE_zp8/view?usp=drive_link",
  status: "Available for internships — Summer / Fall 2026",
};

export type Project = {
  id: string;
  name: string;
  status: "live" | "ongoing";
  tagline: string;
  description: string[];
  tech: string[];
  github: string;
  live: string | null;
  domain: string;
  visual: "map" | "marketplace" | "terminal";
};

export const projects: Project[] = [
  {
    id: "01",
    name: "UrbanPulse",
    status: "live",
    tagline: "Making cities safer through civic technology.",
    description: [
      "Built a full-stack civic platform for Pondicherry — citizens report hazards, tourists browse live nearby risks, volunteers resolve issues transparently.",
      "Engineered JWT auth with role-based access (Citizen / Volunteer / Admin) and MongoDB geospatial indexing to surface issues within a 10km radius.",
      "Designed a responsive dark UI with Tourist Mode, real-time filtering, grid/list toggle, and ImageKit-powered image uploads.",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "JWT", "ImageKit", "Tailwind CSS"],
    github: "https://github.com/sameekshyaranjan/urbanpulse",
    live: null,
    domain: "urbanpulse.vercel.app",
    visual: "map",
  },
  {
    id: "02",
    name: "KrishiSetu",
    status: "live",
    tagline: "Connecting farmers and traders through technology.",
    description: [
      "Built a full-stack agricultural marketplace with passwordless OTP login, JWT tokens, and role-based access for Farmers, Traders, and Admins.",
      "Developed RESTful APIs for crop listings, real-time bidding, geospatial queries, and in-app messaging with MongoDB TTL indexes.",
      "Integrated live Mandi price data via Agmarknet API, Redis caching, CRON-based price refresh, and multi-language SMS via Twilio.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Redis", "Twilio", "Leaflet.js"],
    github: "https://github.com/sameekshyaranjan/KrishiSetu",
    live: null,
    domain: "krishisetu.vercel.app",
    visual: "marketplace",
  },
  {
    id: "03",
    name: "ReCircuit AI",
    status: "ongoing",
    tagline: "Using AI to reduce electronic waste.",
    description: [
      "Building a GenAI platform that analyzes images of discarded electronics to determine reusability, repairability, and safe recycling protocols using Gemini Vision AI.",
      "Engineered parallel processing — cloud CDN upload and Gemini AI analysis run simultaneously, cutting API latency by ~50%.",
      "Secure backend with JWT auth, centralized error handling, and MongoDB schemas for persisting AI scan histories.",
    ],
    tech: ["Node.js", "Gemini Vision AI", "MongoDB", "REST APIs"],
    github: "https://github.com/sameekshyaranjan/recircuitai",
    live: null,
    domain: "recircuit.ai",
    visual: "terminal",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "Mongoose", "Redis"],
  "AI & Cloud": ["Gemini Vision AI", "ImageKit CDN", "Twilio"],
  Languages: ["JavaScript", "C++"],
  Tools: ["Git / GitHub", "Postman", "VS Code"],
};

export const community = [
  {
    role: "Core Team Member",
    org: "OS CODE Community",
    desc: "Open source community. Contributing to technical events, community initiatives, and peer learning.",
  },
  {
    role: "Member",
    org: "GDSC BIT Bangalore",
    desc: "Google Developer Student Clubs. Workshops, study jams, and developer community events.",
  },
  {
    role: "Hackathon Participant",
    org: "Multiple Hackathons",
    desc: "Building under pressure, shipping fast, learning faster.",
  },
];
