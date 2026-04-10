import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import ParticleField from "@/components/ParticleField";
import GlowingLines from "@/components/GlowingLines";
import MusicToggle from "@/components/MusicToggle";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EcellSection from "@/components/EcellSection";
import XtnSection from "@/components/XtnSection";
import AiToolsSection from "@/components/AiToolsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollHeadingType } from "@/hooks/useScrollHeadingType";

const MainContent = () => {
  useScrollHeadingType();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ParticleField />
      <GlowingLines />
      <Navbar />
      <MusicToggle />
      <HeroSection />
      <EcellSection />
      <XtnSection />
      <AiToolsSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

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
      {!loading && <MainContent />}
    </>
  );
};

export default Index;
