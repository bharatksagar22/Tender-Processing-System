# Step 1: Use Node.js base image
FROM node:18-alpine AS build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json ./package-lock.json ./
RUN npm install --force  # 🛠️ Forcefully install dependencies

# Step 4: Copy source code
COPY . .

# Step 5: Build the React app
RUN npm run build || npm run build --force  # 🛠️ If fails, retry build

# Step 6: Use Nginx to serve the build files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Step 7: Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
