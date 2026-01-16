import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Desenvolvimento orientado a métricas e entrega de valor real para o negócio.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações otimizadas com arquitetura escalável e código de alta qualidade.",
  },
  {
    icon: Briefcase,
    title: "Experiência Prática",
    description: "Projetos reais com aplicação de boas práticas e padrões de mercado.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizado Contínuo",
    description: "Atualização constante em novas tecnologias e metodologias de desenvolvimento.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text Content */}
            <div>
              <span className="text-primary text-sm font-medium code-font mb-4 block">
                // Sobre
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Desenvolvedor com foco em{" "}
                <span className="gradient-text">excelência técnica</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Profissional de Tecnologia da Informação com experiência sólida em desenvolvimento 
                  web e software. Atuo na criação de soluções digitais que combinam código limpo, 
                  arquitetura bem estruturada e interfaces modernas.
                </p>
                <p>
                  Minha abordagem é orientada à resolução de problemas complexos através de 
                  análise criteriosa e implementação eficiente. Priorizo a qualidade do código, 
                  documentação adequada e manutenibilidade a longo prazo.
                </p>
                <p>
                  Experiência com metodologias ágeis, versionamento de código, integração contínua 
                  e práticas modernas de desenvolvimento que garantem entregas consistentes e 
                  produtos de alta qualidade.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card glass-card-hover p-6 rounded-xl"
                >
                  <item.icon className="text-primary mb-4" size={28} />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
