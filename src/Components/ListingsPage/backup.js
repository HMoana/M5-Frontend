version: "3"
services:
  client:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - server
    networks:
      - mern-app

  server:
    build: ../M5-Backend
    ports:
      - "4000:4000"
    depends_on:
      - mongo
    networks:
      - mern-app

  mongo:
    image: mongo:3.6.19-xenial
    restart: always
    ports:
      - "27017:27017"
    networks:
      - mern-app
    volumes:
      - mongo-data:/data/db
    environment:
      MONGO_INITDB_DATABASE: bookstore

  networks:
  mern-app:
    driver: bridge
volumes:
  mongo-data:
    driver: local

  # mongo:
  #   image: mongo
  #   ports:
  #     - 27017:27017
  #   volumes:
  #     - ./data:/data/db
  # environment:
  #   - MONGO_INITDB_DATABASE=bookstore

//   #     server:
//   #   build: ../M5-Backend
//   #   restart: always
//   #   ports:
//   #     - 4000:4000
//   #   depends_on:
//   #     - mongo
//   #   environment:
//   #     - PORT=4000
//   #     - URL=http://localhost
//   #     - MONGO_URI=mongodb://mongo:27017
//   #     - DB_NAME=bookstore
//   #     - API_VERSION=V1

//   # client:
//   #   build: .
//   #   ports:
//   #     - 3000:3000
//   #   depends_on:
//   #     - server
