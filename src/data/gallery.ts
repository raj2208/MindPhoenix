export type Album = {
  slug: string;
  title: string;
  description?: string;
  photos: { src: string; caption?: string }[];
};

export const albums: Album[] = [
  {
    slug: "arunachal-pradesh",
    title: "Arunachal Pradesh",
    description: "Preparing Arunachal Pradesh for its first IndiaSkills Competition.",
    photos: Array.from({ length: 21 }, (_, i) => ({
      src: `/images/gallery-arunachal-${i + 1}.jpg`,
    })),
  },
  {
    slug: "awards",
    title: "Awards",
    description: "Recognition for MPASL and its team.",
    photos: Array.from({ length: 14 }, (_, i) => ({
      src: `/images/gallery-awards-${i + 1}.jpg`,
    })),
  },
  {
    slug: "indiaskills-2025-26",
    title: "IndiaSkills Competition 2025-26",
    description: "Flag-off ceremony, regional competition and the 2025 conclave.",
    photos: [
      { src: "/images/gallery-isc2526-1.jpg", caption: "Flag Off Ceremony" },
      { src: "/images/gallery-isc2526-2.jpg", caption: "Conclave 2025" },
    ],
  },
  {
    slug: "indiaskills-2024",
    title: "IndiaSkills Competition 2024",
    description: "MPASL organised IndiaSkills events for the Government of Karnataka.",
    photos: [{ src: "/images/gallery-isc24-1.jpg", caption: "Flag off Ceremony" }],
  },
  {
    slug: "national-competition",
    title: "National Competition",
    description: "Opening ceremony, arrival day and competition days.",
    photos: [{ src: "/images/gallery-national-1.jpg", caption: "Opening Ceremony" }],
  },
  {
    slug: "bsvt-inauguration",
    title: "BSVT Inauguration Ceremony",
    description:
      "The inauguration of the Bharath School of Vertical Transportation, attended by MPASL as turnkey partner.",
    photos: [
      { src: "/images/gallery-bsvt-1.jpg" },
      { src: "/images/gallery-bsvt-2.jpg" },
      { src: "/images/gallery-bsvt-x22.jpg" },
      { src: "/images/gallery-bsvt-x23.jpg" },
      { src: "/images/gallery-bsvt-x24.jpg" },
      { src: "/images/gallery-bsvt-x26.jpg" },
      { src: "/images/gallery-bsvt-x27.jpg" },
      { src: "/images/gallery-bsvt-x28.jpg" },
      { src: "/images/gallery-bsvt-x29.jpg" },
      { src: "/images/gallery-bsvt-x31.jpg" },
    ],
  },
  {
    slug: "project-hope",
    title: "Project Hope",
    description:
      "An initiative led by Capt. Kaustav Nath supporting the transgender community with livelihood skills such as dairy farming.",
    photos: Array.from({ length: 7 }, (_, i) => ({
      src: `/images/gallery-hope-${i + 1}.jpg`,
    })),
  },
  {
    slug: "msdc-skill-center-inauguration",
    title: "MSDC Skill Center Inauguration",
    photos: [
      { src: "/images/gallery-msdc-1.jpg", caption: "Lt. Gen. Dr. Venkatesh, VC, Manipal University" },
      { src: "/images/gallery-msdc-2.jpg", caption: "Brig. Dr. S. S. Pabla, Chairman, MSDC" },
      { src: "/images/gallery-msdc-3.jpg", caption: "Col. Santosh Kumar, Director, NCVET" },
      { src: "/images/gallery-msdc-4.jpg", caption: "Dr. N. S. Kalsi, IAS (Retd.), inaugurates the MSDC Skill Center" },
      { src: "/images/gallery-msdc-5.jpg", caption: "Dr. Kalsi inaugurates the MSDC EV Center" },
    ],
  },
];
