import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio("/audio/bg-music.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Attempt autoplay – browsers may block until user interaction
    const tryPlay = () => {
      audio.play().catch(() => {
        // Autoplay blocked – wait for first user interaction
        const resume = () => {
          audio.play().catch(() => {});
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      });
    };
    tryPlay();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 backdrop-blur-md"
      style={{
        background: "hsl(0 0% 8% / 0.8)",
        border: "1px solid hsl(186 100% 50% / 0.3)",
        color: "hsl(186 100% 50%)",
        boxShadow: "0 0 15px hsl(186 100% 50% / 0.15)",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 25px hsl(186 100% 50% / 0.35)",
      }}
      whileTap={{ scale: 0.95 }}
      title={playing ? "Mute" : "Play Music"}
      aria-label={playing ? "Mute background music" : "Play background music"}
    >
      {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </motion.button>
  );
};

export default MusicToggle;
