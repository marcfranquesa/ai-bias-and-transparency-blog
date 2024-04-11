import type socialIcons from "../public/socialIcons";

export type Site = {
  website: string;
  base: string;
  author: string;
  desc: string;
  title: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
