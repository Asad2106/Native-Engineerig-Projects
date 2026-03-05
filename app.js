const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

let products = [];
let id = 1;

/* CREATE PRODUCT */

app.post("/products", (req, res) => {

  const { name, price, description } = req.body;

  const product = {
    id: id++,
    name,
    price,
    description
  };

  products.push(product);

  res.status(201).send(product);
});


/* GET ALL PRODUCTS */

app.get("/products", (req, res) => {
  res.send(products);
});


/* GET PRODUCT BY ID */

app.get("/products/:id", (req, res) => {

  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product)
    return res.status(404).send("Product not found");

  res.send(product);
});


/* update product */

app.put("/products/:id", (req, res) => {

  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product)
    return res.status(404).send("Product not found");

  const { name, price, description } = req.body;

  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;

  res.send(product);
});


/* delete product */

app.delete("/products/:id", (req, res) => {

  const productIndex = products.findIndex(
    p => p.id === parseInt(req.params.id)
  );

  if (productIndex === -1)
    return res.status(404).send("Product not found");

  products.splice(productIndex, 1);

  res.status(204).send();
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});