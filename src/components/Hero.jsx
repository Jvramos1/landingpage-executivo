import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Efeito Parallax sutil: a imagem desce 30% mais devagar que o scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const titleVariants = {
    hidden: { y: 100, opacity: 0, rotateX: 20 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={containerRef} className="hero-section">
      <motion.div 
        className="hero-image-wrapper"
        style={{ y, opacity }}
      >
        <div className="hero-image-overlay"></div>
        <img src="/hero-bg.png" alt="Executive Architecture" className="hero-image" />
      </motion.div>

      <div className="hero-content container">
        <div className="hero-overflow">
          <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={titleVariants}
            className="hero-title"
          >
            Digital <span className="text-gradient">Excellence.</span>
          </motion.h1>
        </div>
        <div className="hero-overflow">
          <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={titleVariants}
            transition={{ delay: 0.1 }}
            className="hero-title"
          >
            Elevated.
          </motion.h1>
        </div>
        
        <motion.div 
          className="hero-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            Construímos interfaces autorais e sofisticadas para 
            corporações que exigem presença digital premium.
          </p>
          <button className="cta-button glass-panel">
            <span>Iniciar Projeto</span>
            <ArrowRight size={20} className="cta-icon" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
