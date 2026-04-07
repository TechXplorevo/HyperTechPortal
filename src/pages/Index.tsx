import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import ParticleField from "@/components/ParticleField";
import MusicToggle from "@/components/MusicToggle";
import HeroSection from "@/components/HeroSection";
import EcellSection from "@/components/EcellSection";
import XtnSection from "@/components/XtnSection";
import AiToolsSection from "@/components/AiToolsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ParticleField />
          <MusicToggle />
          <HeroSection />
          <EcellSection />
          <XtnSection />
          <AiToolsSection />
          <BlogsSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
