import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marcfranquesa.github.io",
  base: "",
  author: "TAED G2",
  desc: "Blog about AI Bias and Transparency",
  title: "TAED G2",
  lightAndDarkMode: true,
  postPerPage: 3,
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
    href: "https://github.com/marcfranquesa/ai-bias-and-transparency-blog",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
