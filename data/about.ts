export interface AboutData {
  name: string;
  role: string;
  location: string;
  skills: string[];
  socialLinks: [
    { email: string },
    { github: string },
    { linkedin: string },
    { x: string },
  ];
}

export const aboutData: AboutData = {
  name: "Sanket Banerjee",

  role: "Data Engineer",

  location: "Kolkata, India",

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Git",
    "GitHub",
    "Databricks",
    "Azure",
    "REST APIs",
  ],

  socialLinks: [
    { email: "mailto:itsanketbanerjee@gmail.com" },
    { github: "https://github.com/Sanket2004" },
    { linkedin: "https://www.linkedin.com/in/itsanketbanerjee" },
    { x: "https://twitter.com/sanket__dev" },
  ],
};
