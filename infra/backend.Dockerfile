FROM oven/bun:1-slim

WORKDIR /app

# Copy ALL package files first
COPY package.json bun.lock ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/
COPY libs/gqty-client/package.json ./libs/gqty-client/

# Install dependencies, only for the backend, for a smaller image
RUN bun install --filter backend

# Copy source files of dependencies
COPY apps/backend ./apps/backend

# to build and run from package scripts
WORKDIR apps/backend

# Build Pylon
RUN bun run build

EXPOSE 3000

ENTRYPOINT ["bun", "run", "start"]
