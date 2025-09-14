"use client";

import { SectionTitle } from "@/utils/section-title";
import { SectionTransition } from "@/utils/section-transition";
import { ContactSubtitle, ContactIntro, ContactInfo, ContactFormSection } from "./components";

export function ContactSection() {
  return (
    <SectionTransition id="contact" className="py-20 my-8">
      <SectionTitle title="Contáctame" />
      
      <ContactSubtitle />

      <div className="space-y-10">
        <ContactIntro />

        {/* Layout reorganizado: Disponibilidad arriba, Formulario abajo */}
        <div className="space-y-8">
          {/* Primera fila: Email y Redes Sociales (izquierda) + Disponibilidad (derecha) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Columna izquierda: Email y Redes Sociales */}
            <div className="space-y-6">
              <ContactInfo />
            </div>

            {/* Columna derecha: Disponibilidad */}
            <div className="flex items-start h-full">
              <ContactInfo availabilityOnly />
            </div>
          </div>

          {/* Segunda fila: Formulario apaisado - ocupa todo el ancho */}
          <div className="w-full">
            <ContactFormSection />
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}