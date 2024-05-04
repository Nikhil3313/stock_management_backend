
  
  const mongoose = require('mongoose')

  const productSchema = new mongoose.Schema(
    {
      name: { type: String, trim: true },
      shortDesc: { type: String, trim: true },
      slug: { type: String, trim: true },
      vendorId: { type: String },
      mainCat: { type: String },
      subCat: { type: String },
      sku: { type: String },
      familyCode: { type: String },
      hsn: { type: String },
      brand: { type: String },
      isBrand: { type: Boolean, default: true },
      unit: { type: String },
      totalUnit: { type: Number },
      marginFromDistributerinPercent: { type: Number },
      marginFromDistributerinAmount: { type: Number },
      mrp: { type: Number },
      costPrice: { type: Number },
      basePrice: { type: Number },
      salePrice: { type: Number },
      discountOnMrp: { type: Number },
      isGst: { type: Boolean },
      isCess: { type: String },
      cessInPercent: { type: Number },
      gstInPercent: { type: Number },
      gstAmount: { type: Number },
      cGst: { type: Number },
      sGst: { type: Number },
      imgCount: { type: Number },
      taxStatus: { type: Number },
      smList: { type: Array },
      productImages: [
        {
          img: { type: String },
        },
      ],
      varients: [
        {
          varientQuantity: { type: String },
          basePrice: { type: Number },
          marginForCustomer: {
            forGT: { type: Number },
            forHoreca: { type: Number },
          },
        },
      ],
      marginForCustomer: {
        forGT: { type: Number },
        forHoreca: { type: Number },
      },
      isactive: { type: Boolean, default: true },
      
    },
    { timestamps: true }
  );
const ProductModel = mongoose.model("all_product", productSchema)

module.exports = ProductModel