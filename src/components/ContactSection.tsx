import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`HyperTechPortal - Feature Request from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
    window.open(`mailto:e.cell@mescoepune.org?subject=${subject}&body=${body}`);
  };

  return (
    <section className="relative py-20 sm:py-24 px-4 overflow-hidden" id="contact">
      <div className="max-w-xl mx-auto">
        <motion.h2
          className="font-display text-2xl sm:text-3xl font-bold text-center neon-text-magenta mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get Featured
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="neon-card space-y-4 sm:space-y-5"
          style={{
            borderColor: "hsl(300 100% 50% / 0.3)",
            boxShadow: "0 0 25px hsl(300 100% 50% / 0.08)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {(["name", "email"] as const).map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              placeholder={field === "name" ? "Your Name" : "Your Email"}
              required
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              className="w-full rounded-lg border bg-transparent px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/30 outline-none transition-all focus:border-secondary focus:shadow-[0_0_10px_hsl(300_100%_50%/0.2)]"
              style={{ borderColor: "hsl(0 0% 15%)" }}
            />
          ))}
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border bg-transparent px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/30 outline-none resize-none transition-all focus:border-secondary focus:shadow-[0_0_10px_hsl(300_100%_50%/0.2)]"
            style={{ borderColor: "hsl(0 0% 15%)" }}
          />
          <motion.button
            type="submit"
            className="neon-btn neon-btn-magenta w-full flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={16} /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
