import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(186 100% 50% / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main title */}
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 neon-text-cyan"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          HyperTechPortal
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-sub text-xl md:text-2xl tracking-widest uppercase mb-8 neon-text-magenta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The Ultimate Startup & Tech Hub
        </motion.p>

        {/* Typing tagline */}
        <motion.div
          className="mb-12 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <TypeWriter
            texts={[
              "Accelerate Your Startup Journey",
              "Discover AI Tools",
              "Unlock Funding Opportunities",
            ]}
            className="font-body text-lg md:text-xl text-foreground/70"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a
            href="https://youraibuddies.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn"
          >
            Explore AI Tools →
          </a>
          <a href="#contact" className="neon-btn neon-btn-magenta">
            Get Featured →
          </a>
        </motion.div>

        {/* Data stream lines */}
        <div className="absolute left-0 top-1/2 w-32 h-px opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, hsl(186 100% 50%))" }}
        />
        <div className="absolute right-0 top-1/2 w-32 h-px opacity-20"
          style={{ background: "linear-gradient(270deg, transparent, hsl(186 100% 50%))" }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border border-foreground/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
