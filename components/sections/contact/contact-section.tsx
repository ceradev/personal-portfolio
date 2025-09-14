"use client";

import { SectionTitle } from "@/utils/section-title";
import { SectionTransition } from "@/utils/section-transition";
import { ContactSubtitle, ContactIntro, ContactForm } from "./components";

export function ContactSection() {
  return (
    <SectionTransition id="contact" className="py-20 my-8">
      <SectionTitle title="Contáctame" />
      
      <ContactSubtitle />

      <div className="space-y-16">
        {/* Contenido explicativo arriba */}
        <ContactIntro />

        {/* Formulario abajo, sin contenedor */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </SectionTransition>
  );
}