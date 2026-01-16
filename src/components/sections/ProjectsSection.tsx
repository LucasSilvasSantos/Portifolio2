import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Layers, Lightbulb, Wrench, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";

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
