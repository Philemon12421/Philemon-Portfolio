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
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
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
  Presentation
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
  title: "Software Engineer | Digital Creator",
  tagline: "Passionate about technology, digital media, and building impactful digital experiences.",
  cta: [
    { name: "View Projects", href: "#projects", primary: true },
    { name: "Contact Me", href: "#contact", primary: false },
    { name: "Download CV", href: "/cv.pdf", primary: false, icon: Download },
  ],
  profileImage: "src/components/done2.png",
};

export const about = {
  content: "Aspiring Computer Science undergraduate at KNUST with strong skills in web development, digital media, and content creation. Experienced in building websites, designing digital content, and solving real-world problems using technology.",
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
      { name: "HTML", icon: Layout },
      { name: "CSS", icon: Layout },
      { name: "Linux", icon: Cpu },
      { name: "WordPress", icon: Globe },
    ],
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Design & Media",
    icon: Palette,
    items: [
      { name: "Adobe Photoshop", icon: ImageIcon },
      { name: "Illustrator", icon: PenTool },
      { name: "Canva", icon: Palette },
      { name: "Adobe Premiere Pro", icon: Video },
      { name: "CapCut", icon: Scissors },
    ],
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    items: [
      { name: "SEO Basics", icon: Search },
      { name: "Social Media Ads", icon: TrendingUp },
      { name: "YouTube Optimization", icon: Youtube },
    ],
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Microsoft Excel", icon: Table },
      { name: "Word", icon: FileText },
      { name: "PowerPoint", icon: Presentation },
    ],
    color: "bg-green-50 text-green-600 border-green-100",
  },
];

export const experiences = [
  {
    role: "Freelance Digital Content Creator",
    period: "2019 - Present",
    company: "Self-employed",
    details: [
      "Designed graphics, videos, and animated ads",
      "Built and managed WordPress websites",
      "Created YouTube thumbnails and branding assets",
    ],
  },
  {
    role: "Digital Media Assistant",
    period: "2021 - 2023",
    company: "Queens Enterprise",
    details: [
      "Designed marketing visuals",
      "Supported digital campaigns",
    ],
  },
  {
    role: "ICT & Creative Arts Teacher",
    period: "2020 - 2021",
    company: "Education Sector",
    details: [
      "Taught coding and design basics",
      "Created interactive learning materials",
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
    degree: "WASSCE (General Science)",
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
    category: "Websites",
    image: "src/components/dtc -qrcode.gif",
    link: "https://dtc-qrcode.vercel.app",
  },
  {
    title: "HiSend",
    category: "File Sharing",
    image: "src/components/hisend.gif",
    link: "https://hisend.vercel.app",
  },
  {
    title: "iSeek",
    category: "Search & Discovery",
    image: "src/components/iseek.gif",
    link: "https://iseek.vercel.app",
    inProgress: true,
  },
  {
    title: "Totti Tools",
    category: "Developer Utilities",
    image: "src/components/totti tools.gif",
    link: "https://tottti.vercel.app",
  },
];

export const languages = [
  { name: "JavaScript", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "HTML & CSS", level: "Advanced" },
  { name: "Linux", level: "Intermediate" },
];

export const qualities = [
  "Creative",
  "Detail-oriented",
  "Fast learner",
  "Strong communicator",
  "Adaptive",
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
