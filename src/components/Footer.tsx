import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "lucide-react";
import xplorevoLogo from "@/assets/xplorevo-logo.jpg";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/meswcoe-e-cell/?viewAsMember=true", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/meswcoe_e_cell/", label: "Instagram" },
  { icon: Mail, href: "mailto:e.cell@mescoepune.org", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 sm:py-16 px-4 border-t" style={{ borderColor: "hsl(186 100% 50% / 0.1)" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Xplorevo Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://xplorevo.tech" target="_blank" rel="noopener noreferrer">
            <img
              src={xplorevoLogo}
              alt="Xplorevo"
              className="h-14 sm:h-16 w-auto rounded-xl object-contain"
              style={{ filter: "drop-shadow(0 0 15px hsl(300 100% 50% / 0.3))" }}
            />
          </a>
        </motion.div>

        {/* Social icons */}
        <div className="flex justify-center gap-5 sm:gap-6 mb-6 sm:mb-8">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="relative p-3 rounded-full border transition-all duration-300"
              style={{
                borderColor: "hsl(186 100% 50% / 0.3)",
                color: "hsl(186 100% 50%)",
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 25px hsl(186 100% 50% / 0.4)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              title={s.label}
            >
              <s.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="font-sub text-xs sm:text-sm tracking-widest text-foreground/40 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Powered by <span className="neon-text-cyan">HyperTechPortal</span> &{" "}
          <span className="neon-text-magenta">Xplorevo Tech Network</span>
        </motion.p>

        <p className="font-body text-xs text-foreground/20 mt-4">
          © {new Date().getFullYear()} HyperTechPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
