export type Language = string;
export type LanguageLevel = string;
export type Skill = string;
export type LanguageSkill = [Language, LanguageLevel];

export interface EducationItem {
  school: string;
  start: string;
  end?: string;
  city?: string;
  description?: string | string[];
}

export interface Project {
  company: string;
  title: string;
  city?: string;
  description: string | string[];
  technologies: Skill[];
  start: string;
  end?: string;
}

export interface Resume {
  bio: {
    name: string;
    dateOfBirth: Date;
    description: string | string[];
    contact: {
      email: string;
      phone: string;
      linkedIn?: string;
    };
  };
  skills: Skill[];
  projects: Project[];
  languageSkills: LanguageSkill[];
  education: EducationItem[];
}

const data: Resume = {
  bio: {
    name: "Victor Zamanian",
    dateOfBirth: new Date(1987, 1, 26),
    description: [
      "A curious and quality-focused software engineer, eager to learn new technologies and efficient worklows. Studied Interaction & Design at Umeå University, with a large focus on programming. Interests include technology, language, science, nature, sports, music, movies, gaming, etc.",
      'Strong proponent of "Clean Code", Functional Programming, as well as correct and robust software.',
    ],
    contact: {
      email: "victor.zamanian@gmail.com",
      phone: "+46762622262",
      linkedIn: "https://www.linkedin.com/in/victorzamanian/",
    },
  },
  education: [
    {
      school: 'Östra Gymnasieskolan ("high school")',
      city: "Umeå",
      start: "Fall of 2002",
      end: "Spring of 2005",
      description:
        "Nature and Sciences programme, with a special focus on mathematics and IT/programming",
    },
    {
      school: "Komvux",
      city: "Umeå",
      start: "Fall of 2005",
      description:
        "Took a few classes in Mathematics and Physics for the purpose of raising my grades to get in to University.",
    },
    {
      school: "Umeå University",
      start: "Spring of 2006",
      end: "Spring of 2017",
      description:
        "Master of Science Programme in Interaction Technology and Design Engineering",
    },
  ],
  projects: [
    {
      company: "Umeå University",
      title: "Teaching Assistant",
      start: "2009",
      end: "2016",
      description: [
        "Grading papers, holding group exercises, support during computer lab exercises.",
        "Courses include programming in C, Java, Android programming; data structures, algorithms, and algorithm complexity analysis; courses in HCI, and UX development and evaluation methodologies.",
        "This work required a lot of script automation, so it was a good opportunity to hone some shell scripting skills.",
        "It was also a great opportunity to hone debugging skills, as well as learning how to explain to others (students) at an approriate level what's wrong with their code.",
      ],
      technologies: [
        "Git",
        "Bash",
        "Teaching",
        "Interpersonal skills",
        "Debugging",
      ],
    },
    {
      company: "Codemill AB",
      title: 'Raketech Group Holding – TV Sports Guide ("TVMatchen")',
      start: "Summer of 2017",
      end: "Fall of 2017",
      description:
        'Development of new mobile app "TVMatchen" for iOS and Android.',
      technologies: ["Android", "iOS", "Java", "Objective-C", "Git"],
    },
    {
      company: "Codemill AB",
      title: "Västerbottens-Kuriren – front-end developer consultant",
      start: "August 2017",
      end: "February 2018",
      description:
        "Front-end developer for the largest local newspaper's new online news publishing platform.",
      technologies: [
        "React",
        "HTML5",
        "CSS",
        "Sass",
        "NodeJS",
        "JavaScript",
        "TypeScript",
        "Git",
      ],
    },
    {
      company: "Codemill AB",
      city: "Umeå, Sweden / Munich, Germany",
      title: "ProSiebenSat.1 MEDIA SE - Unified Content Project",
      start: "February 2018",
      end: "October 2019",
      description: [
        "Large infrastructure modernisation initiative with a large mass media company, replacing their MAM system to create a new primary system for digital management and distribution.",
        "This work mostly involved writing web front-end in Vue, but had many moving parts that had to be understood in order to cooperate with back-end business logic etc.",
      ],
      technologies: [
        "Git",
        "Vue 2",
        "Python",
        "Cantemo Portal",
        "Vidispine",
        "Helm",
        "Docker",
      ],
    },
    {
      company: "Codemill AB",
      title: 'Proof of Concept – Accurate Video Comments/"Review"',
      start: "October 2019",
      end: "November 2019",
      description: [
        "Development from scratch of a simple video review product: leave comments on specific frames/time stamps or time spans in a video.",
        'This was the precursor/prototype to what would later be "Accurate Video Review" developed for Box.com. (See other project.)',
      ],
      technologies: [
        "React",
        "Preact",
        "TypeScript",
        "Yarn",
        "Webpack",
        "ESLint",
        "React Hooks",
        "Redux",
      ],
    },
    {
      company: "Codemill AB",
      title: "Accurate Video: Validate",
      start: "October 2019",
      end: "May 2021",
      description:
        "Development of a web-based application for video/content verification/quality control with frame-accurate video support, as well as an in-house Custom Elements component library build using Lit.",
      technologies: [
        "Custom Elements",
        "Angular",
        "Lit",
        "SCSS",
        "PostCSS",
        "TypeScript",
        "Video",
        "Broadcasting",
        "Media",
        "Web API",
        "Git",
      ],
    },
    {
      company: "Codemill AB",
      title: "Accurate Video Review (Box.com)",
      start: "May 2021",
      end: "October 2021",
      description: [
        "Development of a single-page video review application in Vue 3, from scratch, start to finish, for Box.com. You can make comments, tag other users, add timestamps to comments, and see timestamps in the video timeline.",
        "AWS Lambda was used to process and redirect the user through the authentication process.",
        "OpenAPI was used to generate a back-end API library for the front-end, in order to easily work against box.com's API.",
      ],
      technologies: [
        "Vue 3",
        "Vuex",
        "TypeScript",
        "OpenAPI",
        "Swagger",
        "Video",
        "AWS",
        "AWS Lambda",
        "Serverless",
        "Webpack",
        "Vite",
      ],
    },
    {
      company: "Codemill AB",
      start: "January 2022",
      title: "Accurate Video: Edit",
      description:
        "Development of a web-based video editing application, as well as in-house Custom Elements library.",
      technologies: [
        "Angular",
        "SCSS",
        "PostCSS",
        "TypeScript",
        "JavaScript",
        "Lit",
      ],
    },
  ],
  languageSkills: [
    ["Swedish", "native language"],
    ["English", "native level, reading/writing/speaking"],
  ],
  skills: [
    "Vue 2",
    "Vue 3",
    "React",
    "Angular",
    "SCSS",
    "Sass",
    "CSS",
    "HTML",
    "JavaScript",
    "TypeScript",
    "Functional programming",
    "C",
    "Java",
    "npm",
    "yarn",
    "C++",
    "Haskell",
    "Functional Programming",
    "Clean Code",
    "Preact",
    "Algorithm Complexity Analysis",
    "Webpack",
    "Vite",
    "XML",
    "ESLint",
    "VS Code",
    "Android",
    "Communication",
    "ECMAScript",
    "GitLab",
    "GitHub",
    "Shell Scripting",
    "Bash",
    "Linux",
    "Golang",
    "Node.js",
    "Express",
    "REST",
    "Lit",
    "Jira",
    "Confluence",
    "Docker",
    "YAML",
    "TOML",
    "3D graphics",
  ],
};

export default data;
