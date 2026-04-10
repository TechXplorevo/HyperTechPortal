import { motion } from "framer-motion";
import xtnLogo from "@/assets/xtn-logo.png";
import ParallaxSection from "./ParallaxSection";

const XtnSection = () => {
  return (
    <ParallaxSection className="py-20 sm:py-24 px-4" id="xtn" speed={0.18}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="neon-card neon-border-magenta flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          whileHover={{ rotateY: 2, rotateX: 1 }}
          style={{
            perspective: "1000px",
            borderColor: "hsl(300 100% 50% / 0.3)",
            boxShadow: "0 0 20px hsl(300 100% 50% / 0.1)",
          }}
        >
          {/* Logo with rotation */}
          <motion.div
            className="flex-shrink-0 relative"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ perspective: "600px" }}
          >
            <img
              src={xtnLogo}
              alt="XTN Logo"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl object-contain"
              loading="lazy"
              style={{
                filter: "drop-shadow(0 0 20px hsl(300 100% 50% / 0.3))",
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-dashed animate-pulse pointer-events-none"
              style={{ borderColor: "hsl(300 100% 50% / 0.3)" }}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-right">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold neon-text-magenta mb-4">
              XTN – Xplorevo Tech Network
            </h2>
            <p className="font-sub text-sm sm:text-base text-foreground/50 mb-3 tracking-wide">
              Student-driven Projects · Tech Solutions · Digital Innovation
            </p>
            <p className="font-body text-sm sm:text-base text-foreground/60 mb-6 leading-relaxed">
              XTN is your launchpad for student-driven innovation. From digital
              solutions to tech projects, we make ideas real. Explore XTN and
              power your future!
            </p>
            <a
              href="https://xplorevo.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn neon-btn-magenta inline-block neon-ripple"
            >
              Explore XTN →
            </a>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default XtnSection;
