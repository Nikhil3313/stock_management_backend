const express = require("express")
const router = express.Router()
const productSchema = require('../models/Product')

const {addStock,deleteStock} = require("../controllers/stock");
const stockModel = require("../models/stock");


router.post("/stock/add", addStock);
router.get("/products/getAll", async (req, res) => {
    const data = await productSchema.find({})
    res.send(data)
});
router.get("/stock", async (req, res) => {
    const data = await stockModel.find({})
    res.send(data)
});

router.delete("/stock/:id", deleteStock);



module.exports = router;