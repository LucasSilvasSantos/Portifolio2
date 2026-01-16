import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Layers, Lightbulb, Wrench, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: "Finalizado" | "Em desenvolvimento";
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão Empresarial",
    shortDescription: "Plataforma web completa para gerenciamento de processos internos e análise de dados.",
    fullDescription: "Sistema modular desenvolvido para otimizar operações empresariais, incluindo módulos de vendas, estoque, financeiro e relatórios analíticos. Interface intuitiva com dashboards em tempo real.",
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    status: "Finalizado",
    problem: "Empresa enfrentava dificuldades com processos manuais e dispersos em múltiplas ferramentas, resultando em perda de dados e ineficiência operacional.",
    solution: "Desenvolvimento de uma plataforma unificada com automação de processos, integração de dados e dashboards para tomada de decisão.",
    architecture: "Arquitetura monolítica modular com separação clara de responsabilidades. API RESTful, banco de dados relacional e cache distribuído para otimização.",
    challenges: "Migração de dados legados, integração com sistemas existentes e garantia de alta disponibilidade durante a transição.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "API de Processamento de Dados",
    shortDescription: "Microserviço de alta performance para processamento e análise de grandes volumes de dados.",
    fullDescription: "API desenvolvida para processar milhões de registros em tempo real, com pipeline de transformação de dados, validação e armazenamento otimizado.",
    technologies: ["Java", "Spring Boot", "Kafka", "MongoDB", "Redis"],
    status: "Finalizado",
    problem: "Necessidade de processar grandes volumes de dados de múltiplas fontes com baixa latência e alta confiabilidade.",
    solution: "Implementação de arquitetura orientada a eventos com filas de mensagens e processamento assíncrono.",
    architecture: "Microserviços com comunicação via message broker, banco NoSQL para flexibilidade de schema e cache para consultas frequentes.",
    challenges: "Garantir consistência eventual, implementar circuit breakers e manter throughput durante picos de demanda.",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    shortDescription: "Interface de visualização de dados com gráficos interativos e relatórios customizáveis.",
    fullDescription: "Painel administrativo com visualizações de dados em tempo real, filtros avançados, exportação de relatórios e alertas configuráveis.",
    technologies: ["React", "TypeScript", "D3.js", "TailwindCSS", "GraphQL"],
    status: "Finalizado",
    problem: "Dados dispersos em múltiplos sistemas dificultavam a análise e tomada de decisão rápida.",
    solution: "Dashboard centralizado com agregação de dados, visualizações interativas e sistema de notificações.",
    architecture: "SPA com state management centralizado, camada de cache para dados frequentes e websockets para atualizações em tempo real.",
    challenges: "Renderização performática de grandes datasets, responsividade em diferentes dispositivos e customização por usuário.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Sistema de Automação",
    shortDescription: "Ferramenta CLI para automação de tarefas de desenvolvimento e deploy.",
    fullDescription: "Conjunto de scripts e ferramentas para automatizar processos de build, testes, deploy e monitoramento de aplicações.",
    technologies: ["C++", "Python", "Bash", "Docker", "GitHub Actions"],
    status: "Em desenvolvimento",
    problem: "Processos manuais repetitivos consumiam tempo da equipe e eram propensos a erros humanos.",
    solution: "Toolkit de automação com scripts reutilizáveis, templates e integração com pipelines CI/CD.",
    architecture: "CLI modular com plugins extensíveis, configuração via arquivos YAML e integração com APIs de serviços cloud.",
    challenges: "Manter compatibilidade entre diferentes sistemas operacionais e versões de dependências.",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    shortDescription: "Plataforma de comércio eletrônico com carrinho, pagamentos e gestão de pedidos.",
    fullDescription: "Sistema completo de e-commerce com catálogo de produtos, checkout otimizado, integração com gateways de pagamento e painel administrativo.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    status: "Finalizado",
    problem: "Cliente necessitava de presença digital para vendas com processo de compra simplificado e gestão integrada.",
    solution: "Plataforma responsiva com foco em conversão, múltiplos métodos de pagamento e dashboard de vendas.",
    architecture: "Jamstack com SSG para páginas de produto, API routes para backend e webhooks para integrações.",
    challenges: "Segurança em transações financeiras, otimização de performance e gestão de inventário em tempo real.",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Compilador Educacional",
    shortDescription: "Compilador didático para linguagem simplificada com análise léxica e sintática.",
    fullDescription: "Projeto acadêmico de compilador com todas as fases: análise léxica, sintática, semântica e geração de código intermediário.",
    technologies: ["C", "Flex", "Bison", "Assembly"],
    status: "Finalizado",
    problem: "Necessidade de ferramenta educacional para demonstrar conceitos de compilação e teoria de linguagens.",
    solution: "Implementação completa de um compilador para linguagem simplificada com mensagens de erro detalhadas.",
    architecture: "Pipeline tradicional de compilação com separação clara entre fases e geração de código para máquina virtual.",
    challenges: "Tratamento adequado de erros, otimização de código gerado e documentação didática do processo.",
    githubUrl: "https://github.com",
  },
];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    project.status === "Finalizado"
                      ? "bg-primary/20 text-primary"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground code-font">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground">{project.fullDescription}</p>

            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Lightbulb size={18} />
                <h4 className="font-semibold">Problema</h4>
              </div>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </div>

            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Wrench size={18} />
                <h4 className="font-semibold">Solução</h4>
              </div>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>

            <div className="glass-card p-5 rounded-xl">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Layers size={18} />
                <h4 className="font-semibold">Arquitetura</h4>
              </div>
              <p className="text-sm text-muted-foreground">{project.architecture}</p>
            </div>

            <div className="glass-card p-5 rounded-xl">
              <h4 className="font-semibold mb-3">Desafios & Soluções</h4>
              <p className="text-sm text-muted-foreground">{project.challenges}</p>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg hover:border-primary/30 transition-all"
                >
                  <Github size={18} />
                  Repositório
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all"
                >
                  <ExternalLink size={18} />
                  Ver Projeto
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium code-font mb-4 block">
            // Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos <span className="gradient-text">Selecionados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seleção de projetos que demonstram experiência prática em diferentes 
            tecnologias e domínios de aplicação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card glass-card-hover rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.status === "Finalizado"
                        ? "bg-primary/20 text-primary"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary rounded code-font"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
