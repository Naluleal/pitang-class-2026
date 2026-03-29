# Pitang.commerce - Dashboard & Auth System

Este projeto é uma **Single Page Application (SPA)** moderna desenvolvida para o desafio da Pitang Class 2026. A aplicação foca em uma experiência de usuário fluida, utilizando gestão avançada de rotas e proteções de autenticação.

## 🚀 Tecnologias Utilizadas

- **React 18** + **Vite**
- **TanStack Router**: Gerenciamento de rotas tipado e navegação SPA.
- **Shadcn/UI**: Componentes de interface modernos e acessíveis.
- **Tailwind CSS**: Estilização responsiva.
- **Lucide React**: Biblioteca de ícones.
- **React Hook Form**: Manipulação eficiente de formulários.

## 🛠️ Funcionalidades Implementadas

### 1. Landing Page Criativa
- Página inicial completa com **Hero Section**, **Header** e **Footer**.
- Botões de Call-to-Action (CTA) integrados ao sistema de rotas.

### 2. Sistema de Autenticação (Auth Guards)
- **Proteção de Rota Privada**: Usuários não autenticados que tentam acessar o `/dashboard` são redirecionados automaticamente para o `/login`.
- **Redirecionamento de Usuário Logado**: Caso um usuário com sessão ativa tente acessar `/login` ou `/register`, ele é enviado diretamente para o `/dashboard`.
- **Persistência**: Integração preparada para tokens de autenticação (ex: DummyJSON).

### 3. Navegação SPA de Alta Performance
- **Zero Refresh**: Toda a navegação entre Dashboard, Produtos e Usuários ocorre sem recarregamento da página.
- **Uso do `<Link>`**: Implementação rigorosa das boas práticas do `@tanstack/router`.
- **Componentes asChild**: Integração perfeita entre elementos de navegação e componentes de estilo (Shadcn).

### 4. Deploy & Infraestrutura
- Hospedagem realizada na **Vercel**.
- Configuração de `rewrites` via `vercel.json` para suporte a rotas dinâmicas em ambiente de produção.
