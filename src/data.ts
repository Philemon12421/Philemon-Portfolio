import { 
  Code2, 
  Palette, 
  Megaphone, 
  Wrench, 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram,
  Download,
  Terminal,
  Braces,
  Atom,
  Coffee,
  Layout,
  Cpu,
  Globe,
  Image as ImageIcon,
  PenTool,
  Video,
  Scissors,
  Search,
  TrendingUp,
  Table,
  FileText,
  Presentation,
  GitBranch
} from 'lucide-react';

export const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const hero = {
  name: "Philemon Osei Kusi",
  title: "Software Engineer",
  subtitle: "& Digital Creator",
  tagline: "Building impactful digital experiences through clean code, creative design, and purposeful technology.",
  badge: "Open to new opportunities",
  cta: [
    { name: "View Projects", href: "#projects", primary: true },
    { name: "Contact Me", href: "#contact", primary: false },
    { name: "Download CV", href: "https://drive.google.com/file/d/1mNDSY_0ftTjxHHngWGTsqUc8IKFWZFy9/view?usp=drive_fs&userstoinvite=%22%22", primary: false, icon: Download },
  ],
  profileImage: "src/components/done2.png",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "3+", label: "Industries Served" },
  ],
};

export const about = {
  content: "Aspiring Computer Science undergraduate at KNUST with strong skills in web development, digital media, and content creation. I build websites, design digital content, and solve real-world problems using technology — driven by curiosity and a commitment to craft.",
};

export const skillGroups = [
  {
    title: "Programming & Development",
    icon: Code2,
    items: [
      { name: "Python", icon: Terminal },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Atom },
      { name: "Java", icon: Coffee },
      { name: "HTML & CSS", icon: Layout },
      { name: "Linux", icon: Cpu },
      { name: "WordPress", icon: Globe },
      { name: "Git & GitHub", icon: GitBranch },
    ],
    color: "bg-blue-50 text-blue-700 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    title: "Design & Media",
    icon: Palette,
    items: [
      { name: "Adobe Photoshop", icon: ImageIcon },
      { name: "Illustrator", icon: PenTool },
      { name: "Canva", icon: Palette },
      { name: "Premiere Pro", icon: Video },
      { name: "CapCut", icon: Scissors },
    ],
    color: "bg-violet-50 text-violet-700 border-violet-100",
    iconBg: "bg-violet-100",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    items: [
      { name: "SEO Basics", icon: Search },
      { name: "Social Media Ads", icon: TrendingUp },
      { name: "YouTube Optimization", icon: Youtube },
    ],
    color: "bg-amber-50 text-amber-700 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    title: "Tools & Productivity",
    icon: Wrench,
    items: [
      { name: "Microsoft Excel", icon: Table },
      { name: "Word", icon: FileText },
      { name: "PowerPoint", icon: Presentation },
    ],
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-100",
  },
];

export const experiences = [
  {
    role: "Freelance Digital Content Creator",
    period: "2019 – Present",
    company: "Self-employed",
    details: [
      "Designed graphics, videos, and animated ads for clients",
      "Built and managed WordPress websites with custom themes",
      "Created YouTube thumbnails and complete branding packages",
      "Consulted on digital strategy for small businesses",
    ],
  },
  {
    role: "Digital Media Assistant",
    period: "2021 – 2023",
    company: "Queens Enterprise",
    details: [
      "Designed marketing visuals for print and digital channels",
      "Supported and executed digital advertising campaigns",
      "Managed social media content calendar and scheduling",
    ],
  },
  {
    role: "ICT & Creative Arts Teacher",
    period: "2020 – 2021",
    company: "Education Sector",
    details: [
      "Taught coding fundamentals and design basics to students",
      "Developed interactive learning materials and lesson plans",
      "Integrated technology into creative arts curriculum",
    ],
  },
];

export const education = [
  {
    degree: "BSc Computer Science",
    institution: "KNUST",
    period: "In Progress",
  },
  {
    degree: "WASSCE – General Science",
    institution: "Tepa Senior High School",
    period: "Completed",
  },
];

export const certifications = [
  "Graphic Design Certificate",
  "Social Media Management Diploma",
  "English Proficiency Certificate",
  "AI Career Essentials Certificate",
];

export const projects = [
  {
    title: "DTC QR Code",
    category: "Web App",
    description: "A sleek QR code generator with custom styling and instant download.",
    video: "src/components/dtc -qrcode.gif",
    link: "https://dtc-qrcode.vercel.app",
    tags: ["React", "Vercel"],
  },
  {
    title: "HiSend",
    category: "File Sharing",
    description: "This is a saas tool  with a clean, minimal interface.",
    video: "src/components/hisend.gif",
    link: "https://hisend.vercel.app",
    tags: ["JavaScript", "WebRTC"],
  },
  {
    title: "iSeek",
    category: "Search & Discovery",
    description: "A smart search and discovery tool built for speed and precision.",
    video: "src/components/iseek.gif",
    link: "https://iseek.vercel.app",
    tags: ["React", "API"],
    inProgress: true,
  },
  {
    title: "Totti Tools",
    category: "Developer Utilities",
    description: "A collection of handy developer tools in one clean dashboard.",
    video: "src/components/totti tools.gif",
    link: "https://tottti.vercel.app",
    tags: ["React", "Utilities"],
  },
];

export const languages = [
  { name: "JavaScript", level: "Advanced", pct: 88 },
  { name: "Python", level: "Intermediate", pct: 65 },
  { name: "React", level: "Intermediate", pct: 70 },
  { name: "Java", level: "Intermediate", pct: 60 },
  { name: "HTML & CSS", level: "Advanced", pct: 92 },
  { name: "Linux", level: "Intermediate", pct: 62 },
];

export const qualities = [
  "Creative Thinker",
  "Detail-Oriented",
  "Fast Learner",
  "Strong Communicator",
  "Adaptive",
  "Problem Solver",
];

export const contactDetails = {
  phone: "+233592063645",
  email: "philemonkusi292@gmail.com",
  location: "Kumasi, Ghana",
  socials: [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "YouTube", href: "https://youtube.com", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  ],
};
