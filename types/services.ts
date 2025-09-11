export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  technologies: string[];
  pricing?: {
    type: 'hourly' | 'project' | 'monthly';
    range: string;
  };
}
