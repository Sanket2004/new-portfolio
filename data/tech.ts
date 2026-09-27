export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

export const skills: TechItem[] = [
  { name: "Python", icon: "/images/tech/python.svg" },
  { name: "JavaScript", icon: "/images/tech/js.svg" },
  { name: "FastAPI", icon: "/images/tech/fastapi.svg" },
  {
    name: "Node.js",
    icon: "/images/tech/nodejs-light.svg",
    darkIcon: "/images/tech/nodejs-dark.svg",
  },
  { name: "React", icon: "/images/tech/react.svg" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg" },
  { name: "Tailwind CSS", icon: "/images/tech/tailwindcss.svg" },
  { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
];

export const frontendSkills: TechItem[] = [
  { name: "React", icon: "/images/tech/react.svg" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg" },
  { name: "JavaScript", icon: "/images/tech/js.svg" },
  { name: "Tailwind CSS", icon: "/images/tech/tailwindcss.svg" },
  { name: "Flutter", icon: "/images/tech/flutter.svg" },
  {
    name: "shadcn/ui",
    icon: "/images/tech/shadcn-ui-light.svg",
    darkIcon: "/images/tech/shadcn-ui-dark.svg",
  },
  { name: "Vite", icon: "/images/tech/vite.svg" },
  { name: "HTML5", icon: "/images/tech/html5.svg" },
  {
    name: "CSS",
    icon: "/images/tech/css3.svg",
  },
];

export const backendSkills: TechItem[] = [
  { name: "Python", icon: "/images/tech/python.svg" },
  { name: "Java", icon: "/images/tech/java.svg" },
  {
    name: "Node.js",
    icon: "/images/tech/nodejs-light.svg",
    darkIcon: "/images/tech/nodejs-dark.svg",
  },
  { name: "MySQL", icon: "/images/tech/mysql.svg" },
];

export const dataEngineeringSkills: TechItem[] = [
  { name: "Databricks", icon: "/images/tech/databricks.svg" },
  { name: "Python", icon: "/images/tech/python.svg" },
  { name: "MySQL", icon: "/images/tech/mysql.svg" },
  { name: "Pandas", icon: "/images/tech/pandas.svg" },
  { name: "NumPy", icon: "/images/tech/numpy.svg" },
];

export const toolsSkills: TechItem[] = [
  { name: "Git", icon: "/images/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/images/tech/github.svg",
    darkIcon: "/images/tech/github-dark.svg",
  },
  { name: "Maven", icon: "/images/tech/apachemaven.svg" },
  { name: "Gradle", icon: "/images/tech/gradle.svg" },
  {
    name: "Vercel",
    icon: "/images/tech/vercel-light.svg",
    darkIcon: "/images/tech/vercel-dark.svg",
  },
  { name: "Netlify", icon: "/images/tech/netlify.svg" },
  { name: "Docker", icon: "/images/tech/docker.svg" },
  { name: "NPM", icon: "/images/tech/npm.svg" },
];

export const skillRows: {
  direction: "left" | "right";
  category: string;
  items: TechItem[];
}[] = [
  {
    direction: "left",
    category: "Data Engineering",
    items: dataEngineeringSkills,
  },
  {
    direction: "right",
    category: "Backend",
    items: backendSkills,
  },
  {
    direction: "left",
    category: "Frontend",
    items: frontendSkills,
  },
  {
    direction: "right",
    category: "Tools & DevOps",
    items: toolsSkills,
  },
];

export const projectTech = {
  react: { name: "React", icon: "/images/tech/react.svg" },
  javascript: { name: "JavaScript", icon: "/images/tech/js.svg" },
  typescript: { name: "TypeScript", icon: "/images/tech/typescript.svg" },
  tailwindcss: { name: "Tailwind CSS", icon: "/images/tech/tailwindcss.svg" },
  vite: { name: "Vite", icon: "/images/tech/vite.svg" },
  firebase: { name: "Firebase", icon: "/images/tech/firebase.svg" },
  flutter: { name: "Flutter", icon: "/images/tech/flutter.svg" },
  dart: { name: "Dart", icon: "/images/tech/dart.svg" },
  gemini: { name: "Gemini", icon: "/images/tech/gemini.svg" },
  motion: { name: "Framer Motion", icon: "/images/tech/motion.svg" },
  mongodb: { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
  mysql: { name: "MySQL", icon: "/images/tech/mysql.svg" },
  cloudinary: { name: "Cloudinary", icon: "/images/tech/cloudinary.svg" },
  shadcnui: {
    name: "shadcn/ui",
    icon: "/images/tech/shadcn-ui-light.svg",
    darkIcon: "/images/tech/shadcn-ui-dark.svg",
  },
  jwt: {
    name: "JWT",
    icon: "/images/tech/jwt-light.svg",
    darkIcon: "/images/tech/jwt-dark.svg",
  },
  nodejs: {
    name: "Node.js",
    icon: "/images/tech/nodejs-light.svg",
    darkIcon: "/images/tech/nodejs-dark.svg",
  },
  docker: { name: "Docker", icon: "/images/tech/docker.svg" },
  framermotion: { name: "Framer Motion", icon: "/images/tech/motion.svg" },
  socketio: {
    name: "Socket.IO",
    icon: "/images/tech/socket.svg",
    darkIcon: "/images/tech/socket-dark.svg",
  },
  axios: { name: "Axios", icon: "" },
  zustand: { name: "Zustand", icon: "" },
  express: { name: "Express.js", icon: "" },
} as const;
