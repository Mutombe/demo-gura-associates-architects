export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Gura & Associates Architects",
    legalName: "Gura & Associates Architects",
    tagline: "Architecture That Shapes the Landscape",
    description: "Gura & Associates Architects blends innovative architecture with landscape-sensitive design across Zimbabwe. We create buildings and outdoor spaces that honour their natural context.",
    phone: "+263 77 226 5543",
    phoneRaw: "+263772265543",
    whatsappNumber: "263772265543",
    email: "guraassociatesarchitects@gmail.com",
    address: "Stand 1019 Mt Pleasant-off, Nursery Rd, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 8,
    established: "2015",
    yearsExperience: "10+",
    projectsCompleted: "150+",
    employees: "12+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "gura-associates-architects-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Gura", logoLine2: "& Associates Architects" },

  hero: {
    badge: "Architecture Meets Landscape",
    titleParts: [
      { text: "WHERE DESIGN " },
      { text: "SHAPES", highlight: true },
      { text: " THE EARTH." },
    ],
    subtitle: "150+ projects completed. We create architecture and landscapes that exist in dialogue -- buildings that belong to their site and gardens that extend the built form.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Our Work",
    trustBadge: "500+ Gardens Created",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=85", alt: "Dynamic hero image showcasing the business" },
      { url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=85", alt: "Professional work environment" },
      { url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85", alt: "Quality results and satisfied clients" },
    ],
  },

  stats: [
    { number: "500+", label: "Gardens Created" },
    { number: "8+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "30+", label: "Monthly Clients" },
  ],

  servicesPreview: [
    { title: "Garden Design", desc: "Bespoke garden designs that harmonize with your property's architecture and Zimbabwe's unique climate, creating outdoor spaces of lasting beauty.", icon: "Leaf" },
    { title: "Lawn Installation", desc: "From soil preparation to instant turf, we create lush, resilient lawns that form the perfect canvas for your outdoor living space.", icon: "Star" },
    { title: "Irrigation Systems", desc: "Water-efficient irrigation solutions designed to keep your landscape thriving through Harare's dry seasons without waste.", icon: "Lightbulb" },
    { title: "Tree Services", desc: "Expert tree planting, pruning, and removal by certified arborists who understand the ecological balance of your property.", icon: "Buildings" },
    { title: "Hardscaping", desc: "Patios, pathways, retaining walls, and outdoor structures built with precision and materials that complement the natural landscape.", icon: "Briefcase" },
    { title: "Maintenance", desc: "Ongoing garden care packages that keep your landscape in peak condition throughout every season, so you never lift a finger.", icon: "Heart" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions delivered with precision and care.",
    items: [
      { title: "Garden Design", slug: "garden-design", desc: "Bespoke garden designs that harmonize with your property's architecture and Zimbabwe's unique climate, creating outdoor spaces of lasting beauty.", features: ["Site Analysis", "3D Visualization", "Plant Selection", "Soil Testing", "Drainage Planning", "Lighting Design"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80" },
      { title: "Lawn Installation", slug: "lawn-installation", desc: "From soil preparation to instant turf, we create lush, resilient lawns that form the perfect canvas for your outdoor living space.", features: ["Soil Preparation", "Instant Turf", "Grass Seeding", "Levelling", "Top Dressing", "Fertilization"], image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80" },
      { title: "Irrigation Systems", slug: "irrigation-systems", desc: "Water-efficient irrigation solutions designed to keep your landscape thriving through Harare's dry seasons without waste.", features: ["Drip Systems", "Sprinklers", "Smart Controllers", "Borehole Integration", "Maintenance", "Audits"], image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80" },
      { title: "Tree Services", slug: "tree-services", desc: "Expert tree planting, pruning, and removal by certified arborists who understand the ecological balance of your property.", features: ["Tree Planting", "Pruning", "Tree Removal", "Stump Grinding", "Canopy Management", "Health Assessment"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80" },
      { title: "Hardscaping", slug: "hardscaping", desc: "Patios, pathways, retaining walls, and outdoor structures built with precision and materials that complement the natural landscape.", features: ["Patio Design", "Pathways", "Retaining Walls", "Pergolas", "Fire Pits", "Outdoor Kitchens"], image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80" },
      { title: "Maintenance", slug: "maintenance", desc: "Ongoing garden care packages that keep your landscape in peak condition throughout every season, so you never lift a finger.", features: ["Weekly Mowing", "Hedge Trimming", "Fertilization", "Pest Control", "Seasonal Clean-up", "Mulching"], image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our finest work across Harare and beyond.",
    items: [
      { title: "The Signature Project", slug: "the-signature-project", category: "Residential", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Garden Design", "Lawn Installation"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80", images: ["https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80", "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"] },
      { title: "Heritage Collection", slug: "heritage-collection", category: "Commercial", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Garden Design", "Lawn Installation"], image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", images: ["https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"] },
      { title: "Modern Edge", slug: "modern-edge", category: "Garden", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Garden Design", "Lawn Installation"], image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"] },
      { title: "The Milestone", slug: "the-milestone", category: "Hardscape", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Garden Design", "Lawn Installation"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80", images: ["https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80", "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"] },
      { title: "Precision Series", slug: "precision-series", category: "Residential", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Garden Design", "Lawn Installation"], image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", images: ["https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"] },
      { title: "The Showcase", slug: "the-showcase", category: "Commercial", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Garden Design", "Lawn Installation"], image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "Our garden is now the most beautiful on the street. Neighbours constantly ask who did our landscaping.", name: "Margaret Chitsiga", role: "Homeowner, Greendale", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "They designed the gardens for our entire estate development. The attention to indigenous plant selection was impressive.", name: "Farai Mushonga", role: "Estate Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "The garden they created for us is not just beautiful -- it is a sanctuary. Every season brings something new to enjoy.", name: "Patience Sulpice", role: "Interior Designer", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "Professional, punctual, and creative. The hardscaping work was executed with precision and the planting is thriving.", name: "Tendai Marange", role: "Property Developer", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important projects.",
    items: [
      { text: "Our garden is now the most beautiful on the street. Neighbours constantly ask who did our landscaping.", name: "Margaret Chitsiga", role: "Homeowner, Greendale", rating: 5 },
      { text: "They designed the gardens for our entire estate development. The attention to indigenous plant selection was impressive.", name: "Farai Mushonga", role: "Estate Manager", rating: 5 },
      { text: "The garden they created for us is not just beautiful -- it is a sanctuary. Every season brings something new to enjoy.", name: "Patience Sulpice", role: "Interior Designer", rating: 5 },
      { text: "Professional, punctual, and creative. The hardscaping work was executed with precision and the planting is thriving.", name: "Tendai Marange", role: "Property Developer", rating: 5 },
      { text: "They transformed our bare plot into a lush garden paradise in just three weeks. The irrigation system works perfectly.", name: "Linda Masuku", role: "Garden Enthusiast", rating: 5 },
      { text: "The maintenance team is exceptional. Our garden has never looked better and we do not have to worry about a thing.", name: "Robert Mugwagwa", role: "Homeowner, Borrowdale", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by passion. Trusted by Harare.",
    story: [
      "Gura & Associates was founded in 2015 with a commitment to designing buildings and landscapes as integrated systems. Based in Mt Pleasant, Harare, we bring an architect's precision to every outdoor space.",
      "Our multidisciplinary team of architects and landscape designers ensures that every project -- from residential estates to commercial developments -- is designed with both aesthetic vision and environmental responsibility.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or materials." },
      { title: "Client Focused", desc: "Every decision starts with what is best for the client." },
      { title: "Professional Excellence", desc: "Our team brings expertise and dedication to every project." },
      { title: "Integrity Always", desc: "Transparent pricing, honest advice, and reliable service." },
    ],
    team: [
      { name: "The Founder", role: "Managing Director", bio: "With over a decade of industry experience, our founder built Gura & Associates Architects on a foundation of quality and trust.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
      { name: "Operations Lead", role: "Head of Operations", bio: "Ensuring every project runs smoothly from start to finish with meticulous planning and execution.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Technical Director", role: "Lead Specialist", bio: "Deep technical expertise combined with creative problem-solving drives innovation across all projects.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [
      { title: "Junior Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our growing team and develop your skills under experienced mentors." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to start? We would love to hear from you.",
    branches: [
      { name: "Harare Office", address: "Stand 1019 Mt Pleasant-off, Nursery Rd, Harare, Zimbabwe", phone: "+263 77 226 5543", email: "guraassociatesarchitects@gmail.com" },
    ],
  },

  homeCta: {
    title: "DESIGN YOUR\nVISION",
    subtitle: "Every great project begins with a conversation. Tell us what you need, and let us show you what is possible.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Gura & Associates Architects! I would like to discuss a project.",
    backgroundImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=85",
  },

  footer: {
    description: "Gura & Associates Architects blends innovative architecture with landscape-sensitive design across Zimbabwe. We create b...",
    copyright: "Gura & Associates Architects",
  },
};

export default siteData;
