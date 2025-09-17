import { Testimonial } from "@/types/testimonials";
import { Card } from "@/components/ui/layout/card";
import { Badge } from "@/components/ui/display/badge";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
  readonly isActive?: boolean;
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${
        index < rating ? "fill-warning-400 text-warning-400" : "text-neutral-300"
      }`}
    />
  ));
}

export function TestimonialCard({ testimonial, isActive = true }: TestimonialCardProps) {
  return (
    <Card className={`relative overflow-hidden border border-border/30 bg-background shadow-lg transition-all duration-500 h-[320px] flex flex-col max-w-sm mx-auto ${
      isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
    }`}>
      {/* Avatar at top */}
      <div className="flex justify-center pt-4 pb-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center text-primary font-bold text-base border-2 border-primary/10">
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

      {/* Name */}
      <div className="text-center px-4 pb-1">
        <h4 className="font-bold text-foreground text-base">{testimonial.name}</h4>
      </div>

      {/* Role */}
      <div className="text-center px-4 pb-3">
        <p className="text-muted-foreground font-medium text-xs">
          {testimonial.role}
        </p>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-4 pb-3">
        <blockquote className="text-foreground/80 leading-relaxed text-xs italic text-center line-clamp-4">
          "{testimonial.content}"
        </blockquote>
      </div>
      
      {/* Project Badge */}
      {testimonial.project && (
        <div className="px-4 pb-2">
          <div className="flex justify-center">
            <Badge variant="outline" className="text-xs px-2 py-1">
              {testimonial.project}
            </Badge>
          </div>
        </div>
      )}

      {/* Rating at bottom */}
      <div className="flex justify-center pb-4">
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
      </div>
    </Card>
  );
}
