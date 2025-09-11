import { ServiceCard } from "./service-card";
import { Service } from "@/types/services";

interface ServicesGridProps {
  readonly services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto dark:text-background">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
