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
