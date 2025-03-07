# News Explorer Frontend

## Sobre o Projeto

O **News Explorer** é uma aplicação frontend que permite aos usuários buscar notícias do mundo inteiro com base em uma palavra-chave digitada na barra de pesquisa. As notícias são exibidas em forma de cartões na página principal.

Quando um usuário está logado, ele tem a opção de salvar ou remover notícias. Além disso, existe uma página exclusiva para visualizar todas as notícias salvas.

## Tecnologias Utilizadas

- **React** com **Vite** para otimização e desenvolvimento rápido
- **NewsAPI** - para obtenção das notícias
- **API Backend** - para armazenamento e gerenciamento de usuários e notícias salvas

## Funcionalidades

- Buscar notícias através de uma palavra-chave.
- Exibir as notícias em forma de cartões.
- Criar conta e fazer login.
- Salvar e remover notícias ao fazer login.
- Visualizar todas as notícias salvas em uma página dedicada.
- Persistência das notícias salvas no backend.

## Domínios

#### Frontend - https://newsexplorer.serverpit.com

#### Backend - https://api.newsexplorer.serverpit.com

## Como Rodar o Projeto localmente

### 1. Clone o repositório:

```sh
  git clone git@github.com:cesar-matsubayashi/news-explorer-frontend.git
```

### 2. Acesse a pasta do projeto:

```sh
  cd news-explorer-frontend
```

### 3. Instale as dependências:

```sh
  npm install
```

### 4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes linhas:

```sh
VITE_NEWS_API_URL=https://newsapi.org/v2
VITE_NEWS_API_KEY=SUA_CHAVE_AQUI
VITE_MAIN_API_URL=https://api.newsexplorer.serverpit.com
```

Para referência, um arquivo `.env.example` foi incluído no projeto:

```sh
# Configuração da API de notícias
VITE_NEWS_API_URL=

# Configuração da  chave API de notícias
VITE_NEWS_API_KEY=

# Configuração da API backend
VITE_MAIN_API_URL=
```

### 5. Inicie o servidor de desenvolvimento:

```sh
  npm run dev
```

O projeto será iniciado e estará disponível no navegador no endereço indicado pelo Vite.

## Configuração da API Backend

Para que as notícias salvas sejam armazenadas corretamente, é necessário configurar a API backend. Certifique-se de que o backend está rodando e configurado corretamente para aceitar requisições da aplicação frontend.

## Autor

Projeto desenvolvido por **[Cesar Matsubayashi](https://github.com/cesar-matsubayashi)**.
