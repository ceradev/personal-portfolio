import { ServiceCard } from "../cards/service-card";
import { Service } from "@/types/services";
import { MobileResponsiveGrid } from "@/components/ui/layout";

interface ServicesGridProps {
  readonly services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <MobileResponsiveGrid
      columns={{ mobile: 1, tablet: 2, desktop: 2 }}
      className="max-w-4xl mx-auto dark:text-background"
    >
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </MobileResponsiveGrid>
  );
}
