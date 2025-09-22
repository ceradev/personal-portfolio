import { Testimonial } from "@/types/testimonials";
import { Card } from "@/components/ui/layout/card";
import { Badge } from "@/components/ui/display/badge";

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
  readonly isActive?: boolean;
}

export function TestimonialCard({ testimonial, isActive = true }: TestimonialCardProps) {
  return (
    <Card className={`relative overflow-hidden border border-border/30 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 h-[380px] flex flex-col max-w-sm mx-auto ${
      isActive ? 'shadow-xl' : 'shadow-none'
    }`}>
      {/* Decorative quote icon */}
      <div className="absolute top-3 right-3 opacity-10">
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      {/* Avatar at top */}
      <div className="flex justify-center pt-4 pb-2">
        <div className="relative">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-base border-2 border-primary/20 ${isActive ? 'shadow-lg' : 'shadow-none'}`}>
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              testimonial.name.split(' ').map(n => n[0]).join('')
            )}
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="text-center px-4 pb-1">
        <h4 className="font-bold text-foreground text-base leading-tight">{testimonial.name}</h4>
      </div>

      {/* Role and Company */}
      <div className="text-center px-4 pb-2">
        <p className="text-muted-foreground font-medium text-xs leading-tight">
          {testimonial.role}
        </p>
        <p className="text-primary font-semibold text-xs mt-0.5 leading-tight">
          {testimonial.company}
        </p>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-4 pb-3 flex items-center justify-center">
        <blockquote className="text-foreground/90 leading-relaxed text-xs italic text-center relative w-full">
          <span className="text-primary text-lg absolute -top-1 -left-1">"</span>
          <span className="block px-3">{testimonial.content}</span>
          <span className="text-primary text-lg absolute -bottom-1 -right-1">"</span>
        </blockquote>
      </div>
      
      {/* Project Badge */}
      <div className="px-4 pb-2">
        <div className="flex justify-center">
          {testimonial.project ? (
            <Badge variant="outline" className="text-xs px-2 py-1 bg-primary/10 border-primary/30 text-primary font-medium">
              📁 {testimonial.project}
            </Badge>
          ) : (
            <div className="h-4"></div>
          )}
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="flex justify-center pb-3">
        <div className="w-8 h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full"></div>
      </div>
    </Card>
  );
}
