export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "empowering-lives-through-skill-development-project-hope-and-special-projects-under-pmkvy",
    title:
      "Empowering Lives Through Skill Development: Project Hope and Special Projects under PMKVY",
    excerpt:
      "Two initiatives led by Capt. Kaustav Nath open up livelihoods for the transgender community, persons with disabilities and women.",
    date: "2024-08-12",
    image: "/images/blog-1.jpg",
    body: [
      {
        paragraphs: [
          "Skill development only changes lives when it reaches the people who have been left out. Two initiatives led by Capt. Kaustav Nath and MPASL are built around exactly that idea.",
        ],
      },
      {
        heading: "Project Hope",
        paragraphs: [
          "Project Hope supports the transgender community with practical livelihood skills such as dairy farming and animal rearing, so that participants can start earning on their own terms.",
          "Beyond income, the project aims to bring economic independence, a sense of belonging and greater social acceptance. For many participants it is a lifeline of opportunity.",
        ],
      },
      {
        heading: "Special Projects under PMKVY",
        paragraphs: [
          "A pilot under the NSDC Skill Development Programme (PMKVY 2.0), these special projects work with Cheshire Homes India Coorg, Society for Child Development and Amogh Trust & Seva in Action. They serve persons with disabilities and women.",
          "Training covers handicrafts and carpets, tourism, retail and electronics, preparing participants for roles such as retail sales associate and manual soldering technician. Paper, cloth and plastic are recycled into marketable products in line with the Swachh Bharat Abhiyan.",
        ],
      },
      {
        heading: "Local, self-reliant, sustainable",
        paragraphs: [
          "Both efforts connect to the principles of Vocal for Local and Atmanirbhar Bharat, and to the Save Soil movement. They show that development succeeds when opportunity is open to everyone.",
        ],
      },
    ],
  },
  {
    slug: "celebrating-the-inauguration-of-bsvt-mpasls-role-in-shaping-the-future-of-vertical-transportation-training",
    title:
      "Celebrating the Inauguration of BSVT: MPASL's Role in Shaping the Future of Vertical Transportation Training",
    excerpt:
      "On 11 July, the Bharath School of Vertical Transportation opened its doors, with MPASL involved from the very first step.",
    date: "2024-07-15",
    image: "/images/blog-2.jpg",
    body: [
      {
        paragraphs: [
          "On 11 July, the Bharath School of Vertical Transportation Training Pvt Ltd (BSVT) was inaugurated in Bengaluru. MPASL was involved from the start, from planning and registration to shortlisting infrastructure and designing the diploma programmes.",
        ],
      },
      {
        heading: "A first of its kind",
        paragraphs: [
          "Karnataka Labour Minister Santosh Lad and other dignitaries attended the ceremony. The Minister praised BSVT for offering a diploma course in vertical transportation, the first of its kind in the country, and encouraged partnerships that improve employment.",
        ],
      },
      {
        heading: "What BSVT offers",
        paragraphs: [
          "Courses include a diploma in vertical transportation engineering, upskilling programmes in maintenance and testing & commissioning, lift installation, modernisation and safety compliance, escalator and moving walk training, and rescue operation training for security personnel.",
          "Students also get internship and job opportunities with partner companies.",
        ],
      },
      {
        heading: "MPASL's role",
        paragraphs: [
          "As the authorised agency for the Capital Goods Strategic Skill Council, MPASL implements vocational training across institutes in India and will continue to support the school.",
        ],
      },
    ],
  },
  {
    slug: "revitalizing-vocational-education-in-india-the-role-of-institutions-such-as-bsvt-and-mpasl-in-addressing-skill-gaps",
    title:
      "Revitalizing Vocational Education in India: The Role of Institutions such as BSVT and MPASL in Addressing Skill Gaps",
    excerpt:
      "Why vocational education matters for India's growing economy, and how institutions are closing the skill gap.",
    date: "2024-06-20",
    image: "/images/blog-3.jpg",
    body: [
      {
        paragraphs: [
          "As India's economy grows and diversifies, vocational education is essential to closing the workforce skill gap.",
        ],
      },
      {
        heading: "The challenge",
        paragraphs: [
          "Academic education is often prioritised, vocational training is seen as less prestigious, curricula do not always match industry needs, many institutes lack infrastructure and there are too few qualified instructors. As a result, many graduates are not ready for the job market.",
        ],
      },
      {
        heading: "How MPASL and BSVT help",
        paragraphs: [
          "MPASL, founded by Capt. Kaustav Nath, is the authorised agency for the Capital Goods Strategic Skill Council (CGSSC), which oversees vocational training across institutes nationwide.",
          "Its partner, the Bharath School of Vertical Transportation Training (BSVT), offers diploma courses for students with a PUC science or ITI background, covering the design, installation, maintenance and repair of elevators, escalators and other vertical transportation systems. The curriculum is updated to industry standards and taught by faculty with industry experience.",
        ],
      },
      {
        heading: "The way forward",
        paragraphs: [
          "Institutions like these improve employability, ease skill shortages and open careers in elevator manufacturing, maintenance and building management. Continued investment in vocational education is essential.",
        ],
      },
    ],
  },
];
