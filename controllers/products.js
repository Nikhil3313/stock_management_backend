const ProductModel = require('../models/Data');
const UserModel = require('../models/Products');
const productModal = require('../models/Products')

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'hi i am getallproducts' })
};
const getAllProductsTesting = async (req, res) => {
    const { sku, name, price, type, unit, quantity } = req.body
    const productExist = await productModal.findOne({ sku })
    if (productExist) {
        productExist.type = type;
        productExist.unit = unit;
        productExist.quantity = quantity;
        const data = await productExist.save()
        if (data) {
            res.status(200).json({ success: true, data,message:"Product Updated Successfully" })
        }
    } else {
        const newProduct = new productModal({
            sku, name, price, type, unit, quantity
        });
        const data = await newProduct.save();
        if (data) {
            res.status(200).json({ success: true, data,message:"Product Created Successfully" })
        }
    }
    // console.log(222,newProduct)
};
 
const getProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Assuming the product ID is passed as a URL parameter
        const product = await UserModel.findById(productId);
        
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const { sku, name, price, type, unit, quantity } = req.body;

        const productExist = await UserModel.findById(productId);
        if (!productExist) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        productExist.sku = sku;
        productExist.name = name;
        productExist.price = price;
        productExist.type = type;
        productExist.unit = unit;
        productExist.quantity = quantity;

        const updatedProduct = await productExist.save();
        res.status(200).json({ success: true, data: updatedProduct, message: "Product updated successfully" });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedProduct = await UserModel.findByIdAndDelete(_id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};



module.exports = { getAllProducts, getAllProductsTesting , getProduct , deleteProduct,updateProduct }