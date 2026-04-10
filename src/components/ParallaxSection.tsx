import { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  speed?: number;
}

const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ children, className = "", id, speed = 0.15 }, _fwdRef) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);

    return (
      <motion.section
        ref={ref}
        id={id}
        className={`relative overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div style={{ y }}>{children}</motion.div>
      </motion.section>
    );
  }
);

ParallaxSection.displayName = "ParallaxSection";

export default ParallaxSection;
