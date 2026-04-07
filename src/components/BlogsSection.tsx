import { motion } from "framer-motion";
import { Newspaper, Award, Rocket } from "lucide-react";

const cards = [
  {
    icon: Newspaper,
    title: "Startup Radar India",
    desc: "Daily tech startup insights and trending news from the Indian ecosystem.",
    btn: "Read Blogs →",
    href: "https://startupradarindia.blogspot.com/",
    color: "cyan",
  },
  {
    icon: Award,
    title: "Funding & Grants",
    desc: "Discover funding opportunities, grants, and investor networks for your startup.",
    btn: "Explore →",
    href: "https://startupradarindia.blogspot.com/",
    color: "magenta",
  },
  {
    icon: Rocket,
    title: "Get Featured",
    desc: "Showcase your startup to thousands. Submit your story and get the spotlight.",
    btn: "Get Featured →",
    href: "#contact",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  cyan: "186 100% 50%",
  magenta: "300 100% 50%",
  purple: "270 100% 50%",
};

const BlogsSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden" id="blogs">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-center neon-text-cyan mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Startup Radar & Blogs
        </motion.h2>
        <motion.p
          className="font-body text-foreground/60 text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Stay ahead with daily tech startup insights, funding opportunities,
          and blog features. We bring the entire startup world to your
          fingertips!
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="neon-card text-center"
              style={{
                borderColor: `hsl(${colorMap[card.color]} / 0.3)`,
                boxShadow: `0 0 20px hsl(${colorMap[card.color]} / 0.08)`,
              }}
              initial={{ opacity: 0, x: i === 0 ? -60 : i === 2 ? 60 : 0, y: i === 1 ? 40 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{
                borderColor: `hsl(${colorMap[card.color]} / 0.7)`,
                boxShadow: `0 0 40px hsl(${colorMap[card.color]} / 0.2)`,
                y: -6,
              }}
            >
              <card.icon
                className="mx-auto mb-4"
                size={36}
                style={{ color: `hsl(${colorMap[card.color]})` }}
              />
              <h3
                className="font-display text-lg font-bold mb-3"
                style={{
                  color: `hsl(${colorMap[card.color]})`,
                  textShadow: `0 0 10px hsl(${colorMap[card.color]} / 0.4)`,
                }}
              >
                {card.title}
              </h3>
              <p className="font-body text-foreground/50 text-sm mb-6 leading-relaxed">
                {card.desc}
              </p>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="neon-btn inline-block text-xs"
                style={{
                  borderColor: `hsl(${colorMap[card.color]} / 0.5)`,
                  color: `hsl(${colorMap[card.color]})`,
                  textShadow: `0 0 8px hsl(${colorMap[card.color]} / 0.4)`,
                  background: `linear-gradient(135deg, hsl(${colorMap[card.color]} / 0.12), transparent)`,
                  boxShadow: `0 0 12px hsl(${colorMap[card.color]} / 0.15)`,
                }}
              >
                {card.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
