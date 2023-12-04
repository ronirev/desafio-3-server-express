import  Express  from "express";
import ProductManager from "./class/ProductManager.js";

const path = 'data/file.json'
const manager = new ProductManager(path);
const app = Express()
const port = 3500

 // ROUTES 

 app.get('/products', async (req, res) => {
    const limit = req.query.limit;
    let products = await manager.getProducts();
    if (limit && !isNaN(limit)) {
      products =  products.slice(0, parseInt(limit));
    }
    res.json(products); 
  });

 app.get('/products/:pid', async (req, res)=>{
    const pid = req.params.pid
    try {
      const product = await  manager.getProductByid(pid)
      res.json(product)
    } catch (error) {
      res.status(404).json({message:'No existe el producto buscado'})
    }
 })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
