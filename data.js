// In-memory storage — acts as our "database"
const products = [];
let nextId = 1;

module.exports = { products, nextId: () => nextId++ };
