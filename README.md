# Full Stack Internship Project

This is a monorepo containing a full-stack application with a React frontend and a Node.js/Express backend, fully containerized with Docker.

## Project Structure

- **frontend/**: React application built with Vite (`port 5173`)
- **backend/**: Node.js/Express API (`port 5000`)
- **docker-compose.yml**: Orchestrates the multi-container setup

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

## Quick Start (with Docker)

To run the entire application stack:

1.  From the project root, run:
    ```bash
    docker-compose up --build
    ```
    *(Note: You might need execute with `sudo` depending on your Docker configuration)*

2.  Access the application:
    - **Frontend**: [http://localhost:5173](http://localhost:5173)
    - **Backend API**: [http://localhost:5000](http://localhost:5000)

## Configuration

- The frontend container is configured to proxy API requests `/api` to the backend service internally.
- The `VITE_API_URL` environment variable is automatically set in `docker-compose.yml`.

## Development

If you modify the source code, the changes won't reflect immediately inside the container unless you rebuild or configure volumes. For this setup:

- **Rebuild after changes**:
    ```bash
    docker-compose up --build
    ```
- **Stop the containers**:
    Press `Ctrl+C` in the terminal or run:
    ```bash
    docker-compose down
    ```

## Troubleshooting

- **Permission Denied**: If you get a permission error connecting to the Docker daemon socket, try running the command with `sudo`:
    ```bash
    sudo docker-compose up --build
    ```
- **Port Conflicts**: Ensure ports `5173` and `5000` are not occupied by other services on your host machine.
