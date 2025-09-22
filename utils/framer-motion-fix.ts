// Fix for Framer Motion scroll offset warnings
// This ensures all animated containers have proper positioning

export const framerMotionProps = {
  style: { position: 'relative' as const }
};

// Alternative approach - CSS class that can be applied
export const ANIMATED_CONTAINER_CLASS = "relative";

// Hook to ensure proper positioning for animated elements
export function useFramerMotionFix() {
  return {
    style: { position: 'relative' as const }
  };
}
