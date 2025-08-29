// config/highlights.tsx
import { CommitmentHighlight } from "./CommitmentHighlight";
import { CommunicationHighlight } from "./CommunicationHighlight";
import { FeatureHighlightItem } from "./feature";
import { LeadManagementHighlight } from "./LeadManagementHighlight";
import { LeadOptimizationHighlight } from "./LeadOptimizationHighlight";
import { Support24Highlight } from "./Support24Highlight";


export const HIGHLIGHTS_ITEMS: FeatureHighlightItem[] = [
  {
    id: "comunicacion-abierta",
    title: "Comunicación Abierta",
    description: "Acompañamos cada paso de tu proyecto desde el inicio",
    header: <CommunicationHighlight />,
    className: "lg:col-span-1",
  },
  {
    id: "optimizacion-leads",
    title: "Optimización de Leads",
    description: "Mejora la calidad y conversión de cada uno de tus leads",
    header: <LeadOptimizationHighlight />,
    className: "lg:col-span-1",
  },
  {
    id: "compromiso-dedicacion",
    title: "Compromiso y Dedicación",
    description: "Es la clave del éxito en tu proyecto para que puedas crecer",
    header: <CommitmentHighlight />,
    className: "lg:col-span-1",
  },
  {
    id: "atencion-24-7",
    title: "Atención de Nuestro Equipo 24/7",
    description: "Recibe atención personalizada de nuestro equipo en cualquier momento.",
    header: <Support24Highlight />,
    className: "lg:col-span-2",
  },
  {
    id: "gestion-leads",
    title: "Gestión de Leads",
    description: "Mejora la calidad y conversión de tus leads fácilmente.",
    header: <LeadManagementHighlight />,
    className: "lg:col-span-1",
  },
] as const;