# Dockerized Node.js Application with PostgreSQL

This repository provides a simple boilerplate to dockerize a Node.js application that connects to a PostgreSQL database. It includes basic setup for Express.js with middleware like CORS, XSS protection, and handling JSON data.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Docker
- Node.js (if you want to run the application without Docker for development purposes)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/tirthraj07/nodejs-postgres-docker.git
cd nodejs-postgres-docker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```plaintext
POSTGRES_URL=your-postgres-connection-string
PORT=3000
```

Replace `your-postgres-connection-string` with your actual PostgreSQL connection string.

### 4. Build Docker Image

```bash
docker build -t my-app .
```

### 5. Run Docker Container

```bash
docker run -it -p 3000:3000 --env-file ./.env --name my-container my-app
```

This command will start the Docker container with your Node.js application and connect it to the PostgreSQL database using the environment variables specified in `.env`.

## Dockerfile Explanation

The Dockerfile provided sets up the environment for running the Node.js application:

```dockerfile
FROM ubuntu:latest

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
```

- **Base Image**: Uses Ubuntu as the base image.
- **Setup**: Installs Node.js and npm.
- **Copy and Install**: Copies package.json and package-lock.json, installs dependencies.
- **Expose Port**: Exposes port 3000.
- **Command**: Specifies the command to run the application (`npm run start`).

## Application Structure

- **`app.js`**: Entry point of the application.
- **`db.js`**: Manages the PostgreSQL database connection.
- **`Dockerfile`**: Configuration for building the Docker image.
- **`.env`**: Environment variables configuration.

## Usage

- Access the API at `http://localhost:3000/api`.
- Check if the server is running by visiting `http://localhost:3000/`.

## Contributing

Feel free to contribute by submitting issues and pull requests.


---