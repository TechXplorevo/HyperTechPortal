import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "E-Cell", href: "#ecell" },
  { label: "XTN", href: "#xtn" },
  { label: "AI Tools", href: "#ai-tools" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-2 backdrop-blur-xl"
          : "py-4"
      }`}
      style={{
        background: scrolled
          ? "hsl(0 0% 4% / 0.85)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid hsl(186 100% 50% / 0.1)"
          : "none",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
          className="font-display text-lg font-bold neon-text-cyan tracking-wider"
        >
          HTP
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
              className="font-sub text-sm tracking-widest uppercase text-foreground/60 hover:text-primary transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b"
            style={{
              background: "hsl(0 0% 4% / 0.95)",
              borderColor: "hsl(186 100% 50% / 0.1)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
                  className="font-sub text-sm tracking-widest uppercase text-foreground/60 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
