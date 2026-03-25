# Product Inventory API

A RESTful CRUD API built with Express.js for managing product inventory. Data is stored in memory (no database required).

## Setup
```bash
npm install
node index.js
```

Server runs on http://localhost:3000

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /products | Get all products |
| GET | /products/:productId | Get one product |
| POST | /products | Create a product |
| PUT | /products/:productId | Update a product |
| DELETE | /products/:productId | Delete a product |

## Data Model
```json
{
  "productId": 1,
  "name": "Laptop",
  "quantity": 10,
  "price": 999.99,
  "category": "Electronics"
}
```

## Tech Stack
- Node.js
- Express.js

## Author
Thelma Bangsi — BeTechified Capstone Project 2026
