# To-Do List Project

[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](./LICENSE)

To-Do List Project based on YouTube's videos.

## Description

This project is a simple To-Do List application built with a backend using Node.js, Express, and Prisma, with a SQLite database. The frontend is built with HTML, TailwindCSS, and JavaScript.

## Pre-requisites

Before you begin, ensure you have the following installed:

*   Node.js (version >= 18)
*   npm (Node Package Manager)
*   Git

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository

```bash
git clone <https://github.com/mgl-uhou/todo-list_fullstack.git>
cd todolist-fullstack
```

### 2. Backend Setup

```bash
cd backend
```

### 2.1 Install dependencies

```bash
npm install
```

### 2.2 Configure the environment

Create a `.env` file in the `backend` directory based on the `.env.example` file.
```bash
cp .env.example .env
```

Ensure the `DATABASE_URL` variable in your `.env` file is set correctly for your SQLite database. For example:

```
DATABASE_URL="file:./dev.db"
PORT=3333
```

### 2.3 Generate Prisma client and run migrations

```bash
npx prisma generate
npx prisma migrate dev
```

### 2.4 Start the backend server

```bash
npm run dev
```

### 3 Frontend Setup

```bash
cd ../frontend
```

### 3.1 Install dependencies

```bash
npm install
```

### 3.2. Start the frontend development server

```bash
npm run dev
```

Open `index.html` in your browser.

## Usage

Once both the backend and frontend are running, you can interact with the To-Do List application through your web browser.

- Add tasks
- View tasks
- Update task statuses
- Delete tasks

> Miguel Laurentino