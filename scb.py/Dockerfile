# Use Node.js 20 LTS as base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Expose port (change if your app uses a different port)
EXPOSE 5173

# Start the app
CMD ["npm", "run", "preview"]
