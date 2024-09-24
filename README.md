
# Microservices with Elasticsearch

This repository contains a microservices-based architecture integrated with Elasticsearch for efficient product search and management. The microservices communicate using REST APIs, and product data is indexed, searched, updated, and deleted using Elasticsearch.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The purpose of this project is to demonstrate how to integrate Elasticsearch into a microservices architecture for handling product data. It includes services for creating, updating, searching, and deleting products, with product data indexed in Elasticsearch for fast retrieval.

## Tech Stack

- **Node.js**: Backend JavaScript runtime.
- **Express**: Web framework for building RESTful APIs.
- **Elasticsearch**: Search engine used for product search and management.
- **TypeScript**: Type safety and static typing.
- **Jest**: Testing framework.
- **yarn**: Fast, disk space-efficient package manager.
- **Docker**: Containerization platform for deploying Elasticsearch locally.

## Features

- **Microservices Architecture**: Independent services with clearly defined responsibilities.
- **Elasticsearch Integration**: Fast, scalable search engine for handling product searches.
- **Product Management**: Create, update, and delete products using a REST API.
- **Elasticsearch Syncing**: Product data is automatically synced with Elasticsearch when changes are made.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16+)
- [yarn](https://yarn.io/)
- [Docker](https://www.docker.com/) (for running Elasticsearch)
- [Elasticsearch](https://www.elastic.co/elasticsearch/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Kreativepardha/Microservices-ElasticSearch.git
   cd Microservices-ElasticSearch
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Run Elasticsearch in Docker**:
   ```bash
   docker run -d --name es -p 9200:9200 -e "discovery.type=single-node" elasticsearch:8.1.0
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:

   ```bash
   ELASTICSEARCH_NODE=http://localhost:9200
   ```

## Configuration

- **Elasticsearch**: The connection to Elasticsearch is configured using the environment variable `ELASTICSEARCH_NODE`.
- **Other Configurations**: You can add more configuration options as needed (e.g., port numbers, database connections).

## Running the Application

To start the application in development mode:

```bash
yarn run dev
```

This will start the Express server, connect to Elasticsearch, and expose the API endpoints.

## Testing

To run unit and integration tests, use the following command:

```bash
yarn run test
```

The tests include:

- **Unit Tests**: Mocked tests for business logic using Jest.
- **Integration Tests**: Real interaction with Elasticsearch for testing data indexing, searching, and updating.

You can check the code coverage for the tests as well:

```bash
yarn run test:coverage
```

## API Endpoints

The following APIs allow managing products and interacting with Elasticsearch.

### **POST /products**

Create a new product.

- **Request Body**:
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 100.0,
    "stock": 50
  }
  ```

- **Response**:
  ```json
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product Description",
    "price": 100.0,
    "stock": 50
  }
  ```

### **GET /products**

Get a paginated list of products.

- **Query Parameters**:
  - `limit`: Number of products to retrieve.
  - `offset`: Number of products to skip.

- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Product Description",
      "price": 100.0,
      "stock": 50
    },
    {
      "id": 2,
      "name": "Another Product",
      "description": "Another Description",
      "price": 150.0,
      "stock": 20
    }
  ]
  ```

### **GET /products/:id**

Get details of a single product by ID.

- **Response**:
  ```json
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product Description",
    "price": 100.0,
    "stock": 50
  }
  ```

### **PUT /products/:id**

Update an existing product by ID.

- **Request Body**:
  ```json
  {
    "name": "Updated Product Name",
    "description": "Updated Description",
    "price": 120.0,
    "stock": 40
  }
  ```

- **Response**:
  ```json
  {
    "id": 1,
    "name": "Updated Product Name",
    "description": "Updated Description",
    "price": 120.0,
    "stock": 40
  }
  ```

### **DELETE /products/:id**

Delete a product by ID.

- **Response**:
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

### Elasticsearch Indexing

All product data is indexed in Elasticsearch automatically when a product is created or updated. You can search for products using Elasticsearch's query DSL or the provided APIs.

## Contributing

We welcome contributions to this project! If you'd like to contribute, please fork the repository and create a pull request with your changes. Make sure to include relevant test cases and documentation updates.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## TDD [ Test Driven Develoment ]
Following TDD principle and clean coding

## SOLID PRINCIPLES 
