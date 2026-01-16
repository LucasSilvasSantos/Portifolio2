<div align="center">

# 💼 Portfólio Profissional

### Portfólio moderno e responsivo construído com React, TypeScript e Tailwind CSS

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://your-portfolio-url.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

![Portfolio Preview](public/preview.png)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Começando](#-começando)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Decisões Arquiteturais](#-decisões-arquiteturais)
- [Performance](#-performance)
- [Deploy](#-deploy)
- [Roadmap](#-roadmap)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este é um portfólio profissional desenvolvido para demonstrar habilidades técnicas em desenvolvimento front-end moderno. O projeto foi construído com foco em **performance**, **acessibilidade** e **experiência do usuário**.

### Objetivos

- ✅ Apresentar projetos de forma profissional e organizada
- ✅ Demonstrar domínio de tecnologias modernas
- ✅ Criar uma experiência de usuário fluida e responsiva
- ✅ Manter código limpo, documentado e manutenível
- ✅ Alcançar pontuação Lighthouse 90+

---

## ✨ Características

- 🎨 **Design Moderno**: Interface minimalista com efeitos glassmorphism e animações suaves
- 📱 **Totalmente Responsivo**: Otimizado para todos os dispositivos (mobile, tablet, desktop)
- ⚡ **Performance Otimizada**: Lazy loading, code splitting e otimizações de build
- 🌙 **Modo Escuro**: Tema dark por padrão com sistema de cores customizável
- ♿ **Acessível**: Seguindo diretrizes WCAG para acessibilidade
- 🎭 **Animações**: Transições suaves com Framer Motion
- 🧩 **Componentização**: Componentes reutilizáveis e bem documentados
- 📦 **Type-Safe**: TypeScript para segurança de tipos
- 🎯 **SEO Friendly**: Meta tags e estrutura otimizada para SEO

---

## 🚀 Tecnologias

### Core

- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5.6](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Vite](https://vitejs.dev/)** - Build tool e dev server

### Estilização

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Framer Motion](https://www.framer.com/motion/)** - Animações e transições

### Ferramentas

- **[React Router](https://reactrouter.com/)** - Roteamento
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado assíncrono
- **[Lucide Icons](https://lucide.dev/)** - Biblioteca de ícones
- **[Vitest](https://vitest.dev/)** - Framework de testes

### Qualidade de Código

- **ESLint** - Linting
- **PostCSS** - Processamento CSS
- **TypeScript** - Type checking

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── sections/              # Seções da página principal
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TechnologiesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout/                # Componentes de layout
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── NavLink.tsx
│   └── ui/                    # Componentes UI reutilizáveis (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── data/                      # Dados estáticos separados dos componentes
│   ├── projects.ts           # Lista de projetos
│   ├── technologies.ts       # Stack tecnológico
│   └── about.ts              # Informações sobre
├── types/                     # Definições TypeScript
│   └── index.ts
├── hooks/                     # Custom hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                       # Utilitários
│   └── utils.ts
├── pages/                     # Páginas/Rotas
│   ├── Index.tsx
│   └── NotFound.tsx
├── styles/                    # Estilos globais
│   └── index.css
├── App.tsx                    # Componente raiz
└── main.tsx                   # Entry point
```

### Por que essa estrutura?

- **Separação de Responsabilidades**: Dados separados de componentes facilita manutenção
- **Escalabilidade**: Fácil adicionar novas seções sem bagunçar o código
- **Reutilização**: Componentes UI isolados podem ser usados em múltiplos contextos
- **Type Safety**: Types centralizados garantem consistência
- **Organização Clara**: Desenvolvedores encontram arquivos rapidamente

---

## 🏁 Começando

### Pré-requisitos

- **Node.js** 18+ ou **Bun** (recomendado)
- **npm** ou **yarn** ou **bun**

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio
```

2. **Instale as dependências**
```bash
# Com npm
npm install

# Com yarn
yarn install

# Com bun (mais rápido)
bun install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
bun dev
```

4. **Abra no navegador**
```
http://localhost:5173
```

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Build de produção
npm run build:dev    # Build em modo desenvolvimento

# Preview
npm run preview      # Preview do build de produção

# Testes
npm run test         # Executa testes
npm run test:watch   # Executa testes em modo watch

# Qualidade de Código
npm run lint         # Executa ESLint
```

---

## 🏗️ Decisões Arquiteturais

### 1. **Separação de Dados e Componentes**

**Por quê?** Facilita manutenção e permite editar conteúdo sem mexer em código de UI.

```typescript
// ❌ Antes: Dados dentro do componente
const ProjectsSection = () => {
  const projects = [/* dados aqui */];
  // ...
}

// ✅ Depois: Dados separados
import { projects } from "@/data/projects";
const ProjectsSection = () => {
  // Componente focado apenas em UI
}
```

### 2. **TypeScript para Type Safety**

Todas as entidades têm interfaces bem definidas:

```typescript
interface Project {
  id: number;
  title: string;
  technologies: string[];
  // ...
}
```

### 3. **Componentes Pequenos e Focados**

Cada componente tem uma única responsabilidade. Exemplo: `ProjectModal` está separado de `ProjectsSection`.

### 4. **Performance First**

- Lazy loading de componentes
- Otimização de imagens
- Code splitting automático pelo Vite
- Animações com `will-change` e GPU acceleration

### 5. **Acessibilidade**

- Navegação por teclado
- Áreas clicáveis adequadas
- Contraste de cores adequado (WCAG AA)
- Atributos ARIA onde necessário

---

## ⚡ Performance

### Métricas Lighthouse

| Métrica | Score |
|---------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Otimizações Implementadas

- ✅ **Code Splitting**: Componentes carregados sob demanda
- ✅ **Lazy Loading**: Imagens e seções carregadas progressivamente
- ✅ **Tree Shaking**: Remoção de código não utilizado
- ✅ **Minificação**: CSS e JS minificados em produção
- ✅ **Caching**: Estratégias de cache adequadas
- ✅ **Font Optimization**: Fontes carregadas de forma otimizada

---

## 🚢 Deploy

### Vercel (Recomendado)

1. **Faça push para o GitHub**
2. **Importe no Vercel**
3. **Deploy automático** ✅

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# Configure o GitHub Pages para usar a pasta dist/
```

---

## 🗺️ Roadmap

### ✅ Concluído

- [x] Setup inicial do projeto
- [x] Estrutura de componentes
- [x] Design responsivo
- [x] Animações com Framer Motion
- [x] Separação de dados

### 🚧 Em Progresso

- [ ] Adicionar blog integrado
- [ ] Implementar CMS headless
- [ ] Multi-idioma (i18n)

### 📋 Futuro

- [ ] Dark/Light mode toggle
- [ ] Filtros de projetos por tecnologia
- [ ] Formulário de contato funcional
- [ ] Analytics (Google Analytics/Plausible)
- [ ] Testes E2E com Playwright

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- Email: contato@exemplo.com

---

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) pela biblioteca de componentes
- [Lucide](https://lucide.dev/) pelos ícones
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- Comunidade React e TypeScript

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Feito com ❤️ e ☕

</div>
