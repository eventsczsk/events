export type RealizationPhoto = {
  src: string;
  alt: string;
  illustrative?: boolean;
};

export type Realization = {
  id: string;
  brand: string;
  logo?: string;
  projectName?: string;
  description?: string;
  brief?: string;
  type?: string;
  services: string[];
  photos: RealizationPhoto[];
};

export const realizations: Realization[] = [
  {
    id: "sunar", brand: "Sunar", services: [], photos: [],
    logo: "https://cdn.brandfetch.io/idKL-mQOQt/w/160/h/90/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1745043872162",
  },
  {
    id: "goodies", brand: "Goodies", services: [], photos: [],
    logo: "https://www.festacekfestival.cz/assets/partners/group-0-logo-0.svg",
  },
  {
    id: "mattoni", brand: "Mattoni", services: [], photos: [],
    logo: "https://cdn.brandfetch.io/idWM3os7mW/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1792372704825",
  },
  {
    id: "hamanek", brand: "Hamánek", services: [], photos: [],
    logo: "https://www.festacekfestival.cz/assets/partners/hamanek-logo.png",
  },
];
