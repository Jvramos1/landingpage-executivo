import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section container">
      <div className="footer-top">
        <h2 className="footer-heading">
          Pronto para <br />
          <span className="text-gradient">elevar</span> seu produto?
        </h2>
        <motion.button 
          className="cta-button glass-panel footer-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Iniciar Conversa</span>
          <ArrowRight size={24} />
        </motion.button>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Executive Digital. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
