const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    unit: { type: String },
    type: { type: String },
    sku: { type: String }

}, { timestamps: true })

const UserModel = mongoose.model("Product", UserSchema)

module.exports = UserModel