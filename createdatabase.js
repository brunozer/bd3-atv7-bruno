// Conectar ao banco de dados BD3-NoSQL-Produtos
const database = "BD3-NoSQL-Produtos";
const collection = "bd3-nosql-atv7";

use(database);

// Criar a collection bd3-nosql-atv7
db.createCollection(collection);
