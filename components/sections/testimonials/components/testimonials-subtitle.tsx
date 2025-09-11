import { SectionTitle } from "@/utils/section-title";

export function TestimonialsSubtitle() {
  return (
    <div className="text-center mb-12">
      <SectionTitle title="Testimonios" />
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
        Lo que dicen mis clientes sobre mi trabajo
      </p>
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        La satisfacción del cliente es mi prioridad. Descubre las experiencias 
        de quienes han confiado en mis servicios para sus proyectos digitales.
      </p>
    </div>
  );
}
