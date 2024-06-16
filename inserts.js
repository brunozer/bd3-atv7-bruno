const database = "BD3-NoSQL-Produtos";
const collection = "bd3-nosql-atv7";

use(database);
db[collection].insertMany([
  {
    codigo: "1",
    nome: "Smartphone Samsung Galaxy S21",
    descricao: "Smartphone",
    preco: 799,
    categoria: "Eletrônicos",
  },
  {
    codigo: "2",
    nome: "Geladeira ",
    descricao: "Geladeira ",
    preco: 1599,
    categoria: "Eletrodomésticos",
  },
  {
    codigo: "3",
    nome: "Camisa Polo",
    descricao: "Camisa polo",
    preco: 299,
    categoria: "Vestuário",
  },
  {
    codigo: "4",
    nome: "Sofá Retrátil ",
    descricao: "Sofá retrátil",
    preco: 2199,
    categoria: "Móveis",
  },
  {
    codigo: "5",
    nome: "Bicicleta",
    descricao: "Bicicleta ",
    preco: 899,
    categoria: "Esportes",
  },
  {
    codigo: "6",
    nome: "Notebook Dell ",
    descricao: "Notebook ",
    preco: 3499,
    categoria: "Informática",
  },
  {
    codigo: "7",
    nome: "Aparador de Grama Tramontina",
    descricao: "Aparador de grama",
    preco: 249,
    categoria: "Jardinagem",
  },
  {
    codigo: "8",
    nome: "Pneu Michelin",
    descricao: "Pneu ",
    preco: 499,
    categoria: "Automotivo",
  },
  {
    codigo: "9",
    nome: "Livro",
    descricao: "Romance ",
    preco: 39,
    categoria: "Livros",
  },
  {
    codigo: "10",
    nome: "Guitarra ",
    descricao: "Guitarra",
    preco: 7499,
    categoria: "Música",
  },
]);
