export type Language = string;
export type LanguageLevel = string;
export type Skill = string;
export type LanguageSkill = [Language, LanguageLevel];

export interface EducationItem {
  school: string;
  start: string;
  end?: string;
  city?: string;
  description?: string;
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
  bio: string;
  skills: Skill[];
  projects: Project[];
  languageSkills: LanguageSkill[];
  education: EducationItem[];
}

const data: Resume = {
  bio: "Victor is a curious and quality-focused software engineer, eager to learn new technologies and efficient worklows. He studied Interaction & Design at Umeå University, with a large focus on programming. He is interested in technology, language, nature, sports, music, movies, etc.",
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
      description: "Civil engineer programme in Interaction and Design",
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
        "git",
        "bash",
        "teaching",
        "interpersonal skills",
        "debugging",
      ],
    },
    {
      company: "Codemill AB",
      city: "Umeå",
      title: 'Raketech Group Holding -- TV Sports Guide ("TVMatchen")',
      start: "Summer of 2017",
      end: "Fall of 2017 (approx 3 months)",
      description: "Development of Mobile app development in iOS",
      technologies: ["Android", "Java", "iOS", "Objective-C", "git"],
    },
    {
      company: "Codemill AB",
      title: "Västerbottens-Kuriren -- front-end developer consultant",
      start: "August 2017",
      end: "February 2018 (approx 6 months)",
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
        "git",
      ],
    },
    {
      company: "Codemill AB",
      title: "ProSiebenSat.1 MEDIA SE - Unified Content Project",
      start: "February 2018",
      end: "October 2019",
      description: [
        "Large infrastructure modernisation initiative with a large mass media company, replacing their MAM system to create a new primary system for digital management and distribution.",
        "This work mostly involved writing web front-end in Vue, but had many moving parts that had to be understood in order to cooperate with back-end business logic etc.",
      ],
      technologies: [
        "git",
        "Vue 2",
        "python",
        "Cantemo Portal",
        "Vidispine",
        "Helm",
        "Docker",
      ],
    },
    {
      company: "Codemill AB",
      title: "Accurate Video: Validate",
      start: "October 2019",
      end: "May 2021",
      description:
        "Development of a web-based application for video/content veri�cation/quality control with frame-accurate video support, as well as an in-house Custom Elements component library build using Lit.",
      technologies: [
        "Custom Elements",
        "Angular",
        "Lit",
        "TypeScript",
        "Video",
        "Broadcasting",
        "Media",
        "Web API",
        "git",
      ],
    },
    {
      company: "Codemill AB",
      title: "Accurate Video Review (Box.com)",
      start: "May 2021",
      end: "October 2021",
      description: [
        "Development of a single-page application for Box.com where you can review a video stored on Box.com. You can make comments, tag other users, add timestamps to comments, and see timestamps in the video timeline.",
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
  ],
};

export default data;
