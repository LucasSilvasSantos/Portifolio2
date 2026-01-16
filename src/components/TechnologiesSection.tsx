import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    name: "JavaScript",
    description: "Desenvolvimento de aplicações web interativas e dinâmicas",
    level: 95,
    category: "Frontend & Backend",
  },
  {
    name: "TypeScript",
    description: "Tipagem estática para maior segurança e manutenibilidade",
    level: 90,
    category: "Frontend & Backend",
  },
  {
    name: "HTML5",
    description: "Estruturação semântica e acessível de interfaces web",
    level: 95,
    category: "Frontend",
  },
  {
    name: "CSS3",
    description: "Estilização avançada com animações e layouts responsivos",
    level: 90,
    category: "Frontend",
  },
  {
    name: "Node.js",
    description: "APIs RESTful, microserviços e aplicações server-side",
    level: 85,
    category: "Backend",
  },
  {
    name: "Next.js",
    description: "Aplicações React com SSR, SSG e otimização de performance",
    level: 85,
    category: "Full Stack",
  },
  {
    name: "Java",
    description: "Sistemas robustos, APIs e aplicações enterprise",
    level: 80,
    category: "Backend",
  },
  {
    name: "C",
    description: "Programação de baixo nível e sistemas embarcados",
    level: 75,
    category: "Systems",
  },
  {
    name: "C++",
    description: "Aplicações de alto desempenho e processamento intensivo",
    level: 75,
    category: "Systems",
  },
  {
    name: "SQL",
    description: "Modelagem de dados, queries otimizadas e administração",
    level: 85,
    category: "Database",
  },
];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tecnologias" className="py-32 relative">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium code-font mb-4 block">
            // Stack Tecnológico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tecnologias & <span className="gradient-text">Ferramentas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Domínio técnico em linguagens e frameworks modernos, 
            com experiência prática em projetos de diferentes escalas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card glass-card-hover p-6 rounded-xl group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-xs text-primary/70 code-font">{tech.category}</span>
                </div>
                <span className="text-2xl font-bold gradient-text">{tech.level}%</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{tech.description}</p>
              
              {/* Progress bar */}
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${tech.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
