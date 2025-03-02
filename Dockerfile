# Use Node.js LTS (Long Term Support) version
FROM node:20-slim AS base

# Create app directory
WORKDIR /usr/src/app

# Install dependencies first (better layer caching)
FROM base AS dependencies
COPY package*.json ./
# For production dependencies only
RUN npm ci --only=production

# Install ALL dependencies (including dev) for development/testing
FROM base AS dev-dependencies
COPY package*.json ./
RUN npm ci

# Build stage
FROM dev-dependencies AS build
COPY . .
RUN npm run build

# Production stage
FROM base AS production
ENV NODE_ENV=production

# Copy only necessary files
COPY package*.json ./
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

# Run as non-root user for security
USER node

# Expose port
EXPOSE 5000

CMD [ "node", "dist/index.js" ]

# Development stage
FROM dev-dependencies AS development
ENV NODE_ENV=development

# Copy package files and install ALL dependencies
COPY package*.json ./
RUN npm ci

# Then copy the rest of the code
COPY . .

# Keep container running
CMD [ "npm", "run", "dev" ]

# Test stage
FROM development AS test
CMD [ "npm", "test" ]