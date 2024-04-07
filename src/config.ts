import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marcfranquesa.github.io",
  base: "/ai-bias-and-explainability-blog",
  author: "TAED2",
  desc: "Blog about AI Bias and Explainability",
  title: "TAED2",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/marcfranquesa/ai-bias-and-explainability-blog",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
