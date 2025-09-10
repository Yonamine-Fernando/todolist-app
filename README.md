# TodoList App (React + TypeScript + Vite)

Versão: 1.0.0

Breve
- Aplicação de lista de tarefas feita com Vite, React, TypeScript e Tailwind.
- Persistência em localStorage, tema claro/escuro, fonte custom (public/fonts) e ícones em public/images.
- Projeto pensado para aprendizado e desafio de UI (hover, responsivo, acessibilidade básica).

Demo (local)
- Depois de instalar, rode o dev server em http://localhost:5173 (ou porta usada pelo Vite).

Principais features
- Adicionar tarefa (form)
- Marcar/desmarcar como concluída
- Filtrar: All / Active / Completed
- Remover tarefa (ícone X aparece no hover em desktop; sempre visível no mobile)
- Persistência automática via localStorage
- Fonte custom carregada via @font-face apontando para /fonts/ em public

Stack
- React + TypeScript
- Vite
- Tailwind CSS
- Hooks customizados (src/hooks/useTodo.ts)

Começando (macOS / Linux / Windows)
1. Instalar dependências
   npm install

2. Rodar em desenvolvimento (Vite)
   npm run dev

3. Build para produção
   npm run build

4. Testar build localmente
   npm run preview

Dicas e problemas comuns
- Fonts em public:
  - Arquivos dentro de public são servidos na raiz. No CSS use: src: url("/fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
  - Preferível converter .ttf para .woff2 para melhoria de performance (woff2_compress no macOS via brew).
- Import de assets:
  - Não importe arquivos diretamente de /public (ex: import Icon from "../public/...") — use URLs públicas: src="/images/icon-cross.svg" ou mova os assets para src/assets e importe normalmente.
- Fast Refresh warning:
  - "Fast Refresh só funciona quando um arquivo exporta apenas componentes..." → mova contexts/Providers para arquivos separados e exporte um ThemeProvider que passa o value.
- LocalStorage:
  - A persistência está implementada em src/hooks/useTodo.ts:
    - Leitura inicial (safe JSON parse)
    - useEffect para gravar sempre que todoList muda
- Ícone de remover com hover (Tailwind):
  - Marque o item como container `group`.
  - Botão: padrão mobile visível; em desktop escondido e exibido via `sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`.
  - Exemplo de classes: `absolute right-4 top-1/2 -translate-y-1/2 opacity-100 pointer-events-auto sm:opacity-0 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto`
  - Ajuste padding (ex: `pr-10`) no parágrafo para não sobrepor o botão.

Estrutura do projeto
- public/
  - fonts/ (JosefinSans-VariableFont_wght.ttf)
  - images/ (ícones e fundos)
- src/
  - components/
    - TodoContainer, TodoHeader, TodoForm, TodoList
  - hooks/
    - useTodo.ts
  - styles/
    - globals.css (Tailwind + @font-face)
  - App.tsx, main/index.tsx


EN — English section
# TodoList App (React + TypeScript + Vite)

Short
- Todo app built with Vite, React, TypeScript and Tailwind.
- LocalStorage persistence, light/dark theme, custom font (public/fonts) and icons in public/images.

How to run
- Install dependencies:
  npm install
- Run dev server:
  npm run dev
- Build:
  npm run build
- Preview build:
  npm run preview

Project layout
- public/ (fonts, images)
- src/ (components, hooks/useTodo.ts, styles/globals.css)

Persistence
- useTodo reads initial state from localStorage and writes on each update (safe JSON parse + try/catch).

Contribute & License
- Open issues, fork, PR. Add a license file (e.g., MIT).

---
