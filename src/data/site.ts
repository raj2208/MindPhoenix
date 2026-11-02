export const company = {
  name: "MindPhoenix Advisory Services LLP",
  shortName: "MPASL",
  tagline: "Empower. Evolve. Innovate.",
  description:
    "MPASL is a premier education partner based in Bangalore, delivering skill development, curriculum enhancement and global placement opportunities.",
  phone: "+91 8826170401",
  phoneHref: "tel:+918826170401",
  email: "sampark@phoenixconserv.in",
  careersEmail: "accounts@mpasl.in",
  headquarters: {
    label: "Headquarters",
    address:
      "9/1, Arekere Main Road, Opposite Bank of Baroda ATM, Bangalore - 560076",
    map: "https://maps.app.goo.gl/CRwA1Qca2zV5BEQ68",
  },
  registeredOffice: {
    label: "Registered Office",
    address:
      "S02, B-Block, Shantiniketan Apts, 1st Cross, Vysya Bank Colony, Arekere, Bangalore - 560076",
    map: "https://maps.app.goo.gl/jgffxGsCvdZXpUyWA",
  },
  poweredBy: { name: "Jain Technosoft", href: "https://www.mpasl.in/" },
} as const;

export const nav = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Our Projects", href: "/our-projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "X", href: "https://x.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "YouTube", href: "https://www.youtube.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
] as const;

export const stats = [
  { value: 5, suffix: "+", label: "States" },
  { value: 10, suffix: "K+", label: "Students Benefitted" },
  { value: 10, suffix: "+", label: "National and Global Business Partners" },
  { value: 28, suffix: "+", label: "Years of Average Experience" },
] as const;

export const aboutPoints = [
  "Comprehensive skill development programs",
  "Globally connected education solutions",
  "Seamless project implementation",
  "Strategic partnerships that last",
] as const;

export const whyChooseUs = [
  {
    title: "Experienced Team",
    text: "Leaders with decades of experience across government and private education.",
    icon: "users",
  },
  {
    title: "Skill Centers",
    text: "Hands-on experience building and running skill centers from the ground up.",
    icon: "building",
  },
  {
    title: "Global Partnership",
    text: "International placement and study-abroad pathways with trusted partners.",
    icon: "globe",
  },
  {
    title: "AI Integration",
    text: "AI-enabled classrooms and hiring tools that personalise learning and careers.",
    icon: "brain",
  },
] as const;

export const approach = [
  {
    title: "Operational Planning",
    text: "Clear roadmaps, timelines and ground-level execution for every skilling programme.",
    image: "/images/approach-operational.jpg",
  },
  {
    title: "Strategic Management",
    text: "Aligning institutions, industry and government schemes towards measurable outcomes.",
    image: "/images/approach-strategic.jpg",
  },
  {
    title: "Affirmative Action",
    text: "Opening skilling and livelihood opportunities for women, persons with disabilities and marginalised communities.",
    image: "/images/approach-affirmative.jpg",
  },
] as const;

export const founder = {
  name: "Capt. Kaustav Nath",
  role: "Founder",
  image: "/images/founder.jpg",
  message: [
    "MPASL was founded on a simple belief: that a mind free of fear is the starting point of all learning. Free thinking, honest collaboration and a commitment to social impact guide everything we do.",
    "We are especially proud of the work we do to support women's employment and communities that have been left behind. Skilling is not charity. It is the most dependable way to build dignity and independence.",
    "Our vision is to become the world's leading choice for education and skill development. We will get there one partnership, one learner and one step at a time.",
  ],
  traits: ["Visionary Leadership", "Expert Team", "Proven Expertise"],
} as const;

export const partners = Array.from({ length: 10 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  image: `/images/partner-${i + 1}.jpg`,
}));
