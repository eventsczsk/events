export type RealizationPhoto = {
  src: string;
  alt: string;
};

export type Realization = {
  id: string;
  brand: string;
  projectName?: string;
  description?: string;
  brief?: string;
  type?: string;
  services: string[];
  photos: RealizationPhoto[];
};

// Doplňujte pouze potvrzené údaje a fotografie konkrétní realizace.
export const realizations: Realization[] = [
  { id: "sunar", brand: "Sunar", services: [], photos: [] },
  { id: "goodies", brand: "Goodies", services: [], photos: [] },
  { id: "mattoni", brand: "Mattoni", services: [], photos: [] },
  { id: "hamanek", brand: "Hamánek", services: [], photos: [] },
];
