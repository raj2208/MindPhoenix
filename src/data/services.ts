export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "skill-development-program-implementation",
    title: "Skill Development Program Implementation",
    summary:
      "End-to-end management of large-scale skill programmes in educational institutions.",
    details: [
      "Planning, mobilisation, delivery and reporting for skilling programmes run in institutions.",
      "Hands-on experience with government schemes such as PMKVY.",
    ],
    image: "/images/service-skill-development.jpg",
  },
  {
    slug: "building-your-bridge-to-a-brighter-future",
    title: "MPASL: Building your bridge to a brighter future",
    summary:
      "Curricula and programmes for every career stage, built with Skill India.",
    details: [
      "Working with Skill India on curriculum and programmes for each stage of a learner's career.",
      "Training and certification aligned to national standards.",
    ],
    image: "/images/service-mpasl.jpg",
  },
  {
    slug: "vocational-education-and-training",
    title: "Vocational Education and Training",
    summary:
      "NEP 2020 aligned vocational programmes with industry-relevant curricula.",
    details: [
      "Vocational programmes under NEP 2020 and specialised course design.",
      "Industry-relevant curriculum development and skill certification.",
    ],
    image: "/images/service-vocational.jpg",
  },
  {
    slug: "international-partnerships-and-placements",
    title: "International Partnerships and Placements",
    summary:
      "Study-abroad consulting and cross-border collaboration with higher-education partners.",
    details: [
      "Study-abroad consulting for students and working professionals.",
      "Collaboration with higher-education partners on international programmes and placements.",
    ],
    image: "/images/service-international.jpg",
  },
  {
    slug: "integrating-ai-in-education",
    title: "Integrating AI in education",
    summary:
      "AI classrooms, personalised learning and AI-powered hiring through ATOMO and NOVELHIRE.",
    details: [
      "AI-enabled classrooms and the ATOMO tool for personalised learning.",
      "The NOVELHIRE platform uses AI candidate sourcing to match skills with job opportunities.",
    ],
    image: "/images/service-ai.jpg",
  },
  {
    slug: "english-as-an-asset",
    title: "MPASL-TI: English as an Asset",
    summary:
      "Communication skills training and IELTS / TOEFL preparation with Tagore Institute.",
    details: [
      "An investment in Tagore Institute to offer spoken English and communication training.",
      "Preparation for English proficiency exams such as IELTS and TOEFL.",
    ],
    image: "/images/project-door-to-dorm.jpg",
  },
];

export const featuredServices = services;
