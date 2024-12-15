# FletisZiMovies

Este projeto tem como objetivo explorar e desafiar suas habilidades no desenvolvimento e consumo de APIs. Ele realiza buscas em um servidor que armazena uma lista de filmes, proporcionando acesso a sinopses detalhadas e informações adicionais sobre cada título.

# Requisitos

Antes de iniciar o projeto, é necessário ter os seguintes itens instalados:

- **Editor de texto**: No meu caso, utilizaremos o [VS Code](https://code.visualstudio.com/) (você pode usar o editor de sua preferência).
- **Node.js**: Para poder usar o NPM e instalar os pacotes necessários para o projeto. Baixe e instale o Node.js a partir do [site oficial](https://nodejs.org/).

# Fase Inicial

## Iniciar o Projeto

Agora, vamos dar início ao nosso projeto Node.js. Siga os passos abaixo para começar.

1. **Iniciar o projeto com o NPM**

   No terminal, dentro do diretório do seu projeto, execute o seguinte comando para iniciar o gerenciamento de pacotes:

   ```bash
   npm init

   ```

2. **Instalar as Dependências do Projeto**

    Para construir nosso site, precisaremos de algumas dependências essenciais, como o **Next.js**, **MySQL**, e **React**. Siga os passos abaixo para instalar as versões específicas dessas bibliotecas.


   Abra o terminal no diretório do seu projeto e execute os seguintes comandos para instalar as versões necessárias dos pacotes:

   ```bash
   npm install mysql@2.18.1          #instalação da versão 2.18.1 do mysql
   ```
   ```bash
   npm install next@13.1.6           #instalação da versão 13.1.6 do next
   ```
   ```bash
   npm install react@18.2.0         #instalação da versão 18.2.0 do react
   ```
   ```bash
   npm install react-dom@18.2.0     #instalação da versão 18.2.0 do react-dom
   ```
   Recomendamos o uso dessas versões específicas, pois foram testadas e validadas em ambiente de produção, garantindo maior estabilidade e compatibilidade para o seu projeto.

    **Exmplificando estrutura de pastas do projeto:**


 ```bash
    ├── node_modules/           # Diretório com pacotes instalados (gerenciado pelo npm/yarn)
    ├── public/                 # Arquivos públicos (imagens, favicon, etc.)
    │   ├── favicon.ico
    │   └── ...
    ├── src/                    # Código fonte da aplicação (opcional, mas recomendado)
    │   ├── pages/              # Páginas da aplicação (cada arquivo aqui é uma rota)
    │   │   ├── api/            # Endpoints da API (para rotas de backend)
    │   │   ├── _app.js         # Componente raiz da aplicação
    │   │   └── index.js        # Página inicial
    │   ├── components/         # Componentes reutilizáveis (botões, cabeçalhos, etc.)
    │   └── styles/             # Arquivos de estilo (CSS, Sass, etc.)
    ├── .gitignore              # Arquivo para ignorar arquivos do Git
    ├── package.json            # Gerenciador de pacotes (dependências, scripts, etc.)
    └── README.md               # Arquivo de documentação do projeto
```

