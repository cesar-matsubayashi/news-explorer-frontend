# News Explorer Frontend

## Sobre o Projeto

O **News Explorer** é uma aplicação frontend que permite aos usuários buscar notícias do mundo inteiro com base em uma palavra-chave digitada na barra de pesquisa. As notícias são exibidas em forma de cartões na página principal.

Quando um usuário está logado, ele tem a opção de salvar ou remover notícias. Além disso, existe uma página exclusiva para visualizar todas as notícias salvas.

## Tecnologias Utilizadas

- **React** (com Vite para otimização e desenvolvimento rápido)
- **NewsAPI** (para obtenção das notícias)
- **LocalStorage** (para armazenamento temporário das notícias salvas)

## Funcionalidades

- Buscar notícias através de uma palavra-chave.
- Exibir as notícias em forma de cartões.
- Salvar e remover notícias ao fazer login.
- Visualizar todas as notícias salvas em uma página dedicada.
- Armazenar temporariamente as notícias salvas no **LocalStorage**.

## Como Rodar o Projeto

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

### 4. Inicie o servidor de desenvolvimento:

```sh
  npm run dev
```

O projeto será iniciado e estará disponível no navegador no endereço indicado pelo Vite.

## Configuração da API

Para que a busca de notícias funcione corretamente, é necessário configurar a **NewsAPI**:

1. Crie uma conta em [NewsAPI](https://newsapi.org/).
2. Gere uma chave de API.
3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes linhas:
   ```sh
   VITE_NEWS_API_URL=https://newsapi.org/v2
   VITE_NEWS_API_KEY=SUA_CHAVE_AQUI
   ```

## Melhorias Futuras

- Implementação de um backend para armazenar as notícias de forma persistente.
- Autenticação de usuário integrada com um banco de dados.

## Autor

Projeto desenvolvido por **[Cesar Matsubayashi](https://github.com/cesar-matsubayashi)**.
