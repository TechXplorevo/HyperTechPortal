import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import ecellLogo from "@/assets/ecell-logo.png";
import ParallaxSection from "./ParallaxSection";

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/meswcoe-e-cell/?viewAsMember=true",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/meswcoe_e_cell/",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:e.cell@mescoepune.org",
    label: "Email",
  },
];

const EcellSection = () => {
  return (
    <ParallaxSection className="py-20 sm:py-24 px-4" id="ecell" speed={0.2}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="neon-card flex flex-col md:flex-row items-center gap-6 sm:gap-8"
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
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl object-contain"
              loading="lazy"
              style={{
                filter: "drop-shadow(0 0 20px hsl(186 100% 50% / 0.3))",
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold neon-text-cyan mb-3">
              Entrepreneurship Cell
            </h2>
            <p className="font-sub text-base sm:text-lg text-foreground/70 mb-1 tracking-wide">
              MES WCOE
            </p>
            <p className="font-body text-sm sm:text-base text-foreground/50 mb-2">
              Contact: <a href="mailto:e.cell@mescoepune.org" className="text-primary hover:underline">e.cell@mescoepune.org</a>
            </p>
            <p className="font-body text-sm sm:text-base text-foreground/60 mb-5 leading-relaxed">
              Kickstart your entrepreneurial journey with MES WCOE! Collaborate,
              Innovate, and Scale with the brightest minds.
            </p>

            {/* Social icons */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border transition-all duration-300 neon-ripple"
                  style={{
                    borderColor: "hsl(186 100% 50% / 0.3)",
                    color: "hsl(186 100% 50%)",
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 20px hsl(186 100% 50% / 0.4)",
                  }}
                  title={s.label}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>

            <a
              href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-flex items-center gap-2 neon-ripple"
            >
              <MessageCircle size={16} />
              Join Community →
            </a>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default EcellSection;
