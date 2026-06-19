export type Project = {
  name: string
  category: string
  accent: 'pearl' | 'gold' | 'steel' | 'slate'
  websiteUrl?: string
  image?: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
  shortDescription: string
  fullCaseStudy: string
  features: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    name: 'Kriscel Tech Agency Website',
    category: 'Agency',
    accent: 'steel',
    websiteUrl: 'https://share.google/PtBopwDAb4EUiXbJt',
    image: '/kriscel-agency-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A high-performance agency website showcasing automation, AI solutions, software development, and digital transformation.',
    fullCaseStudy:
      'This brand platform demonstrates expertise across automation, software development, AI integration, and digital marketing using advanced animations, conversion-focused layouts, and strategic hierarchy.',
    features: ['Service ecosystem presentation', 'AI & automation showcase', 'Interactive animations', 'Lead generation funnels'],
    technologies: ['React.js', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    name: 'Symo Developers',
    category: 'Real Estate',
    accent: 'steel',
    websiteUrl: 'https://symo-devlopers.vercel.app/',
    image: '/symo-developers-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A premium real estate and property development website designed to showcase residential and commercial projects through modern architecture-inspired design and conversion-focused user experiences.',
    fullCaseStudy:
      "Symo Developers was created to establish a strong digital presence for a real estate and construction brand. The site communicates trust, quality craftsmanship, and project excellence while generating qualified leads from potential buyers and investors through large visual sections, project highlights, and clear calls-to-action.",
    features: [
      'Property showcase sections',
      'Modern architectural UI',
      'Lead generation forms',
      'Trust-building company overview',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    name: 'Vidhi Satya Law Associates',
    category: 'Professional',
    accent: 'slate',
    websiteUrl: 'https://www.vidhisatya.com/',
    image: '/vidhi-satya-hero-screen.png',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A professional legal services website designed to establish authority, trust, and credibility.',
    fullCaseStudy:
      'The platform communicates legal expertise through a structured interface, intuitive navigation, and a trust-focused design system that helps clients find the right information quickly.',
    features: ['Legal service showcase', 'Attorney profiles', 'Consultation forms', 'Professional UI design'],
    technologies: ['React.js', 'Responsive Design', 'SEO Optimization', 'Form Integrations'],
  },
  {
    name: 'Indian Foods',
    category: 'Restaurant',
    accent: 'gold',
    websiteUrl: 'https://indian-foods-malvika.vercel.app/',
    image: '/indian-foods-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A vibrant restaurant website celebrating authentic Indian cuisine through engaging food presentation, modern UI design, and seamless customer interaction.',
    fullCaseStudy:
      'Indian Foods was developed to create a compelling online presence for an Indian food brand. The platform showcases traditional dishes, culturally inspired storytelling, and intuitive navigation to create a memorable experience that reflects the richness of Indian cuisine while improving customer engagement and food exploration.',
    features: [
      'Interactive menu sections',
      'Food showcase galleries',
      'Mobile-first experience',
      'Customer engagement sections',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    name: 'Restaurant Royale',
    category: 'Restaurant',
    accent: 'gold',
    websiteUrl: 'https://restaurants-mjrx.onrender.com',
    image: '/restaurant-royale-hero.png',
    imageFit: 'cover',
    imagePosition: 'center top',
    shortDescription:
      'A premium restaurant website showcasing culinary experiences through immersive food visuals and elegant layouts.',
    fullCaseStudy:
      'Restaurant Royale presents signature dishes, dining atmosphere, and menu discovery through a modern, visually rich restaurant experience.',
    features: [
      'Food showcase sections',
      'Interactive menu presentation',
      'Featured dishes display',
      'Contact and reservation sections',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    name: 'Handicrafts Heritage',
    category: 'Website',
    accent: 'gold',
    websiteUrl: 'https://handicrafts-3789.onrender.com',
    image: '/handicrafts-heritage-hero.png',
    imageFit: 'cover',
    imagePosition: 'center top',
    shortDescription:
      'A handcrafted products showcase website highlighting traditional artistry through elegant visuals and a modern user experience.',
    fullCaseStudy:
      'Handicrafts Heritage presents handmade products and artisan collections through a clean, premium layout that strengthens brand credibility and visual storytelling.',
    features: [
      'Handicraft product showcase sections',
      'Artisan collection displays',
      'Modern handcrafted-inspired UI',
      'Smooth scroll animations',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    name: 'Shoes Manufacturers Website',
    category: 'Website',
    accent: 'steel',
    websiteUrl: 'https://shoes-manufacturers.onrender.com',
    image: '/shoes-manufacturers-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A modern B2B footwear manufacturing platform built to attract wholesalers, distributors, and international buyers.',
    fullCaseStudy:
      'This experience emphasizes manufacturing expertise, production quality, and scalability through visual storytelling, factory highlights, and interactive product displays.',
    features: ['Manufacturing process showcase', 'Product catalog', 'Factory capability sections', 'Inquiry generation forms'],
    technologies: ['React.js', 'GSAP', 'Tailwind CSS', 'Node.js'],
  },
  {
    name: 'Water Purifier Website',
    category: 'Landing Page',
    accent: 'pearl',
    websiteUrl: 'https://water-purifiers.onrender.com',
    image: '/water-purifier-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A clean and informative website promoting advanced purification solutions with trust-building content.',
    fullCaseStudy:
      'The goal was to simplify complex purification technologies and present them in an accessible and visually appealing manner with educational content and lead-generation strategy.',
    features: ['Product comparison sections', 'Technology explanations', 'Trust-building UI', 'Lead generation forms'],
    technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Form Integration'],
  },
  {
    name: 'Jewelry E-Commerce Website',
    category: 'Ecommerce',
    accent: 'gold',
    websiteUrl: 'https://jewellery-09ej.onrender.com',
    image: '/jewelry-ecommerce-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A luxury jewelry showcase designed to elevate premium products through immersive visuals and refined shopping journeys.',
    fullCaseStudy:
      'Built to create a high-end digital presence for a jewelry brand, the layout focuses on luxury, craftsmanship, and exclusivity through elegant typography, premium spacing, and smooth interaction design.',
    features: ['Luxury UI design', 'Product showcase galleries', 'Smooth GSAP animations', 'Mobile-first responsive design'],
    technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    name: 'Fire Safety Website',
    category: 'Corporate',
    accent: 'steel',
    websiteUrl: 'https://fire-safety-website.onrender.com',
    image: '/fire-safety-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A professional corporate website for the fire protection industry focused on trust, compliance, and lead generation.',
    fullCaseStudy:
      'The platform presents a fire safety company as an industry leader through structured information architecture, clear service categorization, and trust-focused design.',
    features: ['Service showcases', 'Compliance information', 'Product catalogs', 'Quote request system'],
    technologies: ['React.js', 'GSAP', 'Tailwind CSS', 'Form Integration'],
  },
  {
    name: 'Luxury Watches Website',
    category: 'Ecommerce',
    accent: 'gold',
    websiteUrl: 'https://kriscel-watches.onrender.com',
    image: '/luxury-watches-hero.jpeg',
    imageFit: 'contain',
    imagePosition: 'center',
    shortDescription:
      'A premium watch brand website focused on craftsmanship, heritage, and product excellence.',
    fullCaseStudy:
      'The design showcases luxury timepieces through cinematic product presentation, smooth transitions, and high-end aesthetics that feel elevated and timeless.',
    features: ['Luxury product displays', 'Product collections', 'Scroll storytelling', 'Premium animations'],
    technologies: ['React.js', 'GSAP', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    name: 'Cookie Haven',
    category: 'Bakery',
    accent: 'gold',
    websiteUrl: 'https://cookies-o829.onrender.com',
    image: '/cookie-haven-hero.png',
    imageFit: 'cover',
    imagePosition: 'center top',
    shortDescription:
      'A premium cookies website showcasing handcrafted cookies through mouth-watering visuals and modern design.',
    fullCaseStudy:
      'Cookie Haven presents signature cookies and featured collections through an attractive, engaging digital experience that highlights freshness, quality, and brand personality.',
    features: [
      'Cookie showcase sections',
      'Featured product collections',
      'Modern bakery UI',
      'Smooth scroll animations',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
]

export const palette = {
  pearl: '#EAF0F4',
  slate: '#2F3D4E',
  steel: '#5F7F9C',
  gold: '#C7A86C',
} as const
