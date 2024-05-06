// const ProductModel = require('../models/Data');
const stockModel = require('../models/stock')


//creaate
const addStock = async (req, res) => {
    const { sku, name, price, type, unit, quantity } = req.body
    const productExist = await stockModel.findOne({ sku })
    if (productExist) {
        productExist.type = type;
        productExist.unit = unit;
        productExist.quantity = quantity;
        const data = await productExist.save()
        if (data) {
            res.status(200).json({ success: true, data,message:"Product Updated Successfully" })
        }
    } else {
        const newProduct = new stockModel({
            sku, name, price, type, unit, quantity
        });
        const data = await newProduct.save();
        if (data) {
            res.status(200).json({ success: true, data,message:"Product Created Successfully" })
        }
    }
};


const deleteStock = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedProduct = await stockModel.findByIdAndDelete(_id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};



module.exports = {addStock,deleteStock }