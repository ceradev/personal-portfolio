export interface HeroSectionProps {
  readonly isMobile: boolean;
}

export interface TypeWriterProps {
  readonly words: string[];
}

export interface TechBadgeProps {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly color: string;
  readonly hoverColor: string;
  readonly position: {
    readonly top?: string;
    readonly right?: string;
    readonly bottom?: string;
    readonly left?: string;
    readonly transform?: string;
  };
  readonly animation: {
    readonly duration: number;
    readonly delay?: number;
    readonly type: "y" | "x" | "rotate" | "combined";
    readonly values: number[] | string[];
  };
}
