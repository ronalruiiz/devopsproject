FROM node
LABEL authors="Ronal Ruiz"

# update dependencies and install curl
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*
# Create app directory
WORKDIR /app

COPY . .

# update each dependency in package.json
RUN npm install -g npm-check-updates \
    npm install

#Install typescript
RUN npm install typescript --save-dev

# If you are building your code for production
RUN npm run build

# Bundle app source
COPY . /app
EXPOSE 3000

CMD ["npm", "start"]