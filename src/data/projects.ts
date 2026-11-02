export type Project = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "skill-olympics",
    title: "Skill Olympics",
    summary:
      "Preferred partner of the Karnataka Skill Development Corporation (KSDC) for the India Skills Competition.",
    points: [
      "Organising district and state-level IndiaSkills Competition events.",
      "Launched on 29 February 2024.",
    ],
    image: "/images/project-skill-olympics.jpg",
    featured: true,
  },
  {
    slug: "govt-of-arunachal-pradesh",
    title: "Govt. of Arunachal Pradesh",
    summary:
      "Advised the state ahead of its first-ever participation in the national IndiaSkills Competition.",
    points: [
      "Support on candidate selection and training design.",
      "Competition readiness at short notice.",
    ],
    image: "/images/gallery-arunachal-1.jpg",
  },
  {
    slug: "manipal-skill-development-center",
    title: "Manipal Skill Development Center (MSDC)",
    summary:
      "Consultancy on Skill India licences, compliance and training facility design.",
    points: [
      "Skill India licensing and regulatory compliance.",
      "Infrastructure design for training facilities.",
    ],
    image: "/images/gallery-msdc-4.jpg",
  },
  {
    slug: "bharath-school-of-vertical-transportation",
    title: "Bharath School of Vertical Transportation",
    summary:
      "India's first vocational school for elevators, escalators and vertical parking systems.",
    points: [
      "Set up with Omega Tech Lifts Assembling LLC (Dubai).",
      "International curriculum with internships and placements.",
    ],
    image: "/images/project-bsvt.jpg",
    featured: true,
  },
  {
    slug: "atomos",
    title: "Atomos (AI-enabled classrooms)",
    summary:
      "AI-integrated school management software that works well even on low internet.",
    points: [
      "Face-recognition attendance and error analysis.",
      "Personalised feedback and curriculum digitisation.",
    ],
    image: "/images/project-atomos.jpg",
    featured: true,
  },
  {
    slug: "internship-embedded-programs",
    title: "Internship Embedded UG & PG Programs (Commerce Skills)",
    summary:
      "B.Com (Accounts & Taxation), BBA (Accounts & Finance) and BBA (Digital Marketing) with internships built in.",
    points: [
      "Internships and placement opportunities.",
      "AI-enhanced curricula aligned with the National Education Policy.",
    ],
    image: "/images/project-internship.jpg",
    featured: true,
  },
  {
    slug: "door-to-dorm",
    title: "Door to Dorm – International Education",
    summary:
      "Study-abroad planning with Anaad Worldwide for Australia, the USA, the UK, Canada and the EU.",
    points: [
      "Mentorship and scholarships for low-income students.",
      "Counselling, applications, loans, visa and post-arrival support.",
    ],
    image: "/images/project-door-to-dorm.jpg",
    featured: true,
  },
  {
    slug: "proofile",
    title: "Proofile.in",
    summary:
      "A global platform for career content, scholarships, an institution directory and profile building.",
    points: [
      "News, scholarships and an institution directory.",
      "Virtual placement drives connecting candidates, colleges and companies.",
    ],
    image: "/images/project-proofile.jpg",
    featured: true,
  },
  {
    slug: "novelhire",
    title: "NovelHire",
    summary:
      "A recruitment platform for handling job descriptions and large application volumes.",
    points: [
      "AI-based interview platform with adaptive algorithms.",
      "Psychometric evaluations to match skills with roles.",
    ],
    image: "/images/service-ai.jpg",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
