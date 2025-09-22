import { useState, useEffect } from "react";

interface UseSlideshowProps {
  projectImages: string[];
  isPlaying: boolean;
  onNext: () => void;
}

export function useSlideshow({ projectImages, isPlaying, onNext }: UseSlideshowProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(16);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Calculate dynamic duration based on number of images
  useEffect(() => {
    const timePerImage = 2; // 2 seconds per image
    const newDuration = projectImages.length * timePerImage;
    setDuration(newDuration);
  }, [projectImages.length]);

  // Auto-play functionality and slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= duration) {
          onNext();
          return 0;
        }
        return prev + 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, duration, onNext]);

  // Sync image index with video progress
  useEffect(() => {
    if (projectImages.length <= 1) return;

    const timePerImage = duration / projectImages.length;
    const newImageIndex = Math.floor(currentTime / timePerImage);

    if (
      newImageIndex !== currentImageIndex &&
      newImageIndex < projectImages.length
    ) {
      setCurrentImageIndex(newImageIndex);
    }
  }, [currentTime, duration, projectImages.length, currentImageIndex]);

  const updateTime = (newTime: number) => {
    setCurrentTime(newTime);
    
    // Update corresponding image for selected time
    if (projectImages.length > 1) {
      const timePerImage = duration / projectImages.length;
      const newImageIndex = Math.floor(newTime / timePerImage);
      if (newImageIndex < projectImages.length) {
        setCurrentImageIndex(newImageIndex);
      }
    }
  };

  const resetSlideshow = () => {
    setCurrentTime(0);
    setCurrentImageIndex(0);
  };

  return {
    currentTime,
    duration,
    currentImageIndex,
    updateTime,
    resetSlideshow,
  };
}
