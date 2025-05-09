# Quiz de Programação

Este é um projeto de um **Quiz de Programação** desenvolvido com **React** e **Vite**. O objetivo do projeto é criar um quiz interativo com perguntas sobre HTML, CSS e JavaScript, permitindo que os usuários escolham uma categoria e respondam às perguntas de forma dinâmica.

## Funcionalidades

- **Seleção de Categoria**: O usuário pode escolher entre as categorias HTML, CSS e JavaScript.
- **Perguntas Dinâmicas**: Cada categoria possui um conjunto de perguntas que são exibidas uma por vez.
- **Navegação Simples**: Implementada com React Router para gerenciar as rotas entre as páginas.
- **Estilização Personalizada**: Utiliza CSS para criar uma interface amigável e responsiva.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **React Router**: Gerenciamento de rotas no aplicativo.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **CSS**: Estilização personalizada para os componentes.

## Estrutura do Projeto

- **`public/`**: Contém os arquivos estáticos, como imagens (`welldone.svg`, `category.svg`).
- **`src/`**: Contém o código-fonte do projeto.
  - **`routes/`**: Componentes de páginas, como `Home`, `Categoria`, `HtmlForm`, `CssForm` e `JavascriptForm`.
  - **`components/`**: Componentes reutilizáveis, como `Button` e perguntas específicas para cada categoria.
  - **`data/`**: Arquivos com as perguntas do quiz.
  - **`assets/`**: Recursos adicionais, como imagens do React.
- **index.html**: Ponto de entrada do aplicativo.
- **vite.config.js**: Configuração do Vite.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o aplicativo no navegador:
   ```
   http://localhost:3000
   ```
