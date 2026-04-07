import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:ecellmeswcoe@vercel.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t" style={{ borderColor: "hsl(186 100% 50% / 0.1)" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
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
            >
              <s.icon size={20} />
              {/* Glow ripple */}
              <span
                className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none"
                style={{
                  boxShadow: "0 0 15px hsl(186 100% 50% / 0.15)",
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="font-sub text-sm tracking-widest text-foreground/40 uppercase"
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
