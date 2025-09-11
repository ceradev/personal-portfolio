import { Testimonial } from "@/types/testimonials";
import { Card } from "@/components/ui/layout/card";
import { Badge } from "@/components/ui/display/badge";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${
        index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
      }`}
    />
  ));
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="group relative overflow-hidden border-2 border-transparent bg-gradient-to-br from-background to-muted/20 p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 h-full">
      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      
      {/* Content */}
      <blockquote className="mb-6 text-muted-foreground leading-relaxed italic">
        "{testimonial.content}"
      </blockquote>
      
      {/* Project Badge */}
      {testimonial.project && (
        <div className="mb-4">
          <Badge variant="outline" className="text-xs">
            {testimonial.project}
          </Badge>
        </div>
      )}
      
      {/* Author Info */}
      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex items-center space-x-3">
          {/* Avatar placeholder */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-semibold">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} en {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
