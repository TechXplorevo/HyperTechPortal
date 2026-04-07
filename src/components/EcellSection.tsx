import { motion } from "framer-motion";
import ecellLogo from "@/assets/ecell-logo.png";

const EcellSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="ecell">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="neon-card flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          whileHover={{ rotateY: -2, rotateX: 1 }}
          style={{ perspective: "1000px" }}
        >
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={ecellLogo}
              alt="E-Cell MESWCOE Logo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-contain"
              style={{
                filter: "drop-shadow(0 0 20px hsl(186 100% 50% / 0.3))",
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl font-bold neon-text-cyan mb-4">
              Entrepreneurship Cell
            </h2>
            <p className="font-sub text-lg text-foreground/70 mb-2 tracking-wide">
              MES WCOE
            </p>
            <p className="font-body text-foreground/60 mb-6 leading-relaxed">
              Kickstart your entrepreneurial journey with MES WCOE! Collaborate,
              Innovate, and Scale with the brightest minds. Reach us anytime.
            </p>
            <a
              href="mailto:ecellmeswcoe@vercel.com"
              className="neon-btn inline-block"
            >
              Visit Site →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcellSection;
