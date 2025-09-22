import { useRef } from "react";
import { useMobile } from "./use-mobile";

interface UseTouchGesturesProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export function useTouchGestures({ onSwipeLeft, onSwipeRight }: UseTouchGesturesProps) {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const isMobile = useMobile();

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    e.preventDefault();
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile) return;
    e.preventDefault();
    touchEndX.current = e.changedTouches[0].clientX;
    touchEndY.current = e.changedTouches[0].clientY;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!isMobile) return;

    const swipeThreshold = 80;
    const verticalThreshold = 100;
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = Math.abs(touchStartY.current - touchEndY.current);

    if (Math.abs(diffX) > swipeThreshold && diffY < verticalThreshold) {
      if (diffX > 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
