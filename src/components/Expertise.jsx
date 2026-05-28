import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Expertise.css';

const services = [
  { id: '01', title: 'Direção de Arte', desc: 'Identidade visual para produtos digitais.' },
  { id: '02', title: 'Engenharia Frontend', desc: 'Arquiteturas performáticas com React & WebGL.' },
  { id: '03', title: 'Motion Design', desc: 'Animações fluidas e intencionais.' },
  { id: '04', title: 'Estratégia de Produto', desc: 'Consultoria e visão de negócio.' }
];

export default function Expertise() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="expertise-section section container">
      <div className="expertise-header">
        <h2>Expertise.</h2>
        <p>Serviços focados em elevar a percepção de valor.</p>
      </div>

      <div className="expertise-list">
        {services.map((service, idx) => (
          <div 
            key={service.id}
            className="expertise-item"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="expertise-num">{service.id}</span>
            <div className="expertise-content">
              <h3>{service.title}</h3>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hovered === idx ? 'auto' : 0, 
                  opacity: hovered === idx ? 1 : 0 
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                {service.desc}
              </motion.p>
            </div>
            <div className="expertise-icon">
              <ArrowUpRight size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
