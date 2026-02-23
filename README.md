# MERN Movie App
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Claudio1009/MERN-Movie-app)

This is a full-stack movie application built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides a platform for users to browse, search, and review movies. The application features a comprehensive admin panel for managing movies, genres, and user comments, complete with a statistical dashboard.

## Features

### User Features
- **Authentication:** Secure user registration and login functionality.
- **Movie Browsing:** View a comprehensive library of movies.
- **Search & Filter:** Find movies by title, genre, or release year.
- **Sorting:** Organize movie lists by new releases, top-rated, or random.
- **Movie Details:** Access detailed information for each movie, including plot, cast, and release year.
- **Trailer Playback:** Watch movie trailers directly within the app.
- **Reviews and Ratings:** Read and submit comments and ratings for movies.
- **Profile Management:** Update personal user profile details.

### Admin Features
- **Admin Dashboard:** A dedicated dashboard displaying key statistics like total users, movies, and comments.
- **Movie Management:** Full CRUD (Create, Read, Update, Delete) functionality for movies.
- **Genre Management:** Create, update, and delete movie genres.
- **Comment Moderation:** View and delete user comments across all movies.
- **Secure Routes:** Access to admin functionalities is protected and restricted to admin users.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For predictable state management, including RTK Query for data fetching and caching.
- **React Router**: For declarative routing in the React application.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A modern frontend build tool that significantly improves the development experience.

### Backend
- **Node.js**: A JavaScript runtime environment.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For securing user authentication and API routes.
- **Multer**: A middleware for handling `multipart/form-data`, used for file uploads.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm
- MongoDB (running locally or a cloud instance like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/claudio1009/mern-movie-app.git
    cd mern-movie-app
    ```

2.  **Install root dependencies:**
    ```bash
    npm install
    ```

3.  **Setup the Backend:**
    - Navigate to the backend directory:
      ```bash
      cd backend
      ```
    - Install backend dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file in the `backend` directory and add the following variables:
      ```env
      MONGO_URL=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
      PORT=3000
      ```

4.  **Setup the Frontend:**
    - Navigate to the frontend directory from the root:
      ```bash
      cd frontend
      ```
    - Install frontend dependencies:
      ```bash
      npm install
      ```
    - The frontend is configured to proxy API requests to the backend server at `http://localhost:3000`.

5.  **Run the Application:**
    - From the project's root directory, run the following command to start both the frontend and backend servers concurrently:
      ```bash
      npm run fullstack
      ```
    - The backend will run on `http://localhost:3000` and the frontend will be accessible at `http://localhost:5173` (or another port specified by Vite).
