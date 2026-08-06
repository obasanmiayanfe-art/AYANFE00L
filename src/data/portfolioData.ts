import {
  ServiceItem,
  PortfolioProject,
  Testimonial,
  SkillItem,
  ProcessStep,
  WhyChoosePoint,
  BrandLogo
} from '../types';

export const BRAND_INFO = {
  name: 'BELOVED',
  title: 'Senior WordPress & WooCommerce Developer',
  tagline: 'Websites That Turn Visitors Into Customers.',
  headline: 'Building High-Converting WordPress Websites That Help Businesses Grow',
  subheadline: 'I specialize in WordPress and WooCommerce development, creating fast, responsive, SEO-optimized websites that generate leads, increase conversions, and elevate brands.',
  experience: '5+ Years',
  deliveredProjects: '150+',
  satisfactionRate: '98%',
  rating: '5.0',
  reviewCount: '120+',
  email: 'obasanmiayanfe@gmail.com',
  phone: '+234 704 773 1622',
  whatsapp: 'https://wa.me/2347047731622',
  linkedin: 'https://linkedin.com/in/beloved-developer',
  github: 'https://github.com/beloved-dev',
  behance: 'https://behance.net/beloved-designs',
  location: 'Global (Remote for US, UK, Europe & Worldwide Clients)',
  heroImage: 'https://res.cloudinary.com/gvu0lto5/image/upload/v1785947193/gig_image_tegllz.png',
  aboutImage: 'https://res.cloudinary.com/gvu0lto5/image/upload/v1785949013/ChatGPT_Image_Jun_23_2026_04_36_41_PM_igqvhb.png'
};

export const BRAND_LOGOS: BrandLogo[] = [
  { name: 'WordPress', symbol: 'WP', category: 'CMS Leader' },
  { name: 'WooCommerce', symbol: 'WOO', category: 'E-commerce Standard' },
  { name: 'Elementor', symbol: 'ELM', category: 'Page Builder Pro' },
  { name: 'Shopify', symbol: 'SHOP', category: 'Store Infrastructure' },
  { name: 'Wix', symbol: 'WIX', category: 'Responsive Builder' },
  { name: 'Squarespace', symbol: 'SQS', category: 'Design Platform' },
  { name: 'Stripe', symbol: 'STP', category: 'Payment Gateway' },
  { name: 'Google', symbol: 'SEO', category: 'Search & Analytics' }
];

export const CLIENT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
];

export const ABOUT_HIGHLIGHTS = [
  'WordPress Development',
  'WooCommerce Stores',
  'Elementor Pro',
  'Website Speed Optimization',
  'SEO Optimization',
  'Website Maintenance',
  'Landing Pages',
  'Business Websites',
  'E-commerce Websites'
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wordpress-dev',
    title: 'WordPress Website Development',
    subtitle: 'Custom business websites built for maximum performance & scale',
    description: 'Bespoke WordPress theme development, custom layouts with Elementor Pro, lightweight code, fast loading speeds, and seamless admin management.',
    features: [
      'Custom Theme & Layout Design',
      'Elementor Pro Custom Widgets',
      'Mobile Responsive & Cross-Browser',
      'Schema SEO Markup Built-in',
      'Easy Admin Content Management'
    ],
    iconName: 'Code2',
    badge: 'Most Popular',
    startingPrice: '$1,200'
  },
  {
    id: 'woocommerce-dev',
    title: 'WooCommerce Development',
    subtitle: 'High-converting online stores engineered for maximum sales',
    description: 'Custom e-commerce shopping experiences with optimized checkout flows, payment gateway integrations, inventory sync, and conversion rate optimization.',
    features: [
      'Custom Product Layouts & Filters',
      'Stripe & PayPal One-Click Checkout',
      'Cart Abandonment Recovery',
      'Speed-Optimized Catalog Pages',
      'Subscriptions & Membership Setup'
    ],
    iconName: 'ShoppingBag',
    badge: 'Conversion Focused',
    startingPrice: '$1,800'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    subtitle: 'Transform outdated websites into sleek, modern lead engines',
    description: 'Rebrand and rebuild your existing website to boost user engagement, elevate visual credibility, improve mobile responsiveness, and double lead conversions.',
    features: [
      'Modern UI/UX Visual Revamp',
      'Content & Asset Migration',
      'Zero Downtime Guarantee',
      'PageSpeed Score Boost to 90+',
      'SEO Rankings Protection & Redirects'
    ],
    iconName: 'RefreshCw',
    badge: 'High ROI',
    startingPrice: '$950'
  },
  {
    id: 'shopify-dev',
    title: 'Shopify Development',
    subtitle: 'Professional Shopify stores tailored for ambitious e-commerce brands',
    description: 'Custom Liquid theme customization, store setup, app integrations, custom sections, and conversion optimization for Shopify and Shopify Plus stores.',
    features: [
      'Shopify 2.0 Custom Theme Setup',
      'Product Page Customization',
      'App Integration (Klaviyo, Recharge)',
      'Custom Liquid & CSS Scripting',
      'Mobile-First Checkout Tuning'
    ],
    iconName: 'Store',
    badge: 'E-commerce',
    startingPrice: '$1,400'
  },
  {
    id: 'wix-design',
    title: 'Wix Website Design',
    subtitle: 'Responsive Wix Studio websites with custom animations & integrations',
    description: 'Clean, pixel-perfect Wix Studio websites for small businesses, consultants, and agencies seeking fast turnarounds and intuitive management.',
    features: [
      'Wix Studio Custom Layouts',
      'Velo Custom Interactions',
      'SEO Setup & Google Search Console',
      'Booking & Scheduling Tools',
      'Mobile Screen Adaptations'
    ],
    iconName: 'Layout',
    badge: 'Fast Delivery',
    startingPrice: '$800'
  },
  {
    id: 'squarespace-dev',
    title: 'Squarespace Development',
    subtitle: 'Elegant Squarespace websites for creatives, portfolios & boutiques',
    description: 'Sophisticated, design-forward Squarespace websites enhanced with custom CSS, tailored blogs, event booking, and polished typography.',
    features: [
      'Custom CSS Styling & Code Blocks',
      'Portfolio & Service Showcases',
      'Acuity Scheduling Integration',
      'Newsletter & Contact Forms',
      'Fluid Engine Precision Alignment'
    ],
    iconName: 'Layers',
    badge: 'Elegant Design',
    startingPrice: '$750'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'luxury-fashion',
    title: 'Aura Luxury Fashion Website',
    category: 'WooCommerce',
    platform: 'WooCommerce & WordPress',
    client: 'Aura Haute Couture (Paris)',
    description: 'A high-end, luxury e-commerce fashion storefront featuring custom product configurators, multi-currency support, and instantaneous AJAX cart filtering.',
    fullDescription: 'Aura needed a high-fashion digital storefront that matched their physical Paris boutique experience. We engineered a custom WooCommerce store with video backgrounds, micro-interactions, custom size guide popups, and Stripe Radar security.',
    challenge: 'High bounce rate on mobile devices due to slow heavy images and clunky checkout steps.',
    solution: 'Rebuilt theme using lightweight timber, WebP automatic picture compression, multi-step AJAX checkout, and custom Elementor product modules.',
    results: [
      '210% surge in mobile checkout conversions',
      '0.8s initial page load time on global CDN',
      '38% increase in average order value (AOV)'
    ],
    metrics: [
      { label: 'Conversion Growth', value: '+210%' },
      { label: 'PageSpeed Score', value: '99/100' },
      { label: 'Sales Increase', value: '3.4x' }
    ],
    technology: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom CSS/JS', 'Stripe API'],
    imageUrl: 'https://res.cloudinary.com/gvu0lto5/image/upload/v1785955042/Women_s_Fashion_1_r1venl.jpg',
    liveUrl: 'https://example-aura-fashion.com',
    featured: true
  },
  {
    id: 'restaurant-website',
    title: 'Bistro Modern Restaurant Website',
    category: 'WordPress',
    platform: 'WordPress & Elementor Pro',
    client: 'Bistro Modern (New York)',
    description: 'An interactive culinary experience with online table reservations, dynamic seasonal menus, and automated event booking.',
    fullDescription: 'Designed a warm, appetite-inducing digital portal for a Michelin-starred Manhattan bistro. Integrated OpenTable online reservations, downloadable dietary PDF menus, and automated event inquiry forms.',
    challenge: 'Losing 40% of weekend table bookings due to static phone-only reservation calls.',
    solution: 'Implemented real-time OpenTable widget, interactive food menu tabbed view, and instant WhatsApp reservation concierge.',
    results: [
      '450+ weekly online table reservations',
      '180% increase in private dining event inquiries',
      'Top 3 Google Search ranking for local keywords'
    ],
    metrics: [
      { label: 'Monthly Reservations', value: '1,800+' },
      { label: 'Google Speed Score', value: '97/100' },
      { label: 'Lead Growth', value: '+180%' }
    ],
    technology: ['WordPress', 'Elementor Pro', 'OpenTable API', 'Schema SEO', 'Google Maps API'],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    liveUrl: 'https://example-bistro-restaurant.com',
    featured: true
  },
  {
    id: 'hvac-website',
    title: 'ProAir HVAC Services Website',
    category: 'WordPress',
    platform: 'WordPress & Elementor Pro',
    client: 'ProAir Thermal Solutions (Texas)',
    description: 'High-converting lead generation portal for a premier residential and commercial HVAC contractor with instant quote calculators.',
    fullDescription: 'Created a high-trust, emergency-ready HVAC service website designed to turn local search traffic into immediate emergency service calls and scheduled maintenance agreements.',
    challenge: 'Outdated website failed to generate phone calls or online estimate submissions during peak heatwaves.',
    solution: 'Built an interactive 60-second HVAC Estimate Calculator, prominent click-to-call mobile floating headers, and localized city landing pages.',
    results: [
      '320% increase in monthly quote requests',
      '4.8x boost in organic local SEO phone calls',
      '100% WCAG AAA accessible interface'
    ],
    metrics: [
      { label: 'Quote Conversion', value: '+320%' },
      { label: 'Local SEO Rank', value: '#1 Local' },
      { label: 'Monthly Calls', value: '640+' }
    ],
    technology: ['WordPress', 'Elementor Pro', 'Custom Cost Calculator', 'Local Schema', 'Google Tag Manager'],
    imageUrl: 'https://res.cloudinary.com/gvu0lto5/image/upload/v1785954966/HVAC_WEBSITE_1_dawdxk.jpg',
    liveUrl: 'https://example-proair-hvac.com',
    featured: true
  },
  {
    id: 'law-firm',
    title: 'Vanguard Legal Corporate Law Firm',
    category: 'WordPress',
    platform: 'WordPress',
    client: 'Vanguard Legal Partners (London)',
    description: 'Authoritative corporate law firm website featuring attorney bios, practice area hubs, multi-language support, and secure client case portals.',
    fullDescription: 'A sophisticated digital presence engineered to convey authority, trust, and legal prestige. Includes interactive attorney filter directories, confidential consultation schedulers, and multilingual translation toggles.',
    challenge: 'Previous site appeared outdated and failed to attract high-value corporate retainers.',
    solution: 'Engineered clean corporate aesthetic with dark navy and gold accents, fast PDF case study downloads, and Calendly consultation scheduling.',
    results: [
      '$1.2M in new corporate retainers signed',
      '65% increase in high-net-worth client consultations',
      '100% corporate brand alignment'
    ],
    metrics: [
      { label: 'New Retainers', value: '$1.2M+' },
      { label: 'Consultation Growth', value: '+65%' },
      { label: 'Trust Rating', value: '5.0 Stars' }
    ],
    technology: ['WordPress', 'Custom Gutenberg Blocks', 'Calendly API', 'WPML Multilingual', 'Cloudflare CDN'],
    imageUrl: 'https://res.cloudinary.com/gvu0lto5/image/upload/v1785955239/Luxury_Law_Firm_Website_gg7kom.jpg',
    liveUrl: 'https://example-vanguard-legal.com',
    featured: true
  },
  {
    id: 'medical-website',
    title: 'Apex Health Medical & Dental Center',
    category: 'WordPress',
    platform: 'WordPress & Elementor Pro',
    client: 'Apex Health Clinics (Chicago)',
    description: 'HIPAA-compliant healthcare website with online appointment booking, patient portal logins, doctor search, and telemedicine info.',
    fullDescription: 'Built a clean, soothing medical portal for a multi-location health system in Chicago. Features intuitive clinic finder, online patient intake forms, doctor specialty filters, and instant appointment confirmation.',
    challenge: 'High phone queue times and patient frustration during peak morning appointment booking.',
    solution: 'Designed an effortless online appointment scheduling workflow integrated with clinic management software and automated SMS appointment reminders.',
    results: [
      '55% reduction in front-desk phone calls',
      '1,200+ monthly self-serve online appointments',
      '99.9% uptime uptime guarantee'
    ],
    metrics: [
      { label: 'Online Bookings', value: '1,200/mo' },
      { label: 'Call Volume', value: '-55%' },
      { label: 'Patient Rating', value: '4.9/5.0' }
    ],
    technology: ['WordPress', 'Elementor Pro', 'HIPAA Secure Forms', 'Google Maps API', 'Acuity Scheduling'],
    imageUrl: 'https://res.cloudinary.com/gvu0lto5/image/upload/v1785955733/Dental_clinics_2_rxihqk.jpg',
    liveUrl: 'https://example-apex-medical.com',
    featured: true
  },
  {
    id: 'real-estate',
    title: 'Horizon Premier Real Estate Portal',
    category: 'WooCommerce',
    platform: 'WooCommerce & WordPress Custom',
    client: 'Horizon Luxury Properties (Miami)',
    description: 'High-end luxury real estate showcase with MLS/IDX property syncing, interactive map searching, 3D virtual tour embeds, and agent contact leads.',
    fullDescription: 'Developed a premier property portal for Miami luxury waterfront real estate. Buyers can filter by price, neighborhood, architectural style, and amenities, save favorite properties, and book private property tours.',
    challenge: 'Slow map rendering and property search filtering caused visitors to leave before contacting agents.',
    solution: 'Built custom AJAX property filter engine, Mapbox vector rendering, high-res photo gallery lightboxes, and instant WhatsApp agent routing.',
    results: [
      '3.8x increase in property inquiry leads',
      'Average session duration doubled to 4m 12s',
      'Over $14M in property listings converted'
    ],
    metrics: [
      { label: 'Property Inquiries', value: '+280%' },
      { label: 'Avg Session Time', value: '4m 12s' },
      { label: 'Listings Sold', value: '$14M+' }
    ],
    technology: ['WordPress', 'WooCommerce Catalog Mode', 'Mapbox API', 'Custom IDX Sync', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    liveUrl: 'https://example-horizon-realty.com',
    featured: true
  }
];

export const WHY_WORK_WITH_ME: WhyChoosePoint[] = [
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    subtitle: 'On-time delivery without compromising on quality or code standards',
    description: 'Strict adherence to project milestones. Most business websites are delivered within 7 to 14 days with zero delay guarantee.',
    iconName: 'Zap',
    highlight: '7-14 Day Turnaround'
  },
  {
    id: 'seo-optimized',
    title: 'SEO Optimized',
    subtitle: 'Built from the ground up to rank high on Google Search',
    description: 'Clean semantic HTML5 tags, Schema.org structured JSON-LD data, meta tag optimization, and Google Search Console indexing ready.',
    iconName: 'Search',
    highlight: 'Google Rank Ready'
  },
  {
    id: 'mobile-responsive',
    title: 'Mobile Responsive',
    subtitle: '100% pixel-perfect experience on iPhones, Androids, Tablets & Laptops',
    description: 'Fluid layout breakpoints tested on 12+ real screen sizes. Fast touch targets, effortless navigation, and crisp typography.',
    iconName: 'Smartphone',
    highlight: 'Mobile-First UI'
  },
  {
    id: 'clean-code',
    title: 'Clean Code',
    subtitle: 'Lightweight, modern architecture without bloated plugins',
    description: 'Minimalist code architecture that prevents plugin conflicts, guarantees high security, and makes future updates effortless.',
    iconName: 'Code',
    highlight: 'Bloat-Free Guarantee'
  },
  {
    id: 'easy-to-manage',
    title: 'Easy to Manage',
    subtitle: 'Drag & drop editing so you can update text and images yourself',
    description: 'Includes customized Elementor or Gutenberg admin controls, plus custom video walkthrough training so you are never stranded.',
    iconName: 'Sliders',
    highlight: '100% Client Control'
  },
  {
    id: 'premium-uiux',
    title: 'Premium UI/UX',
    subtitle: 'Apple-inspired clean UI designed specifically to convert visitors',
    description: 'Strategic visual hierarchy, conversion-driven visual callouts, clear CTAs, and generous negative space that elevates brand authority.',
    iconName: 'Sparkles',
    highlight: 'Conversion Focused'
  },
  {
    id: 'secure-websites',
    title: 'Secure Websites',
    subtitle: 'Enterprise-grade security hardening and malware protection',
    description: 'SSL certificate configuration, login security hardening, automated daily backups, firewall integration, and spam prevention.',
    iconName: 'ShieldCheck',
    highlight: 'Hardened Security'
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    subtitle: 'Dedicated post-launch care, updates & growth guidance',
    description: 'Free 30-day post-launch technical support and optional monthly maintenance care plans to keep your site fast and updated.',
    iconName: 'Headphones',
    highlight: '30-Day Free Support'
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: 'WordPress',
    percentage: 100,
    category: 'CMS & E-commerce',
    experienceYears: '5+ Years',
    highlight: 'Custom Themes, Gutenberg, Plugin Development & Security Hardening'
  },
  {
    name: 'WooCommerce',
    percentage: 100,
    category: 'CMS & E-commerce',
    experienceYears: '5+ Years',
    highlight: 'E-commerce Checkout Optimization, Custom Payment Hooks & Subscriptions'
  },
  {
    name: 'Elementor Pro',
    percentage: 98,
    category: 'Design & Page Builders',
    experienceYears: '5+ Years',
    highlight: 'Pixel-perfect Custom Widgets, Motion FX, Dynamic Tags & Templates'
  },
  {
    name: 'Shopify',
    percentage: 92,
    category: 'CMS & E-commerce',
    experienceYears: '5+ Years',
    highlight: 'Liquid Code Customization, Store Setup & App Sync'
  },
  {
    name: 'Wix',
    percentage: 90,
    category: 'Design & Page Builders',
    experienceYears: '4+ Years',
    highlight: 'Wix Studio, Velo Interactions & Custom Layouts'
  },
  {
    name: 'Squarespace',
    percentage: 90,
    category: 'Design & Page Builders',
    experienceYears: '4+ Years',
    highlight: 'Fluid Engine Custom CSS, Scheduling & Creative Portfolios'
  },
  {
    name: 'HTML',
    percentage: 95,
    category: 'Frontend Code',
    experienceYears: '5+ Years',
    highlight: 'Semantic HTML5, Accessibility (WCAG AA), Clean Structure'
  },
  {
    name: 'CSS',
    percentage: 95,
    category: 'Frontend Code',
    experienceYears: '5+ Years',
    highlight: 'Tailwind CSS, Flexbox/Grid Layouts, Keyframe Animations & Glassmorphism'
  },
  {
    name: 'JavaScript',
    percentage: 85,
    category: 'Frontend Code',
    experienceYears: '5+ Years',
    highlight: 'ES6+, AJAX Dynamic Filtering, React/Vite, DOM Manipulations'
  },
  {
    name: 'SEO',
    percentage: 90,
    category: 'Optimization & SEO',
    experienceYears: '5+ Years',
    highlight: 'Technical SEO, Schema JSON-LD Markup, PageSpeed 90+ Score Tuning'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    subtitle: 'Understanding your business goals, target audience & project scope',
    description: 'We begin with a deep dive into your business goals, brand identity, competitors, and target audience. I map out a clear site map and strategic conversion blueprint.',
    deliverables: [
      'Project Scope & Technical Specification',
      'Sitemap & Conversion Wireframe Architecture',
      'Competitor & Keyword Analysis'
    ],
    duration: '1 - 2 Days'
  },
  {
    number: '02',
    title: 'UI/UX Design',
    subtitle: 'Crafting modern, agency-grade visual layouts that captivate',
    description: 'I design custom high-fidelity page layouts tailored to your brand identity. Every typography scale, color choice, and button callout is crafted for aesthetic excellence.',
    deliverables: [
      'Interactive Figma/Design Mockups',
      'Typography & Color Palette Selection',
      'Mobile & Desktop UI Layout Approval'
    ],
    duration: '3 - 4 Days'
  },
  {
    number: '03',
    title: 'Development & Speed Tuning',
    subtitle: 'Writing clean code, configuring CMS & optimizing for 90+ PageSpeed',
    description: 'I transform the approved design into a lightning-fast, pixel-perfect WordPress or WooCommerce build. I implement security hardening, schema markup, and speed caching.',
    deliverables: [
      'Custom WordPress/WooCommerce Build',
      'PageSpeed 90+ Score Optimization',
      'Cross-Browser & Mobile Responsiveness Test'
    ],
    duration: '4 - 7 Days'
  },
  {
    number: '04',
    title: 'Launch & Support',
    subtitle: 'Deploying your website seamlessly & providing ongoing care',
    description: 'After rigorous QA testing and your final sign-off, we launch your website live on your main domain. Includes Google Search Console setup and 30 days of free support.',
    deliverables: [
      'Zero-Downtime Live Server Deployment',
      'Google Indexing & SEO Setup',
      'Video Walkthrough Training & 30-Day Support'
    ],
    duration: '1 Day'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    company: 'Elegance Fashion Co.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'BELOVED completely transformed our WooCommerce online fashion store! The new design is sleek, incredibly fast, and our mobile sales increased by over 200% in the first month alone. Professional communication, fast turnaround, and outstanding WooCommerce expertise. I would hire BELOVED again without hesitation!',
    verified: true,
    projectType: 'WooCommerce E-commerce Store'
  },
  {
    id: 't2',
    name: 'Michael Brown',
    role: 'Managing Partner',
    company: 'Apex Law Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'Working with BELOVED was a seamless experience from start to finish. He redesigned our corporate law firm website on WordPress with custom Gutenberg blocks. Great attention to detail, lightning-fast execution, and our consultation bookings have doubled. Highest recommendation!',
    verified: true,
    projectType: 'Corporate WordPress Website'
  },
  {
    id: 't3',
    name: 'Emma Wilson',
    role: 'Marketing Director',
    company: 'Artisan Bistro Hospitality',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'BELOVED built our restaurant website with integrated reservation tools and dynamic seasonal menus. His speed optimization was incredible — the site loads in under a second! Outstanding communication and absolute mastery of Elementor Pro.',
    verified: true,
    projectType: 'Restaurant WordPress Website'
  },
  {
    id: 't4',
    name: 'David Lee',
    role: 'Founder & Managing Director',
    company: 'Prime Realty Global',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'BELOVED developed a custom luxury real estate property showcase with AJAX filtering. The performance is ultra-fast, clean, and our buyers love the mobile interface. Fast delivery, clean code, and top-notch ongoing support!',
    verified: true,
    projectType: 'Real Estate Portal & Catalog'
  },
  {
    id: 't5',
    name: 'Sophia Carter',
    role: 'Operations Director',
    company: 'Vitality Health Clinic',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'Our medical clinic needed a modern, trustworthy website with secure appointment booking. BELOVED delivered ahead of schedule with flawless mobile responsiveness. Front-desk call volume dropped by 50% as patients started booking online!',
    verified: true,
    projectType: 'Healthcare Medical Portal'
  },
  {
    id: 't6',
    name: 'Daniel Walker',
    role: 'Owner & CEO',
    company: 'AirFlow HVAC Systems',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'If you need a website that actually generates phone calls and leads, BELOVED is your developer. Built an instant HVAC quote calculator on WordPress that boosted our monthly quote submissions by 320%. Excellent expertise!',
    verified: true,
    projectType: 'Local Business Lead Generation'
  }
];

export const ESTIMATOR_PLATFORMS = [
  { id: 'wp', name: 'WordPress Website', basePrice: 1200, time: '1 to 3 Weeks' },
  { id: 'woo', name: 'WooCommerce E-commerce', basePrice: 1800, time: '10 to 20 Working Days' },
  { id: 'shopify', name: 'Shopify Store', basePrice: 1400, time: '1 to 3 Weeks' },
  { id: 'wix', name: 'Wix Studio Site', basePrice: 800, time: '1 to 2 Weeks' },
  { id: 'sqs', name: 'Squarespace Site', basePrice: 750, time: '7 to 14 Days' },
  { id: 'redesign', name: 'Full Website Redesign', basePrice: 950, time: '7 to 14 Days' }
];

export const ESTIMATOR_ADDONS = [
  { id: 'seo', name: 'Advanced Local & Technical SEO Setup', price: 350, timeframe: '+1 Day' },
  { id: 'speed', name: 'PageSpeed 90+ Score Caching Tuning', price: 250, timeframe: '+1 Day' },
  { id: 'payment', name: 'Stripe / PayPal Gateway & Subscriptions', price: 300, timeframe: '+1 Day' },
  { id: 'copy', name: 'High-Converting Sales Copywriting', price: 400, timeframe: '+2 Days' },
  { id: 'care', name: '1 Year Security & Maintenance Care Plan', price: 600, timeframe: 'Ongoing' }
];

export interface FAQItem {
  id: string;
  category: 'Timelines & Delivery' | 'WordPress & Technical' | 'Maintenance & Ownership' | 'Workflow & Payments';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Timelines & Delivery',
    question: 'How long does a website project take from start to finish?',
    answer: 'Turnaround times depend on project scope and platform:\n• WordPress Custom Website: 1 to 3 Weeks\n• WooCommerce E-Commerce Store: 10 to 20 Working Days\n• Shopify E-Commerce Store: 1 to 3 Weeks\n• Squarespace Website: 7 to 14 Days\n• Wix Studio Website: 1 to 2 Weeks\n• Website Redesign & Speed Optimization: 7 to 14 Days'
  },
  {
    id: 'faq-2',
    category: 'WordPress & Technical',
    question: 'Why choose custom WordPress over pre-made templates?',
    answer: 'Pre-made templates often come bundled with bloated code, slow scripts, and dozens of unnecessary plugins that hurt your PageSpeed scores and search rankings. I build lightweight, custom-tailored WordPress & WooCommerce solutions optimized for 90+ Google PageSpeed scores, fast loading times, and intuitive content management.'
  },
  {
    id: 'faq-3',
    category: 'Maintenance & Ownership',
    question: 'Will I have full ownership and be able to edit the website myself?',
    answer: 'Yes, 100%! Upon project completion and final payment, you retain full ownership of all code, content, domain, and hosting assets. I build user-friendly dashboard interfaces using Elementor Pro or Gutenberg so you can edit text, upload images, add new products, or publish blogs without touching a single line of code. Video walkthroughs are provided.'
  },
  {
    id: 'faq-4',
    category: 'Maintenance & Ownership',
    question: 'Do you offer post-launch support and ongoing website maintenance?',
    answer: 'Every project includes 30 days of complimentary post-launch technical support to ensure everything operates flawlessly. For long-term peace of mind, I also offer monthly maintenance care plans covering core updates, daily security backups, malware monitoring, and content updates.'
  },
  {
    id: 'faq-5',
    category: 'WordPress & Technical',
    question: 'Will my website be mobile-friendly and optimized for Google SEO?',
    answer: 'Absolutely. Every website I deliver is 100% responsive across smartphones, tablets, and ultra-wide desktop displays. I also implement core technical SEO standards, including clean URL structures, meta tags, XML sitemaps, schema markup, image compression, and SSL security.'
  },
  {
    id: 'faq-6',
    category: 'Workflow & Payments',
    question: 'What is your payment structure and project workflow?',
    answer: 'Projects follow a standard 50% upfront deposit to initiate discovery, wireframing, and development, and the remaining 50% balance upon final project review and approval before launching to your live domain.'
  },
  {
    id: 'faq-7',
    category: 'Workflow & Payments',
    question: 'Which platform is best for my business: WordPress, Shopify, Wix, or Squarespace?',
    answer: 'It depends on your business goals! WordPress and WooCommerce offer maximum customization, scalability, and technical SEO control. Shopify is ideal for high-volume turnkey e-commerce. Squarespace and Wix provide streamlined solutions for simple portfolio or service sites. During our initial consultation, I will recommend the exact platform tailored to your goals and budget.'
  }
];

