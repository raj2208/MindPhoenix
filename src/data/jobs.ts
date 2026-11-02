export type Job = {
  title: string;
  location: string;
  type: string;
  experience: string;
  education: string;
  summary: string;
  skills: string[];
};

export const jobs: Job[] = [
  {
    title: "Project Manager (Dy. PMU Lead), Public Sector Operations",
    location: "Bengaluru",
    type: "Full-time, on-site",
    experience: "20+ years in core operations management (airline or airport operations preferred)",
    education: "Graduate degree (B.Sc., B.E., B.Tech or equivalent)",
    summary:
      "Lead operational planning and readiness for government and public sector projects, including ORAT frameworks, multi-agency coordination, vendor and SLA oversight, safety and compliance audits and staff training. Fluency in Kannada, English and Hindi is mandatory.",
    skills: ["ORAT", "Vendor & SLA oversight", "Compliance audits", "Kannada · English · Hindi"],
  },
  {
    title: "Data Analyst / Business Data Analyst",
    location: "Bengaluru",
    type: "Full-time",
    experience: "2+ years in business data analysis, process engineering or systems analysis",
    education: "B.Tech / B.E. or a related quantitative field",
    summary:
      "Analyse operational data across logistics, fleet management and EV mobility, build dashboards, gather requirements and support system rollouts.",
    skills: ["SQL", "Python", "Power BI", "Jira", "Agile / Scrum"],
  },
  {
    title: "Graphic Designer & Web Content Associate",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    experience: "1–2 years; freshers may apply. A strong portfolio is mandatory",
    education: "Bachelor's degree or diploma in design or visual communication",
    summary:
      "Create visual assets, keep social media active (at least three posts daily) and update organisational websites. Fluent Kannada and English required.",
    skills: ["Adobe suite", "Canva", "Figma", "WordPress", "HTML / CSS"],
  },
  {
    title: "Junior Accountant / Accountant's Assistant",
    location: "Dairy Circle and Arekere (near IIMB), Bangalore",
    type: "Full-time",
    experience: "1–2 years, with a recommendation letter from a previous firm",
    education: "B.Com (mandatory)",
    summary:
      "Bookkeeping, invoicing, financial reporting and payroll data, with optional GST, TDS, audit and petty cash duties. Fluent Kannada, English and Hindi.",
    skills: ["Zoho Books", "Advanced Excel", "PowerPoint", "Power BI"],
  },
];
