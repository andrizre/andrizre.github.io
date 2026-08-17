/**
 * Portfolio Data Configuration - Andri (@andrizre)
 * GitHub.io Professional Portfolio
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Andrian Rizky",
    handle: "@andrizre",
    title: "Full Stack Developer & Bot Architect",
    tagline: "Building resilient web applications, high-performance bot architectures, and developer productivity tools.",
    affiliation: "Independent Engineer & Open Source Contributor",
    location: "Indonesia (WIB / UTC+7)",
    timezone: "UTC+7 (Jakarta / Western Indonesia Time)",
    status: {
      text: "Open for Opportunities & Projects",
      badge: "Available",
      color: "emerald"
    },
    email: "andrizre.dev@gmail.com",
    telegram: "https://t.me/andrizre",
    github: "https://github.com/andrizre",
    linkedin: "https://linkedin.com/in/andrizre",
    cvLink: "assets/files/Andrian_CV.pdf",
    avatar: "https://avatars.githubusercontent.com/u/117989294?s=400&u=db9d400c6f8deeae17ec49b531d27b56f273e423&v=4" // High quality professional avatar
  },

  metrics: [
    { label: "Years Experience", value: "4+", description: "Web & Automation Engineering" },
    { label: "Projects Completed", value: "30+", description: "Web Apps, Bots & Utilities" },
    { label: "Code Repositories", value: "25+", description: "Open-source & Production" },
    { label: "Automation Uptime", value: "99.9%", description: "Deployed Bot Services" }
  ],

  about: {
    lead: "I am a software engineer focused on crafting elegant, robust web applications and designing intelligent automated systems.",
    paragraphs: [
      "With a strong foundation in full stack web development and backend automation, I specialize in building responsive user interfaces using React and modern JavaScript ecosystems, paired with dependable backend APIs using Node.js, Express, Python, and Supabase.",
      "My passion lies in automation and developer tooling—creating high-throughput Telegram bots, web scrapers, and utility suites that streamline workflows and solve practical problems with minimal friction.",
      "I prioritize clean architecture, accessible interface design, rigorous code maintainability, and seamless user experiences."
    ],
    researchInterests: [
      "Full-Stack Web Architecture",
      "Bot Systems & Event-Driven Automation",
      "Real-time Databases & Supabase",
      "API Design & Microservices",
      "UI/UX Engineering & Performance Optimization"
    ]
  },

  experience: [
    {
      period: "2023 — Present",
      role: "Lead Full Stack Developer & Bot Architect",
      company: "Independent / Freelance",
      location: "Remote",
      description: "Designing end-to-end web applications, automated Telegram infrastructure, and custom business workflow tools for clients globally.",
      highlights: [
        "Architected multi-threaded Telegram automation bots processing thousands of media and utility requests daily with Asyncio and Redis queues.",
        "Built responsive client portals and modern e-commerce storefronts using React, Tailwind CSS, and headless API backends.",
        "Designed real-time database schemas and authentication policies with PostgreSQL and Supabase Row Level Security (RLS)."
      ],
      skills: ["React", "Node.js", "Python", "Supabase", "Telegram API", "Docker"]
    },
    {
      period: "2022 — 2023",
      role: "Frontend & Web Applications Specialist",
      company: "Digital Solutions Studio",
      location: "Hybrid",
      description: "Spearheaded frontend development for interactive web applications, client dashboards, and custom tooling suites.",
      highlights: [
        "Transformed complex design mockups into modular, accessible, and high-performance React components.",
        "Improved web core vitals and loading speeds by 40% through code-splitting, asset optimization, and lazy rendering.",
        "Integrated third-party RESTful APIs, payment gateways, and authentication state management."
      ],
      skills: ["JavaScript (ES6+)", "TypeScript", "React", "REST APIs", "Tailwind CSS"]
    },
    {
      period: "2021 — 2022",
      role: "Junior Software & Automation Engineer",
      company: "Tech Systems Co.",
      location: "On-site",
      description: "Focused on script automation, database querying, data extraction, and internal web utilities.",
      highlights: [
        "Developed Python web scraping pipelines to extract and structure unstructured catalog datasets.",
        "Automated repetitive administrative workflows, saving an estimated 15+ hours per week.",
        "Collaborated on relational database maintenance and API endpoint testing."
      ],
      skills: ["Python", "JavaScript", "SQL", "Git", "Postman", "Linux"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Science / Informatics",
      institution: "Universitas Negeri / Institute of Technology",
      period: "2019 — 2023",
      grade: "GPA: 3.8 / 4.0 (Cum Laude)",
      description: "Specialized in Software Engineering, Algorithms & Data Structures, Distributed Systems, and Database Management."
    }
  ],

  projects: [
    {
      id: "fake-store-ecommerce",
      title: "Fake Store E-Commerce",
      category: "web",
      categoryLabel: "Web Application",
      description: "A comprehensive, ultra-fast modern e-commerce storefront featuring dynamic product filtering, persistent cart state, checkout workflow, and responsive mobile-first UI.",
      extendedDescription: "Engineered with React and Tailwind CSS, this project provides a frictionless shopping experience. It features client-side caching, search indexing, multi-category navigation, instant quantity updates with persistent local storage, and structured component modularity for seamless scalability.",
      tech: ["React", "JavaScript", "Tailwind CSS", "REST API", "Vite"],
      github: "https://github.com/andrizre/Fake-Store-E-commerce",
      demo: "https://andrizre.github.io/Fake-Store-E-commerce",
      featured: true,
      stars: 18,
      stats: "100 Lighthouse Score • Instant Search"
    },
    {
      id: "telegram-media-bot",
      title: "Telegram Media & Automation Engine",
      category: "automation",
      categoryLabel: "Bot & Automation",
      description: "A high-performance automated Telegram bot powered by Python Asyncio, featuring multimedia scrapers, asynchronous queue processing, and interactive commands.",
      extendedDescription: "Handles high concurrency with non-blocking event loops. Includes rate limiting, media sanitization, automatic webhook routing, and error recovery mechanisms for continuous 24/7 deployment.",
      tech: ["Python", "Telegram Bot API", "Asyncio", "Aiohttp", "FFmpeg"],
      github: "https://github.com/andrizre/Telegram-Tiktok",
      demo: "https://t.me/andrizre",
      featured: true,
      stars: 34,
      stats: "24/7 Uptime • Async Event Loop"
    },
    {
      id: "omni-tools-suite",
      title: "Omni Tools — Developer Utility Platform",
      category: "tools",
      categoryLabel: "Developer Tools",
      description: "An all-in-one suite of web-based developer utilities including JSON parsers, regex visualizers, color palette extractors, and hash/encryption tools.",
      extendedDescription: "Built purely in modern Vanilla JavaScript and CSS with zero heavy dependencies to ensure near-instant load times (<50ms). Designed with keyboard shortcuts and offline PWA capability.",
      tech: ["JavaScript", "HTML5 Canvas", "Modern CSS", "Web APIs"],
      github: "https://github.com/andrizre/omni-tools",
      demo: "https://andrizre.github.io/omni-tools",
      featured: true,
      stars: 22,
      stats: "0 Dependencies • Instant Offline"
    },
    {
      id: "telegram-hero-rpg",
      title: "Telegram Interactive RPG Bot",
      category: "automation",
      categoryLabel: "Bot & Game Logic",
      description: "A turn-based role-playing game bot running natively in Telegram chats with persistent player profiles, inventory systems, battles, and custom dungeon exploration.",
      extendedDescription: "Utilizes inline keyboard callback queries and transactional state management to deliver an immersive gaming experience directly inside Telegram chat threads.",
      tech: ["Python", "Telegram Bot API", "SQLite", "Game Engine Logic"],
      github: "https://github.com/andrizre/telegram-hero-rpg",
      demo: "https://t.me/andrizre",
      featured: false,
      stars: 15,
      stats: "Inline UI • Persistent SQLite"
    },
    {
      id: "del-luna-cafe",
      title: "Del Luna Cafe & Bistro Portal",
      category: "web",
      categoryLabel: "Web Application",
      description: "An elegant, aesthetic restaurant & cafe web portal with interactive digital menu, table reservation system, and dynamic opening hours status.",
      extendedDescription: "Crafted with curated typography and rich visual hierarchy, providing seamless mobile dining discovery, online order compilation, and direct WhatsApp integration.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/andrizre/del-luna-cafe",
      demo: "https://andrizre.github.io/del-luna-cafe",
      featured: false,
      stars: 12,
      stats: "Fluid Typography • WA Integration"
    },
    {
      id: "void-survivor-game",
      title: "Void Survivor & Sunset Canvas Games",
      category: "open-source",
      categoryLabel: "Open Source & Games",
      description: "Interactive HTML5 2D Canvas survival and arcade games with custom 60 FPS physics engines, particle effects, and spatial audio synthesis.",
      extendedDescription: "Showcasing low-level browser graphics and mathematical collision detection algorithms implemented without external heavy gaming libraries.",
      tech: ["Vanilla JavaScript", "HTML5 Canvas 2D", "Web Audio API"],
      github: "https://github.com/andrizre/void-survivor",
      demo: "https://andrizre.github.io/void-survivor",
      featured: false,
      stars: 29,
      stats: "60 FPS Native • Pure Math Physics"
    }
  ],

  publications: [
    {
      id: "pub-1",
      title: "Architecting High-Throughput Telegram Bots with Python Asyncio and Task Queues",
      authors: ["Andrian Rizky"],
      venue: "Engineering Technical Notes & Architecture Series",
      year: "2024",
      type: "Technical Paper",
      doi: "https://github.com/andrizre/andrizre",
      pdfUrl: "#",
      abstract: "This paper discusses the design and implementation of event-driven asynchronous bot architectures in Python. We analyze how non-blocking I/O with asyncio and redis-backed worker queues mitigate rate limiting bottlenecks and maximize concurrent message throughput in Telegram Bot API deployments.",
      bibtex: `@article{andri2024telegram,
  author    = {Andri},
  title     = {Architecting High-Throughput Telegram Bots with Python Asyncio and Task Queues},
  journal   = {Technical Architecture Notes},
  year      = {2024},
  url       = {https://andrizre.github.io}
}`
    },
    {
      id: "pub-2",
      title: "State Management and Performance Patterns in Modern Component-Based Web Applications",
      authors: ["Andrian Rizky"],
      venue: "Web Engineering Insights & Practices",
      year: "2024",
      type: "Article",
      doi: "https://github.com/andrizre/andrizre",
      pdfUrl: "#",
      abstract: "A comparative analysis of state management techniques across React, Context API, and localized component state. We evaluate DOM re-rendering metrics, memory footprints, and bundle size trade-offs to determine optimal patterns for medium-to-large single-page applications.",
      bibtex: `@article{andri2024reactpatterns,
  author    = {Andri},
  title     = {State Management and Performance Patterns in Modern Component-Based Web Applications},
  journal   = {Web Engineering Insights},
  year      = {2024},
  url       = {https://andrizre.github.io}
}`
    },
    {
      id: "pub-3",
      title: "Implementing Row Level Security (RLS) and Scalable Auth in Serverless PostgreSQL",
      authors: ["Andrian Rizky"],
      venue: "Database Security & Cloud Architecture Review",
      year: "2023",
      type: "Whitepaper",
      doi: "https://github.com/andrizre/andrizre",
      pdfUrl: "#",
      abstract: "Exploration of declarative security architectures using PostgreSQL Row Level Security (RLS) integrated with Supabase and JSON Web Tokens (JWT). We present verifiable authorization policies that eliminate security vulnerabilities at the database layer.",
      bibtex: `@techreport{andri2023supabasewhitepaper,
  author      = {Andri},
  title       = {Implementing Row Level Security (RLS) and Scalable Auth in Serverless PostgreSQL},
  institution = {Cloud Security & Dev Research},
  year        = {2023},
  url         = {https://andrizre.github.io}
}`
    }
  ],

  skills: {
    languages: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "js" },
      { name: "TypeScript", level: "Proficient", icon: "ts" },
      { name: "Python", level: "Advanced", icon: "python" },
      { name: "HTML5 / CSS3", level: "Expert", icon: "html" },
      { name: "SQL (PostgreSQL)", level: "Proficient", icon: "postgres" },
      { name: "Bash / Shell", level: "Intermediate", icon: "bash" }
    ],
    frontend: [
      { name: "React.js", level: "Advanced", icon: "react" },
      { name: "Next.js", level: "Proficient", icon: "nextjs" },
      { name: "Tailwind CSS", level: "Expert", icon: "tailwind" },
      { name: "Vite & Modern Bundlers", level: "Advanced", icon: "vite" },
      { name: "Responsive UI/UX & A11y", level: "Advanced", icon: "figma" }
    ],
    backend: [
      { name: "Node.js & Express", level: "Advanced", icon: "nodejs" },
      { name: "Python Asyncio / FastAPI", level: "Advanced", icon: "python" },
      { name: "Supabase & Firebase", level: "Advanced", icon: "supabase" },
      { name: "PostgreSQL & SQLite", level: "Proficient", icon: "postgres" },
      { name: "RESTful API Design", level: "Advanced", icon: "postman" }
    ],
    automation: [
      { name: "Telegram Bot API", level: "Expert", icon: "telegram" },
      { name: "Web Scraping & Extraction", level: "Advanced", icon: "python" },
      { name: "Async Task Queues (Redis)", level: "Proficient", icon: "redis" },
      { name: "Cron & Workflow Automation", level: "Advanced", icon: "linux" }
    ],
    tools: [
      { name: "Git & GitHub Actions", level: "Advanced", icon: "git" },
      { name: "Docker (Containers)", level: "Intermediate", icon: "docker" },
      { name: "VS Code & Debugging", level: "Expert", icon: "vscode" },
      { name: "Postman API Testing", level: "Advanced", icon: "postman" },
      { name: "Vercel / GitHub Pages", level: "Advanced", icon: "vercel" }
    ]
  }
};
