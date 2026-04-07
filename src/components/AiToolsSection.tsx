import { motion } from "framer-motion";
import { Brain, Zap, Rocket, Lightbulb, Target, TrendingUp } from "lucide-react";

const tools = [
  { icon: Brain, label: "Ideation", desc: "AI-powered brainstorming" },
  { icon: Zap, label: "Automation", desc: "Streamline workflows" },
  { icon: Rocket, label: "Launch", desc: "Go-to-market tools" },
  { icon: Lightbulb, label: "Innovation", desc: "Creative AI assistants" },
  { icon: Target, label: "Marketing", desc: "AI-driven campaigns" },
  { icon: TrendingUp, label: "Scaling", desc: "Growth analytics" },
];

const AiToolsSection = () => {
  return (
    <section className="relative py-20 sm:py-24 px-4 overflow-hidden" id="ai-tools">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold neon-text-purple mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          AI Tools for Founders
        </motion.h2>
        <motion.p
          className="font-body text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Simplify your startup journey with 100+ AI tools that make your ideas
          smarter, faster, and more powerful. From ideation to scaling, we've got
          your back.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.label}
              className="neon-card neon-border-purple group cursor-pointer"
              style={{
                borderColor: "hsl(270 100% 50% / 0.2)",
                boxShadow: "0 0 15px hsl(270 100% 50% / 0.05)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: "hsl(270 100% 50% / 0.6)",
                boxShadow: "0 0 40px hsl(270 100% 50% / 0.2)",
              }}
            >
              <tool.icon
                className="mx-auto mb-3 transition-all duration-300"
                size={28}
                style={{ color: "hsl(270 100% 50%)" }}
              />
              <h3 className="font-display text-xs sm:text-sm font-bold neon-text-purple mb-1">
                {tool.label}
              </h3>
              <p className="font-body text-[10px] sm:text-xs text-foreground/50">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting lines SVG */}
        <div className="hidden md:block absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="30%" y1="40%" x2="70%" y2="40%" stroke="hsl(270 100% 50%)" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="hsl(270 100% 50%)" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <motion.a
          href="https://youraibuddies.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="neon-btn inline-block"
          style={{
            borderColor: "hsl(270 100% 50% / 0.6)",
            color: "hsl(270 100% 50%)",
            textShadow: "0 0 10px hsl(270 100% 50% / 0.5)",
            background: "linear-gradient(135deg, hsl(270 100% 50% / 0.15), hsl(186 100% 50% / 0.15))",
            boxShadow: "0 0 15px hsl(270 100% 50% / 0.2)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore AI Tools →
        </motion.a>
      </div>
    </section>
  );
};

export default AiToolsSection;
