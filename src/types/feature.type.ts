export type Feature = {
  title: string;
  paragraph: string;
  moreButton?: { text: string; href: string };
  documentationLink?: string;
  image?: { src: string; alt: string };
  terminalSource?: string;
};
