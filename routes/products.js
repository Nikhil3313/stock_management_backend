const express = require("express")
const router = express.Router()
const productSchema = require('../models/Data')

const { getAllProducts, getAllProductsTesting, getProduct ,deleteProduct, updateProduct} = require("../controllers/products");
const UserModel = require("../models/Products");

router.route("/").get(getAllProducts);
// router.get("/getProduct").get(getProduct) 
router.post("/products/modifyStock", getAllProductsTesting);
router.get("/products/getAll", async (req, res) => {
    const data = await productSchema.find({})
    res.send(data)
});
router.get("/products/getProducts", async (req, res) => {
    const data = await UserModel.find({})
    res.send(data)
});

router.delete("/products/:id", deleteProduct);



module.exports = router;