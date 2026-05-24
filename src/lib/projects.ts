export type Project = {
  slug: string;
  title: string;
  description: string;
  category: ("UI/UX" | "Web" | "Mobile" | "Backend" | "Vibe Code")[];
  year: string;
  role: string;
  duration: string;
  tags: string[];
  icon: string; // emoji or short label fallback
  liveUrl: string | null;
  githubUrl: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "order-system",
    title: "Real-Time Order System",
    description: "Distributed order processing with live WebSocket status streaming across containerized services.",
    category: ["Backend"],
    year: "2025",
    role: "Product & Interface Design",
    duration: "8 weeks",
    tags: ["Dashboard", "Realtime", "B2B"],
    icon: "OS",
    liveUrl: "https://krishna-thakur.app",
    githubUrl: "https://github.com/iShinzoo/orderSystem",
    featured: true,
  },
  {
    slug: "pump-flawk",
    title: "Pump Flawk",
    description:
      "A memecoin launchpad platform that enables users to create, launch, and manage their own memecoins on-chain.",
    category: ["Web"],
    year: "2025",
    role: "Blockchain & Full Stack Developer",
    duration: "2 Months",
    tags: ["Solidity", "Next.js", "Hardhat", "RainbowKit", "Tailwind CSS"],
    icon: "/pumpMock.png",
    liveUrl: "https://pumpflawk.vercel.app/",
    githubUrl: "https://github.com/iShinzoo/pump.flawk",
    featured: true,
  },

  {
    slug: "buy-me-token",
    title: "Buy Me Token",
    description:
      "A decentralized tipping platform leveraging Ethereum smart contracts for secure blockchain-based payments.",
    category: ["Web"],
    year: "2025",
    role: "Blockchain Developer",
    duration: "1 Month",
    tags: ["Solidity", "Next.js", "Hardhat", "RainbowKit", "Tailwind CSS"],
    icon: "/BuyMeMock.png",
    liveUrl: "https://buy-me-token.vercel.app/",
    githubUrl: "https://github.com/iShinzoo/BuyMeToken",
  },

  {
    slug: "supply-chain-dapp",
    title: "Supply Chain Management DApp",
    description:
      "A blockchain-powered supply chain solution ensuring tamper-proof shipment tracking and transparent record management.",
    category: ["Web"],
    year: "2025",
    role: "Blockchain Developer",
    duration: "1 Month",
    tags: ["Solidity", "Next.js", "RainbowKit", "Ethers.js", "Hardhat"],
    icon: "/images/projects/5.png",
    liveUrl: null,
    githubUrl: "https://github.com/iShinzoo/SupplyChainDapp",
  },

  {
    slug: "cry-dape-svg",
    title: "Cry Dape SVG",
    description:
      "An NFT minting platform allowing users to generate and mint unique algorithmically generated SVG NFTs.",
    category: ["Web"],
    year: "2024",
    role: "Smart Contract Developer",
    duration: "1 Month",
    tags: ["Solidity", "ERC-721", "Next.js", "RainbowKit", "Vercel"],
    icon: "/images/projects/CdpMock.png",
    liveUrl: "https://crydapesvgnfts.vercel.app/",
    githubUrl: "https://github.com/iShinzoo/CryDapeSVG",
    featured: true,
  },

  {
    slug: "trip-drop",
    title: "Trip Drop",
    description:
      "A peer-to-peer delivery platform enabling users to outsource deliveries and earn through community logistics.",
    category: ["Mobile"],
    year: "2024",
    role: "Android Developer",
    duration: "3 Months",
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "MVVM",
      "Hilt",
      "Coroutines",
    ],
    icon: "/tripmock.png",
    liveUrl: null,
    githubUrl: "https://github.com/iShinzoo/TripDrop",
    featured: true,
  },

  {
    slug: "transcribe-genius",
    title: "Transcribe Genius",
    description:
      "An AI-powered transcription application that extracts YouTube transcripts and generates content intelligently.",
    category: ["Mobile"],
    year: "2024",
    role: "Android Developer",
    duration: "1 Month",
    tags: ["Kotlin", "Jetpack Compose", "Retrofit", "MVVM"],
    icon: "/images/projects/tgMock.png",
    liveUrl:
      "https://github.com/iShinzoo/TranscribeGenius/releases/tag/v1.0",
    githubUrl: "https://github.com/iShinzoo/TranscribeGenius",
  },

  {
    slug: "chatter-box",
    title: "Chatter Box",
    description:
      "A realtime chat platform supporting instant messaging with Firebase Firestore for seamless data synchronization.",
    category: ["Mobile"],
    year: "2024",
    role: "Android Developer",
    duration: "1 Month",
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Firebase",
      "Hilt",
      "Coil",
    ],
    icon: "/ChatMock.png",
    liveUrl:
      "https://github.com/iShinzoo/ChattingApp/releases/tag/v1.0",
    githubUrl: "https://github.com/iShinzoo/ChattingApp",
  },

  {
    slug: "news-now",
    title: "News Now",
    description:
      "A modern news application delivering realtime global updates with clean UI and fast API integration.",
    category: ["Mobile"],
    year: "2024",
    role: "Android Developer",
    duration: "2 Weeks",
    tags: ["Kotlin", "Jetpack Compose", "Hilt", "Retrofit"],
    icon: "NewsMock.png",
    liveUrl:
      "https://github.com/iShinzoo/NewsNow_app/releases/tag/V1.0",
    githubUrl: "https://github.com/iShinzoo/NewsNow_app",
  },

  {
    slug: "song-recommendation",
    title: "Song Recommendation",
    description:
      "A machine learning-based song recommendation system using facial emotion recognition and AI-driven suggestions.",
    category: ["Web"],
    year: "2024",
    role: "ML Developer",
    duration: "1 Month",
    tags: ["Python", "OpenCV", "Pandas", "TensorFlow"],
    icon: "/images/projects/5.png",
    liveUrl: null,
    githubUrl: "https://github.com/iShinzoo/SongRecommendation",
  },

  {
    slug: "Student Management System",
    title: "Student Management System",
    description:
      "A full-stack student management application for educators and administrators can manage student profiles, track academic performance, add subject marks, and view analytics.",
    category: ["Web", "Backend"],
    year: "2024",
    role: "Full Stack Developer",
    duration: "1 Month",
    tags: ["Golang", "Gin", "Next.js", "Postgres", "Tailwind CSS"],
    icon: "SM",
    liveUrl: null,
    githubUrl: "https://github.com/iShinzoo/StudentManagement",
  },

  {
    slug: "Ethara",
    title: "Ethara",
    description:
      "A full-stack team task management application built with a Go backend and a Next.js frontend.",
    category: ["Web", "Backend"],
    year: "2024",
    role: "Full Stack Developer",
    duration: "1 Month",
    tags: ["Golang", "Gin", "Next.js", "Postgres", "Tailwind CSS"],
    icon: "TM",
    liveUrl: "https://responsible-vitality-production-7405.up.railway.app/login",
    githubUrl: "https://github.com/iShinzoo/ethara",
  },

  {
    slug: "Financial Backend API",
    title: "Financial Backend API",
    description: "A production-ready backend system supporting authentication, role-based access control, financial record management, and analytics.",
    year: "2024",
    role: "Backend Developer",
    duration: "1 Month",
    tags: ["Golang", "Gin", "Postgres", "JWT", "Clean Architecture"],
    icon: "FBA",
    liveUrl: null,
    githubUrl: "https://github.com/iShinzoo/finance-backend",
    category: ["Backend"]
  },
];
