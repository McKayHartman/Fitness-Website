# Build the frontend
# Copy required files to build folder
FROM node
WORKDIR /build/frontend
COPY frontend/package.json .
RUN pnpm install
COPY frontend .
CMD ["pnpm", "run", "build"]
# Copy the backend