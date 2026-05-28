import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Metrics.css';

const data = [
  { value: '15+', label: 'Anos de Mercado' },
  { value: '120+', label: 'Projetos Entregues' },
  { value: 'R$ 2B+', label: 'Valor Gerado para Clientes' },
  { value: '40+', label: 'Prêmios de Design' }
];

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section ref={ref} className="metrics-section section container">
      <div className="metrics-grid">
        {data.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="metric-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="metric-value text-gradient">{item.value}</h3>
            <p className="metric-label">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
