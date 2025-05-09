FROM oven/bun:1-slim as build

WORKDIR /app

# Copy ALL package files first
COPY package.json bun.lock ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/
COPY libs/gqty-client/package.json ./libs/gqty-client/

# Install dependencies, only for this package (for a smaller image)
RUN bun install --filter frontend

# Copy source files of dependencies
COPY apps/frontend ./apps/frontend
COPY libs/gqty-client ./libs/gqty-client

# to build and run from package scripts
WORKDIR apps/frontend

# Build
RUN bun run build

# Load dist to nginx
FROM nginx:alpine
COPY --from=build /app/apps/frontend/dist /usr/share/nginx/html
