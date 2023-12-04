
//const express = require('express')

import  Express  from "express";
import Product from "./class/Product.js";
import ProductManager from "./class/ProductManager.js";

const path = 'data/file.json'
const manager = new ProductManager(path);
const app = Express()
const port = 3500

 // ROUTES 

 app.get('/products', async (req, res) => {
    const limit = req.query.limit; // Obtener el parámetro de consulta 'limit'
    const products = await manager.getProducts(); // Obtener todos los productos

    let limitedProducts = products; // Establecer una variable para contener los productos limitados

    // Verificar si se proporcionó el parámetro 'limit' y si es un número válido
    if (limit && !isNaN(limit)) {
      limitedProducts = products.slice(0, parseInt(limit)); // Obtener la cantidad limitada de productos
    }

    res.json(limitedProducts); 
  });

 app.get('/products/:pid', (req, res)=>{

    console.log('retorna un producto')

    res.json('un producto')

 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
