# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2026-01-16

### ✨ Adicionado

- **Estrutura de Projeto Reorganizada**
  - Separação de dados dos componentes (`/data`)
  - Organização em seções (`/components/sections`)
  - Componentes de layout (`/components/layout`)
  - Types centralizados (`/types`)

- **Documentação Profissional**
  - README.md completo com guias de instalação e uso
  - CONTRIBUTING.md com guidelines de contribuição
  - LICENSE (MIT)
  - CHANGELOG.md

- **CI/CD**
  - GitHub Actions para build e testes automáticos
  - Análise de tamanho de build
  - Code quality checks

- **Testes**
  - Testes unitários para componentes
  - Validação de dados
  - Testes de utilidades

- **Performance**
  - Componente SEO para meta tags
  - Estrutura preparada para lazy loading
  - Otimizações de build

### 📁 Estrutura

```
src/
├── components/
│   ├── sections/     # Seções da página
│   ├── layout/       # Layout components
│   └── ui/          # UI components
├── data/            # Dados separados
├── types/           # TypeScript types
├── styles/          # Estilos globais
└── pages/           # Rotas
```

### 🔧 Melhorias

- Separação clara de responsabilidades
- Código mais manutenível e escalável
- Type safety melhorada
- Documentação completa

---

## [0.1.0] - 2026-01-15

### Adicionado

- Setup inicial do projeto com Vite + React + TypeScript
- Componentes básicos do portfólio
- Estilização com Tailwind CSS e shadcn/ui
- Animações com Framer Motion
- Design responsivo

---

**Legenda:**
- ✨ Adicionado - Novas features
- 🔧 Melhorado - Melhorias em features existentes
- 🐛 Corrigido - Bug fixes
- 🗑️ Removido - Features removidas
- 📝 Documentação - Mudanças em documentação
- 🔒 Segurança - Correções de segurança
