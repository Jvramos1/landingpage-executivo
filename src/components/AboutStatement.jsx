import { motion } from 'framer-motion';
import './AboutStatement.css';

const text = "Não criamos apenas sites. Construímos infraestruturas digitais resilientes com estética de classe mundial. Onde engenharia complexa encontra design invisível.";

export default function AboutStatement() {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0.1, y: 15, color: "#4a4a50" },
    visible: { 
      opacity: 1, 
      y: 0, 
      color: "#f2f2f3",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="about-section section container">
      <div className="glow-background" />
      
      <motion.h2 
        className="about-statement-text"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }} 
      >
        {words.map((word, i) => (
          <span key={i} className="word-wrapper">
            <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </section>
  );
}
