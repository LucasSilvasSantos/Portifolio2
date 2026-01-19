import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/LucasSilvasSantos",
    description: "Código e projetos open source",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lucas-silva-santos10/",
    description: "Perfil profissional",
  },
  {
    name: "E-mail",
    icon: Mail,
    href: "lucsantos820@gmail.com",
    description: "lucsantos820@gmail.com",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-medium code-font mb-4 block">
            // Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Interessado em discutir projetos, colaborações ou oportunidades técnicas?
            Entre em contato através dos canais abaixo.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "E-mail" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-xl group"
              >
                <div className="flex items-center justify-center mb-4">
                  <link.icon
                    size={32}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
                <h3 className="font-semibold mb-1 flex items-center justify-center gap-1">
                  {link.name}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
