import type { Brand } from "../types/brand.type";
import type { Feature } from "../types/feature.type";
import type { Project } from "../types/project.type";

export const features: Feature[] = [
  {
    title: "Introducing Pre-builds",
    paragraph:
      "We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.",
    moreButton: {
      text: "More on prebuilds",
      href: "/docs/prebuilds/",
    },
    documentationLink: "/docs/prebuilds/",
    preview: {
      name: "terminal.png",
      alt: "A terminal that displays Gitpod prebuild output.",
    },
  },
];

export const brands: Brand[] = [
  {
    alt: "GitLab",
    href: "https://about.gitlab.com/",
    logo: "gitlab-logo.svg",
    className: "grey-logo",
  },
  {
    alt: "freeCodeCamp",
    href: "https://www.freecodecamp.org/",
    logo: "freecodecamp.svg",
    className: "fcc",
  },
  {
    alt: "D-Wave",
    href: "https://www.dwavesys.com/",
    logo: "dwave.svg",
    transform: "scale(1.3)",
    className: "dwave-logo",
  },
  {
    alt: "Google",
    href: "https://about.google/",
    logo: "google.svg",
    transform: "scale(0.9)",
    className: "grey-logo",
  },
  {
    alt: "Amazon",
    href: "https://www.aboutamazon.com",
    logo: "amazon.svg",
    transform: "scale(0.9) translateY(5px)",
    className: "grey-logo",
  },
  {
    alt: "Facebook",
    href: "https://about.fb.com/",
    logo: "facebook.svg",
    className: "grey-logo",
  },
  {
    alt: "Uber",
    href: "https://www.uber.com",
    logo: "uber.svg",
    className: "grey-logo",
  },
  {
    alt: "OpenAI",
    href: "https://openai.com/",
    logo: "openai.svg",
    transform: "scale(1.1)",
    className: "grey-logo",
  },
  {
    alt: "Sauce Labs",
    href: "https://saucelabs.com/",
    logo: "sauce-labs.svg",
    className: "grey-logo",
  },
  {
    alt: "Intel",
    href: "https://www.intel.com",
    logo: "intel.svg",
    transform: "scale(0.8)",
    className: "grey-logo",
  },
  {
    alt: "Eclipse Theia",
    href: "https://theia-ide.org",
    logo: "theia.svg",
    transform: "scale(1.1)",
    className: "grey-logo",
  },
  {
    alt: "Code Institute",
    href: "https://codeinstitute.net/",
    logo: "code-institute.svg",
    className: "grey-logo",
  },
  {
    alt: "4Geeks Academy",
    href: "https://www.4geeksacademy.co/",
    logo: "4-geeks-academy.png",
    className: "four-geeks grey-logo",
  },
  // {
  //     alt: 'Gatsby',
  //     href: 'https://www.gatsbyjs.org/',
  //     logo: '',
  //     className: 'gatsby-logo'
  // },
  // {
  //     alt: 'Vue.js',
  //     href: 'https://vuejs.org/',
  //     logo: '',
  //     className: 'vue-logo'
  // },
];

export const projects: Project[] = [
  {
    logo: "ts.svg",
    title: "TypeScript",
    githubUrl: "https://github.com/eclipse-theia/theia",
    alt: "TypeScript",
  },
  {
    logo: "java.svg",
    title: "Java & Spring",
    githubUrl: "https://github.com/gitpod-io/spring-petclinic",
    gitlabUrl: "https://gitlab.com/gitpod/spring-petclinic",
    bitbucketUrl: "https://bitbucket.org/gitpod/spring-petclinic",
    alt: "Java",
  },
  {
    logo: "php.svg",
    title: "PHP & Symfony",
    githubUrl: "https://github.com/gitpod-io/symfony-demo",
    alt: "PHP",
  },
  {
    logo: "dotnet-core.svg",
    title: ".NET Core",
    githubUrl: "https://github.com/gitpod-io/dotnetcore",
    gitlabUrl: "https://gitlab.com/gitpod/dotnetcore",
    bitbucketUrl: "https://bitbucket.org/gitpod/dotnetcore",
    alt: "C#",
  },
  {
    logo: "ts.svg",
    title: "TypeScript",
    githubUrl: "https://github.com/eclipse-theia/theia",
    alt: "TypeScript",
  },
  {
    logo: "java.svg",
    title: "Java & Spring",
    githubUrl: "https://github.com/gitpod-io/spring-petclinic",
    gitlabUrl: "https://gitlab.com/gitpod/spring-petclinic",
    bitbucketUrl: "https://bitbucket.org/gitpod/spring-petclinic",
    alt: "Java",
  },
  // {
  //   logo: "go.png",
  //   title: "Go",
  //   githubUrl: "https://github.com/prometheus/prometheus",
  //   alt: "Go",
  // },
  // {
  //   logo: "rust.png",
  //   title: "Rust",
  //   githubUrl: "https://github.com/nushell/nushell",
  //   alt: "Rust",
  // },
  // {
  //   logo: "python.png",
  //   title: "Python & Flask",
  //   githubUrl: "https://github.com/breatheco-de/python-flask-api-tutorial",
  //   alt: "Python",
  // },
  // {
  //     logo: 'ruby.png',
  //     title: 'Rails & Postgres',
  //     githubUrl: "https://github.com/gitpod-io/ruby-on-rails",
  //     gitlabUrl: "https://gitlab.com/gitpod/rails",
  //     bitbucketUrl: "https://bitbucket.org/gitpod/ruby-on-rails",
  //     alt: "Ruby",
  // },
];
