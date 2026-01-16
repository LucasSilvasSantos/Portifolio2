# Contribuindo para o Portfólio

Obrigado por considerar contribuir para este projeto! 🎉

## Como Contribuir

### Reportando Bugs

Se você encontrar um bug, por favor abra uma issue incluindo:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Informações do ambiente (navegador, versão, etc)

### Sugerindo Melhorias

Sugestões de melhorias são sempre bem-vindas! Ao abrir uma issue de feature request, inclua:

- Descrição clara da funcionalidade
- Justificativa (por que seria útil)
- Possível implementação (se tiver ideias)

### Pull Requests

1. **Fork o repositório**
2. **Crie uma branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Faça commit** das suas alterações (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. **Abra um Pull Request**

### Padrões de Código

#### Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona ou corrige testes
chore: mudanças em ferramentas/config
```

#### TypeScript

- Use TypeScript para todo código novo
- Defina tipos explicitamente
- Evite `any` - use `unknown` se necessário

#### Componentes React

```tsx
// ✅ Bom
export const MyComponent = () => {
  return <div>Content</div>;
};

// ❌ Evite
export default function MyComponent() {
  return <div>Content</div>;
}
```

#### Estilização

- Use classes do Tailwind sempre que possível
- Para estilos customizados, adicione no CSS global com comentários
- Mantenha consistência com o design system existente

### Testes

- Adicione testes para novas funcionalidades
- Execute `npm run test` antes de fazer commit
- Mantenha cobertura de testes acima de 70%

### Processo de Review

- Todos os PRs passam por code review
- CI/CD deve passar (build, testes, lint)
- Pelo menos 1 aprovação necessária
- Mantenha PRs focados e pequenos

## Estrutura de Branches

- `main` - Produção (protegida)
- `develop` - Desenvolvimento
- `feature/*` - Novas features
- `fix/*` - Correções de bugs
- `docs/*` - Documentação

## Ambiente de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar dev server
npm run dev

# Rodar testes
npm run test

# Lint
npm run lint

# Build
npm run build
```

## Dúvidas?

Se tiver dúvidas, sinta-se à vontade para:

- Abrir uma issue
- Entrar em contato: contato@exemplo.com

---

**Obrigado por contribuir! 🚀**
