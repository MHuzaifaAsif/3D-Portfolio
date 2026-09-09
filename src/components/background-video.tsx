import { useRef, useEffect } from "react";
import { heroVideo } from "../assets";

export const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none bg-[#050816]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark gradient overlay for high contrast, legibility, and neon aesthetic across all sections */}
      <div className="absolute inset-0 bg-[#050816]/75 bg-gradient-to-b from-[#050816]/70 via-[#050816]/65 to-[#050816]/80" />
    </div>
  );
};
