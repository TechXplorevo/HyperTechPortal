import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "boom" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("boom");
          setTimeout(() => {
            setPhase("done");
            setTimeout(onComplete, 300);
          }, 600);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "hsl(0 0% 3%)" }}
          exit={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated grid */}
          <div className="absolute inset-0 grid-bg opacity-15 animate-grid-scroll" />

          {/* Scanning lines */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(186 100% 50% / 0.6), transparent)",
              top: `${progress}%`,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          {/* Outer rotating ring */}
          <motion.div
            className="relative mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-full"
              style={{
                border: "2px solid transparent",
                borderTopColor: "hsl(186 100% 50%)",
                borderRightColor: "hsl(300 100% 50% / 0.5)",
                boxShadow:
                  "0 0 40px hsl(186 100% 50% / 0.3), inset 0 0 20px hsl(186 100% 50% / 0.05)",
              }}
            />
            {/* Inner counter-rotating ring */}
            <motion.div
              className="absolute inset-3 rounded-full"
              style={{
                border: "1px solid transparent",
                borderBottomColor: "hsl(270 100% 50% / 0.6)",
                borderLeftColor: "hsl(300 100% 50% / 0.3)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Center dot */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: "hsl(186 100% 50%)",
                  boxShadow: "0 0 20px hsl(186 100% 50% / 0.8)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display text-xl sm:text-2xl font-bold tracking-[0.3em] neon-text-cyan mb-2"
            initial={{ opacity: 0, y: 20, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            HYPERTECHPORTAL
          </motion.h1>

          {/* Status text */}
          <motion.p
            className="font-sub text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-6"
            style={{ color: "hsl(186 100% 50% / 0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {progress < 30
              ? "Initializing Systems..."
              : progress < 60
              ? "Loading Neural Matrix..."
              : progress < 90
              ? "Establishing Connection..."
              : "Systems Online"}
          </motion.p>

          {/* Progress bar */}
          <div
            className="w-48 sm:w-64 h-[2px] rounded-full overflow-hidden relative"
            style={{ background: "hsl(0 0% 12%)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(186 100% 50%), hsl(300 100% 50%), hsl(270 100% 50%))",
                boxShadow: "0 0 15px hsl(186 100% 50% / 0.5)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>

          {/* Percentage */}
          <motion.span
            className="font-display text-xs tracking-[0.3em] mt-3 neon-text-cyan tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.span>

          {/* Boom flash */}
          {phase === "boom" && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 0.5 }}
              style={{
                background:
                  "radial-gradient(circle at center, hsl(186 100% 50% / 0.3), transparent 70%)",
              }}
            />
          )}

          {/* Corner decorations */}
          {[
            "top-4 left-4",
            "top-4 right-4 rotate-90",
            "bottom-4 left-4 -rotate-90",
            "bottom-4 right-4 rotate-180",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-6 h-6 sm:w-8 sm:h-8`}
              style={{
                borderTop: "1px solid hsl(186 100% 50% / 0.25)",
                borderLeft: "1px solid hsl(186 100% 50% / 0.25)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            />
          ))}

          {/* Data readout (bottom) */}
          <motion.div
            className="absolute bottom-6 left-4 right-4 flex justify-between font-display text-[8px] sm:text-[9px] tracking-widest"
            style={{ color: "hsl(186 100% 50% / 0.2)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span>SYS:ONLINE</span>
            <span>NODES:ACTIVE</span>
            <span>LINK:SECURE</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
