import { LucideIcon } from "lucide-react";

export type icon = {
    name: string,
    image: string
};

export type servicios = {
    icon:  LucideIcon;
    title: string;
    description: string;
};

export type project = {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
  }

  export type Feature = string | { text: string; icon: LucideIcon };

  export type plan = {
    name: string;
    description: string;
    degradado: string;
    price: number;
    features: Feature[];
  };
  