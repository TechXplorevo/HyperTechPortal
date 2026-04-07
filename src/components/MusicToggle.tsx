import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/audio/bg-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 neon-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={playing ? "Mute" : "Play Music"}
    >
      {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </motion.button>
  );
};

export default MusicToggle;
