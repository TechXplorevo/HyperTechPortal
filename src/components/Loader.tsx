import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 90);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Rotating ring */}
        <motion.div
          className="relative mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="h-24 w-24 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "hsl(186 100% 50%)",
              borderRightColor: "hsl(300 100% 50% / 0.5)",
              boxShadow: "0 0 30px hsl(186 100% 50% / 0.3)",
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-2xl font-bold tracking-widest neon-text-cyan mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          HYPERTECHPORTAL
        </motion.h1>

        {/* Progress bar */}
        <div className="w-64 h-1 rounded-full overflow-hidden"
          style={{ background: "hsl(0 0% 15%)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(186 100% 50%), hsl(300 100% 50%), hsl(270 100% 50%))",
              boxShadow: "0 0 15px hsl(186 100% 50% / 0.5)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <motion.span
          className="font-display text-xs tracking-widest mt-3 neon-text-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.span>

        {/* Corner decorations */}
        {[
          "top-4 left-4",
          "top-4 right-4 rotate-90",
          "bottom-4 left-4 -rotate-90",
          "bottom-4 right-4 rotate-180",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-8 h-8 opacity-30`}
            style={{
              borderTop: "2px solid hsl(186 100% 50%)",
              borderLeft: "2px solid hsl(186 100% 50%)",
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
