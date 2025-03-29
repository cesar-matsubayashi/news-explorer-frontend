# News Explorer Frontend

## About the Project

The **News Explorer** is a frontend application that allows users to search for news from around the world based on a keyword entered in the search bar. The news articles are displayed as cards on the main page.

When a user is logged in, they have the option to save or remove news articles. Additionally, there is a dedicated page to view all saved articles.

## Technologies Used

- **React** with **Vite** for optimization and fast development
- **NewsAPI** - to fetch news articles
- **Backend API** - for storing and managing users and saved articles

## Features

- Search for news using a keyword.
- Display news articles as cards.
- Create an account and log in.
- Save and remove articles when logged in.
- View all saved articles on a dedicated page.
- Persistence of saved news articles in the backend.

## Localization Support

- The application supports English and Portuguese based on the browser's language settings.

## Domains

#### Frontend - https://newsexplorer.serverpit.com

#### Backend - https://api.newsexplorer.serverpit.com

## How to Run the Project Locally

### 1. Clone the repository:

```sh
  git clone git@github.com:cesar-matsubayashi/news-explorer-frontend.git
```

### 2. Access the project folder:

```sh
  cd news-explorer-frontend
```

### 3. Install dependencies:

```sh
  npm install
```

### 4. Set up environment variables:

Create a `.env` file at the root of the project and add the following lines:

```sh
VITE_NEWS_API_URL=https://newsapi.org/v2
VITE_NEWS_API_KEY=YOUR_API_KEY_HERE
VITE_MAIN_API_URL=https://api.newsexplorer.serverpit.com
```

For reference, a `.env.example` file has been included in the project:

```sh
# News API Configuration
VITE_NEWS_API_URL=

# News API Key Configuration
VITE_NEWS_API_KEY=

# Backend API Configuration
VITE_MAIN_API_URL=
```

### 5. Start the development server:

```sh
  npm run dev
```

The project will start and be available in the browser at the address indicated by Vite.

## Backend API Configuration

To ensure saved news articles are stored correctly, the backend API must be configured. Make sure the backend is running and properly set up to accept requests from the frontend application.

## Author

Project developed by **[Cesar Matsubayashi](https://github.com/cesar-matsubayashi)**.
