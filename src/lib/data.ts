export const PROFILE = {
  name: "Dawa",
  role: "Software Engineer & AI Architect",
  bio: "My journey began at age 12 with a curiosity for hacking, Kali Linux, and social engineering. This early fascination with breaking systems evolved into a profound passion for building and securing them. I dedicated a year to mastering bug bounties, Python automation, and web security, laying a strong foundation for my career. Today, I'm a full-stack engineer and AI developer, merging blockchain technology with artificial intelligence to create seamless digital experiences. From building viral AI applications to engineering complex real estate solutions, I turn intricate problems into elegant, scalable software. I pride myself on my ability to rapidly master new technologies and deliver innovative solutions.",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dawa-sherpa-650b60283/", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com/dawasherpa-ui", icon: "Github" },
    { name: "X (Twitter)", url: "https://x.com/dawashe56776442", icon: "Twitter" },
    { name: "Email", url: "mailto:jamudawa22@gmail.com", icon: "Mail" },
    { name: "WhatsApp", url: "https://wa.me/9779862989686", icon: "MessageCircle" },
    { name: "Telegram", url: "https://t.me/dawasherpa06", icon: "Send" },
    { name: "Discord", url: "https://discord.com/users/dawasherpa_02309", icon: "Gamepad2" },
  ],
};

export const TIMELINE = [
  {
    year: "2018",
    title: "The Spark",
    description:
      "Started hacking journey at age 12. Installed Kali Linux, learned social engineering tools, and explored the basics of cybersecurity.",
    icon: "Terminal",
  },
  {
    year: "2019-2020",
    title: "Bug Bounty & Security",
    description:
      "Dedicated a year to intensive self-study and practical application in cybersecurity. Dove deep into bug bounties (The Cyber Zeel), mastered Burp Suite, and gained advanced knowledge in web security protocols, becoming an active contributor to cybersecurity communities.",
    icon: "ShieldAlert",
  },
  {
    year: "2020",
    title: "Python & Automation",
    description:
      " leveraged the quarantine period to master Python programming. Developed 'Jarvis', a voice-controlled assistant, and engineered sophisticated automation scripts with PyAutoGUI to streamline complex data entry workflows, significantly increasing operational efficiency.",
    icon: "Bot",
  },
  {
    year: "2021",
    title: "Transition to Web Dev",
    description:
      "Realized the need to understand systems to break them. Learned HTML, CSS, JS (CodeWithHarry). Built responsive sites, an Image Gallery (Pexels API), and an Object Matching Game.",
    icon: "Code",
  },
  {
    year: "2022",
    title: "React & Blockchain",
    description:
      "Moved to React ecosystem. Built 'VoteHub' (voting platform). Landed first major project: Ethereum Market Insight with AI Chatbot. Learned LangChain and built 'Elsia' (AI RAG + Ethereum).",
    icon: "Cpu",
  },
  {
    year: "2023",
    title: "Professional Growth",
    description:
      "Joined a Node.js internship (Interviewer: Lokendra). Built multiple projects and the 'FlashUi' component library. Later, transitioned to freelancing for US real estate agents (Street View AI, Cold Emailing tools).",
    icon: "Briefcase",
  },
  {
    year: "2024",
    title: "AI & Innovation",
    description:
      "Deep dive into AI/ML. Built 'Maya Grung' (Viral AI Girlfriend), Handwriting Recognition models, and specialized travel agency platforms. Currently exploring System Design and scaling SaaS ventures.",
    icon: "Sparkles",
  },
  {
    year: "2026",
    title: "Confidential Project",
    description:
      "Joined a high-impact remote team working on confidential, next-generation technology. Driving tailored solutions in a global, fast-paced environment.",
    icon: "Lock",
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Expo (React Native)",
      "FlashUi",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "FastAPI",
      "Flask",
      "Supabase",
      "Firebase",
      "Prisma",
    ],
  },
  {
    category: "AI & ML",
    items: [
      "LangChain",
      "OpenAI API",
      "Gemini",
      "Pinecone",
      "Meta API",
      "RAG Systems",
    ],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Linux", "Kubernetes","AWS", "CI/CD", "Git"],
  },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  category: "AI & LLM" | "SaaS & Web" | "Deep Learning & Tools" | "Open Source";
  featured?: boolean;
  highlights?: string[];
  github?: string;
  metrics?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "CrevidAi",
    description:
      "A professional video generating AI platform engineered for modern content creators to automate cinematic video production from prompts.",
    tags: ["AI", "SaaS", "Automation", "Video Generator"],
    link: "https://crevidai.com",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1783165665/localhost_3000__Nest_Hub_Max_1_cbbhtl.png",
    category: "AI & LLM",
    featured: true,
    metrics: "Automated Video Engine",
    highlights: ["Script-to-video multi-modal workflow", "High-throughput cloud rendering", "Intelligent scene pacing & voice synthesis"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "ConverseBiz",
    description:
      "A high-impact business communication & AI-driven automation platform built to streamline team workflows and customer conversion.",
    tags: ["AI", "SaaS", "Automation", "Next.js"],
    link: "https://conversebiz.com",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218639/www.conversebiz.com__oincwh.png",
    category: "SaaS & Web",
    featured: true,
    metrics: "Multi-Agent Automation",
    highlights: ["Autonomous conversational routing", "Real-time analytics and team collaboration", "Enterprise CRM integrations"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "FlashUi",
    description:
      "A custom high-performance UI component library engineered for lightning-fast modern product development with refined micro-interactions.",
    tags: ["React", "Library", "Open Source", "Design System"],
    link: "https://component-library-git-main-dawa-sherpas-projects.vercel.app",
    image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png",
    category: "Open Source",
    featured: true,
    metrics: "Design System Architecture",
    highlights: ["Accessible and fully composable components", "Zero-runtime CSS overhead with custom tokens", "Interactive live documentation hub"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "Pic2Ans",
    description:
      "AI-powered intelligence system that extracts questions and formulas from uploaded images using high-accuracy OCR and answers with LLM reasoning.",
    tags: ["AI", "OCR", "LLM", "Vision"],
    link: "https://pic2ans.vercel.app",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218635/pic2ans.vercel.app__o8m4sr.png",
    category: "AI & LLM",
    featured: true,
    metrics: "OCR + LLM Pipeline",
    highlights: ["Visual document text & formula extraction", "Step-by-step mathematical & conceptual reasoning", "Optimized sub-second inference pipeline"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "Mugic",
    description:
      "A free, ad-free Android music player focused on instant song discovery, low-latency playback, smart recommendations, and offline caching.",
    tags: ["Android", "Music", "AI Recommendations", "Open Source"],
    link: "https://mugic-app.vercel.app/",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1782746257/mugic-app.vercel.app__x14k2j.png",
    category: "Deep Learning & Tools",
    featured: true,
    metrics: "Ad-Free / Offline First",
    highlights: ["On-device intelligent recommendation algorithms", "No login required, complete privacy focus", "Adaptive audio equalization engine"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "EchoFlow AI",
    description:
      "Real-time bidirectional voice-to-voice AI agent delivering hyper-natural human conversational interaction with ultra-low acoustic latency.",
    tags: ["AI", "Voice", "LLM", "WebSocket"],
    link: "https://echo-flow-ai.vercel.app/",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771219166/echo-flow-ai.vercel.app__zcyeoj.png",
    category: "AI & LLM",
    featured: true,
    metrics: "<500ms Voice Latency",
    highlights: ["Full-duplex WebSocket audio streaming", "Interruption handling & natural pause detection", "Dynamic personality context switching"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "Nepali Handwriting OCR",
    description:
      "A CRNN-based deep learning architecture built from scratch for recognizing complex Devanagari handwritten scripts with high fidelity.",
    tags: ["Deep Learning", "OCR", "Python", "PyTorch"],
    link: "https://github.com/dawasherpa-ui",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218633/colab.research.google.com_github_dawasherpa-ui_Nepali-Handwriting-Recognition-CRNN-OCR-Model_blob_main_Untitled0.ipynb_i7asld.png",
    category: "Deep Learning & Tools",
    featured: false,
    highlights: ["Convolutional Recurrent Neural Network (CRNN) model", "CTC loss optimization for unaligned text", "Custom Devanagari character tokenization"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "VoteHub",
    description:
      "A real-time voting & decision-support platform designed to help communities make data-backed consensus decisions without manipulation.",
    tags: ["React", "Firebase", "Realtime", "Tailwind"],
    link: "https://votehub-rho.vercel.app",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218649/votehub-rho.vercel.app__pef54w.png",
    category: "SaaS & Web",
    featured: false,
    highlights: ["Live WebSocket poll synchronization", "Anti-sybil and duplicate voting protections", "Visual demographic breakdown graphs"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "Multi Dashboard",
    description: "A centralized CMS and monitoring suite that controls content, analytics, and deployments across multiple distributed web applications.",
    tags: ["CMS", "Dashboard", "Management", "Next.js"],
    link: "https://github.com/",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218860/image_original_1_bciigo.png",
    category: "SaaS & Web",
    featured: false,
    highlights: ["Multi-tenant database schema", "Role-based authorization matrix", "Unified media management"],
    github: "https://github.com/dawasherpa-ui",
  },
  {
    title: "ChatBot",
    description: "Enterprise conversational agent utilizing LangChain, Chroma DB vector store, and OpenAI embeddings for grounded internal knowledge retrieval.",
    tags: ["AI", "LangChain", "OpenAI", "ChromaDB"],
    link: "https://github.com/dawasherpa-ui/chatbot.git",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218634/github.com_dawasherpa-ui_chatbot_irytmv.png",
    category: "AI & LLM",
    featured: false,
    highlights: ["Semantic document chunking & vector search", "Hallucination reduction with strict citations", "Persistent session memory buffering"],
    github: "https://github.com/dawasherpa-ui/chatbot.git",
  },
  {
    title: "Scrapping Bot",
    description: "High-volume asynchronous web scraper built with Python to harvest, clean, and enrich real estate leads at massive scale.",
    tags: ["Python", "Automation", "Scraping", "Data Pipeline"],
    link: "https://github.com/dawasherpa-ui/FastPeopleScraper",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218632/github.com_dawasherpa-ui_FastPeopleScraper_fxrjsd.png",
    category: "Deep Learning & Tools",
    featured: false,
    highlights: ["Asynchronous worker queues", "Automated proxy rotation and CAPTCHA bypass", "Structured CSV/JSON data pipeline exports"],
    github: "https://github.com/dawasherpa-ui/FastPeopleScraper",
  },
  {
    title: "Instagram UnFollower Bot",
    description:
      "Automated growth and audience management utility simulating human interaction rhythms to maintain clean following ratios safely.",
    tags: ["Python", "Automation", "Bot", "APIs"],
    link: "https://github.com/dawasherpa-ui/Instagram-Unfollower",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218633/github.com_dawasherpa-ui_Instagram-Unfollower_bubt46.png",
    category: "Deep Learning & Tools",
    featured: false,
    highlights: ["Smart heuristic rate limiting", "Whitelist protection for priority accounts", "Comprehensive execution logging"],
    github: "https://github.com/dawasherpa-ui/Instagram-Unfollower",
  },
  {
    title: "Dot Domain",
    description: "Ultra-fast domain availability and DNS lookup tool providing instant WHOIS records and multi-TLD extension pricing comparisons.",
    tags: ["Tool", "Domain", "Utility", "API"],
    link: "https://dot-domain.vercel.app/",
    image: "https://res.cloudinary.com/djt69tcer/image/upload/v1771218632/dot-domain.vercel.app__emsv7j.png",
    category: "SaaS & Web",
    featured: false,
    highlights: ["Concurrent multi-registry WHOIS querying", "Real-time suggestion generator", "Responsive lightweight interface"],
    github: "https://github.com/dawasherpa-ui",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Confidential (Remote)",
    logo: "/work/secret.png",
    position: "Software Engineer",
    description:
      "Contributing to a high-impact confidential project, focusing on scalable architecture and advanced problem-solving.",
    years: "2026 - Present",
  },
  {
    company: "Zylux IT Solution",
    logo: "/work/zylux.png",
    position: "Full Stack Developer",
    description:
      "Building production-grade systems, dashboards, automation tools, and client projects.",
    years: "Sept, 2024 - Present",
  },
  {
    company: "Nepal Media Network",
    logo: "/work/nepalmedia.png",
    position: "Full Stack Developer",
    description:
      "Developing internal tools, automation workflows, and digital solutions for Nepal Media Network.",
    years: "2025 - Present",
  },
  {
    company: "WebX",
    logo: "/work/webx.svg",
    position: "FullStack Developer",
    description:
      "Built CMS, eCommerce systems, dashboards and handled server deployments.",
    years: "Mar, 2024 - Sept, 2024",
  },
  {
    company: "Freelance",
    logo: "/work/freelance.jpg",
    position: "Freelance Developer",
    description:
      "Delivered AI tools, automation systems, and full-stack solutions for clients worldwide.",
    years: "Ongoing",
  },
  {
    company: "Self Learning",
    logo: "/work/self.jpeg",
    position: "Self-Taught Developer",
    description:
      "Continuously expanding skills in AI, machine learning, automation, and full-stack development.",
    years: "Ongoing",
  },
];

export const VENTURES = [
  { 
    name: "WebDev", 
    role: "Teaching Web Development",
    image: "/ventures/webdev.png",
    link: "https://www.facebook.com/profile.php?id=100095249200398"
  },
  { 
    name: "ConverseBiz", 
    role: "SaaS AI Startup",
    image: "/ventures/conversebiz.png",
    link: "https://www.instagram.com/conversebiz/" 
  },
  { 
    name: "BizzNepal", 
    role: "Business News",
    image: "/ventures/bizznepal.png",
    link: "https://www.instagram.com/bizznepal_/" 
  },
  { 
    name: "It's Me Dawa", 
    role: "Digital Content",
    image: "/ventures/itmedawa.png",
    link: "https://www.instagram.com/itsmedawa_/" 
  },
  {
    name: "Maya Grung",
    role: "AI Persona & Influencer",
    image: "/ventures/mayagrung.png",
    link: "https://www.instagram.com/mayagrung_/"
  },
  {
    name: "Aura Editz",
    role: "Content Posting",
    image: "/ventures/auraeditz.png",
    link: "https://www.instagram.com/aura.editz8_/"
  },
  {
    name: "ItzMe Dawa",
    role: "Digital Content",
    image: "/ventures/itzmedawa.png",
    link: "https://www.instagram.com/itzme_dawa/"
  },
  {
    name: "Humble Chamling",
    role: "Boxings Content Posting",
    image: "/ventures/humble.png",
    link: "https://www.instagram.com/humblechamling/"
  },
  {
    name: "MochiBeshon",
    role: "Motivational Content Posting",
    image: "/ventures/mochi.png",
    link: "https://www.instagram.com/mochibeshon__/"
  },
  {
    name: "IGClipTV",
    role: "Movie Clips Posting",
    image: "/ventures/igcliptv.png",
    link: "https://www.instagram.com/igcliptv/"
  }
];
