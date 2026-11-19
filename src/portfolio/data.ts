
export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ProShop",
    subtitle: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart management, and secure checkout.",
    image: "/__l5e/assets-v1/d6e7f9d5-e148-4491-b464-1fe52b42b565/social.png",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "CSS"],
    githubUrl: "https://github.com/ezadin2/proshop-demo",
  },
  {
    id: 2,
    title: "ሀሴት Delivery",
    subtitle: "Delivery Management Platform",
    description:
      "An Ethiopian delivery platform with customer booking, real-time tracking, admin analytics, and a driver operations interface.",
    image: "/__l5e/assets-v1/62c63c80-9170-47ae-b9e0-bb5d6dc5a231/quran.png",
    technologies: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "Express.js"],
    liveUrl: "https://hasset-delivery-front-end-side.onrender.com/",
    githubUrl: "https://github.com/ezadin2/Hasset_Delivery_Front-End_Side",
  },
  {
    id: 3,
    title: "Dina Mart",
    subtitle: "Complete E-commerce System",
    description:
      "A secure cross-platform shopping experience with verified Firebase authentication, product browsing, cart management, orders, and user accounts.",
    image: "/__l5e/assets-v1/f47101ba-75fb-4d40-89ed-18886edc511d/notes.png",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    liveUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Privacy Checker",
    subtitle: "Data Privacy Compliance",
    description:
      "A Streamlit tool built at INSA Summer Camp for PII scanning, anonymization, NLP entity detection, and automated compliance scoring.",
    image: "/__l5e/assets-v1/852497fc-f654-4366-b286-fb84a8c7933c/trello.png",
    technologies: ["Python", "Streamlit", "NLP", "Pandas"],
    githubUrl: "https://github.com/ezadin2",
  },
  {
    id: 5,
    title: "Audio Application",
    subtitle: "Cross-platform Audio Experience",
    description:
      "An audio-based mobile application showcasing sound features, modern UI, and responsive state management.",
    image: "/__l5e/assets-v1/514b5cbc-ca36-4459-b493-bac919f3b54c/portfolio.png",
    technologies: ["Flutter", "Firebase", "Dart", "State Management"],
    githubUrl: "https://github.com/ezadin2/Audio-player",
  },
  {
    id: 6,
    title: "Chat Application",
    subtitle: "Real-time Messaging",
    description:
      "A real-time chat application with a modern interface, user messaging, and a responsive design.",
    image: "/__l5e/assets-v1/90da794a-6606-49d8-acb1-157aed3c3e05/chatApp.png",
    technologies: ["Next.js", "Node.js", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://nextjs-setup-gilt.vercel.app/",
    githubUrl: "https://github.com/ezadin2/nextjs-setup",
  },
  {
    id: 7,
    title: "FaydaRent",
    subtitle: "Rental Marketplace",
    description:
      "A trust-first rental marketplace for Ethiopia where people find homes, vehicles and equipment from verified owners, with search by neighborhood, category and price.",
    image: "/__l5e/assets-v1/26e3519a-14e5-4426-b49f-df0d627c2c0f/techxpert.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://techxpert-rental-market-place.vercel.app/",
  },
  {
    id: 8,
    title: "Al-Qur'an Al-Kareem",
    subtitle: "Quran Reading App",
    description:
      "A Quran study companion with all 114 surahs, translations, recitations, azkar and duas, prayer times, a Ramadan tracker, hadith and bookmarks.",
    image: "/__l5e/assets-v1/0bf6f64b-b01a-40cb-9e16-2b40e01bb474/my-quran-onrender.png",
    technologies: ["React.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://my-quran.onrender.com/",
  },
  {
    id: 9,
    title: "QemerTech",
    subtitle: "Tech Education Platform",
    description:
      "An online learning platform offering industry-ready courses in web development, AI and mobile, with course listings, instructors and student sign-up.",
    image: "/__l5e/assets-v1/79e13cdd-90c0-43bc-a346-d92f438ba794/qemer.png",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://qemer-final-project.vercel.app/",
  },
  {
    id: 10,
    title: "Socialbook",
    subtitle: "Social Media Page",
    description:
      "A Facebook-style social page with stories, a post feed, events, friends sidebar and chat list.",
    image: "/__l5e/assets-v1/b6c364cc-7d71-42da-a0a1-f68f61bac2c6/qemer-fb.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ezadin2.github.io/qemer_tech_project_facebookpage/",
  },
];

export type Certificate = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate of Appreciation",
    image: "/__l5e/assets-v1/8852ce87-abef-430b-95d5-8eb3f89598f7/appr2.png",
    link: "/__l5e/assets-v1/8852ce87-abef-430b-95d5-8eb3f89598f7/appr2.png",
  },
  {
    id: 2,
    title: "Academic Achievement",
    image: "/__l5e/assets-v1/baeb82c7-6919-4e16-9021-9279a1f2335e/appre1.png",
    link: "/__l5e/assets-v1/baeb82c7-6919-4e16-9021-9279a1f2335e/appre1.png",
  },
  {
    id: 3,
    title: "Professional Certificate",
    image: "/__l5e/assets-v1/5033cd4c-ea65-4d7f-99b4-960d8709b3a8/tempo.png",
    link: "/__l5e/assets-v1/5033cd4c-ea65-4d7f-99b4-960d8709b3a8/tempo.png",
  },
  {
    id: 4,
    title: "Huawei Certificate",
    image: "/__l5e/assets-v1/1913b016-ca4e-4e0a-a50a-e262ee098605/huawe.png",
    link: "/__l5e/assets-v1/1913b016-ca4e-4e0a-a50a-e262ee098605/huawe.png",
  },
  {
    id: 5,
    title: "Cisco Certificate",
    image: "/__l5e/assets-v1/af8a7d02-03a2-4e44-a41f-82f3c9fc564f/cisco.png",
    link: "/__l5e/assets-v1/af8a7d02-03a2-4e44-a41f-82f3c9fc564f/cisco.png",
  },
  {
    id: 6,
    title: "Development Certificate",
    image: "/__l5e/assets-v1/2836fe50-62ea-41a7-a6d5-df690b9421fc/bago.png",
    link: "/__l5e/assets-v1/2836fe50-62ea-41a7-a6d5-df690b9421fc/bago.png",
  },
  {
    id: 7,
    title: "Technical Certificate",
    image: "/__l5e/assets-v1/1889fdf3-55bd-444c-97b3-6baf1a3c112f/mosq2.png",
    link: "/__l5e/assets-v1/1889fdf3-55bd-444c-97b3-6baf1a3c112f/mosq2.png",
  },
  {
    id: 8,
    title: "Oracle Certificate",
    image: "/__l5e/assets-v1/7ab7ba7e-617f-4890-b04c-010aaf83eda3/orac.png",
    link: "/__l5e/assets-v1/7ab7ba7e-617f-4890-b04c-010aaf83eda3/orac.png",
  },
];

export const resumeUrl = "/__l5e/assets-v1/f395ef53-511b-462a-a2a4-8a2bc929da3c/Ezadin_Badiru_Resume.pdf";
