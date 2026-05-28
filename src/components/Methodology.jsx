import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Methodology.css';

const steps = [
  {
    number: "01",
    title: "Descoberta Profunda",
    desc: "Antes de desenhar qualquer tela, mergulhamos no núcleo do seu negócio. Analisamos seu mercado, público e os gargalos invisíveis que limitam sua conversão."
  },
  {
    number: "02",
    title: "Direção de Arte Estratégica",
    desc: "Desenvolvemos uma linguagem visual única que posiciona sua marca no topo. Não usamos templates; cada curva e tipografia são escolhidas para comunicar autoridade."
  },
  {
    number: "03",
    title: "Engenharia de Performance",
    desc: "Nosso código é construído para a velocidade. Utilizamos React e animações assistidas por hardware para garantir que a experiência premium não custe o tempo do usuário."
  }
];

export default function Methodology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="methodology-section section container">
      <div className="methodology-layout">
        <div className="methodology-sticky">
          <h2>Nossa<br/>Metodologia.</h2>
          <p>O processo por trás da excelência. Da estratégia à execução impecável.</p>
        </div>
        
        <div className="methodology-content">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="methodology-step glass-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
