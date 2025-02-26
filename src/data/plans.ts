import { HelpCircle } from "lucide-react";
import { plan } from "../types";

export const Plans: plan[] = [
  {
    name: "Core",
    description: "Ideal para emprendedores que buscan presencia online.",
    degradado: "from-[#f12711] to-[#f5af19]",
    price: 2700,
    features: [
      "Página web profesional",
      "Diseño web Responsive",
      "Correo corporativo ilimitado",
      "Integración con redes sociales",
      "Seguridad SSL incluida",
      { text: "Dominio (costo adicional)", icon: HelpCircle }, // Usamos la referencia al componente, no JSX
    ],
  },
  {
    name: "Core+",
    description: "Perfecto para pequeñas empresas que desean crecer.",
    degradado: "from-red-600 to-fuchsia-800",
    price: 3000,
    features: [
      "Todo en el plan Core",
      "Chat en línea personalizado",
      "Posicionamiento SEO inicial",
      "Hosting 1 año incluido",
        { text: "Dominio (costo adicional)", icon: HelpCircle }, // Usamos la referencia al componente, no JSX

    ],
  },
  {
    name: "Pro",
    description: "Para negocios que necesitan una plataforma potente.",
    degradado: "from-red-600 from-30% via-fuchsia-800 via-30% to-[#1565c0]",
    price: 4000,
    features: [
      "Todo en el plan Core+",
      "Páginas de contenido ilimitadas",
      "Blog integrado y personalizable",
      "Soporte técnico prioritario",
      "Análisis de tráfico avanzado",
        { text: "Dominio (costo adicional)", icon: HelpCircle }, // Usamos la referencia al componente, no JSX

    ],
  },
  {
    name: "Elite",
    description: "La mejor opción para grandes empresas y corporaciones.",
    degradado: "from-lime-800 to-[#1565c0]",
    price: 6000,
    features: [
      "Todo en el plan Pro",
      "Desarrollo a medida",
      "Optimización SEO avanzada",
      "Mantenimiento mensual incluido",
      "Seguridad avanzada y backups",
      { text: "Dominio (costo adicional)", icon: HelpCircle }, // Usamos la referencia al componente, no JSX

    ],
  },
];
