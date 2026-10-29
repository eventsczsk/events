import { eventPhotos } from "@/data/site";

export type RealizationPhoto = {
  src: string;
  alt: string;
  illustrative?: boolean;
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

// Dočasné snímky atmosféry nejsou fotografiemi realizací uvedených značek.
// Při doplnění potvrzených fotografií odstraňte příznak illustrative.
export const realizations: Realization[] = [
  {
    id: "sunar", brand: "Sunar", services: [],
    photos: [{ src: eventPhotos[3], alt: "Ilustrační fotografie z galerie Events CZ/SK, nikoli realizace Sunar", illustrative: true }],
  },
  {
    id: "goodies", brand: "Goodies", services: [],
    photos: [{ src: eventPhotos[5], alt: "Ilustrační fotografie z galerie Events CZ/SK, nikoli realizace Goodies", illustrative: true }],
  },
  {
    id: "mattoni", brand: "Mattoni", services: [],
    photos: [{ src: eventPhotos[7], alt: "Ilustrační fotografie z galerie Events CZ/SK, nikoli realizace Mattoni", illustrative: true }],
  },
  {
    id: "hamanek", brand: "Hamánek", services: [],
    photos: [{ src: eventPhotos[9], alt: "Ilustrační fotografie z galerie Events CZ/SK, nikoli realizace Hamánek", illustrative: true }],
  },
];
