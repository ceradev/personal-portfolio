import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { VideoOverlay } from "./video-overlay";
import { type Project } from "@/types/projects";

interface VideoContentProps {
  readonly projectImages: string[];
  readonly currentProject: Project;
  readonly currentImageIndex: number;
  readonly isPlaying: boolean;
  readonly duration: number;
  readonly currentTime: number;
  readonly isMobile: boolean;
  readonly onPlayPause: () => void;
  readonly onTouchStart: (e: React.TouchEvent) => void;
  readonly onTouchMove: (e: React.TouchEvent) => void;
  readonly onTouchEnd: (e: React.TouchEvent) => void;
}

export function VideoContent({
  projectImages,
  currentProject,
  currentImageIndex,
  isPlaying,
  duration,
  currentTime,
  isMobile,
  onPlayPause,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: VideoContentProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${isMobile ? "p-2" : ""}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentProject.title}-${currentImageIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={projectImages?.[currentImageIndex] || "/placeholders/placeholder.svg"}
            alt={`${currentProject.title} - Vista ${currentImageIndex + 1}`}
            fill
            className={isMobile ? "object-contain bg-black/20" : "object-cover"}
            priority={currentImageIndex === 0}
            quality={isMobile ? 90 : 75}
            sizes={isMobile ? "(max-width: 768px) 100vw" : "(max-width: 1200px) 50vw"}
          />
        </motion.div>
      </AnimatePresence>

      <VideoOverlay
        project={currentProject}
        isPlaying={isPlaying}
        duration={duration}
        onPlayPause={onPlayPause}
        currentImageIndex={currentImageIndex}
        totalImages={projectImages?.length || 0}
        currentTime={currentTime}
        isMobile={isMobile}
      />
    </div>
  );
}
