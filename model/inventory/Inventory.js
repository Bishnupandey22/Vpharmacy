const mongoose = require("mongoose")

const inventoryModel = new mongoose.Schema({
    medicineName: { type: String, default: null },
    composition: { type: String, default: null },
    type: { type: String, },//tab,caps,syr,inj
    totalquantityOfMedicineinAPack: { type: String },
    strip: { type: Number },
    rate: { type: Number },
    discount: { type: Number },
    CGST: { type: String },
    SGST: { type: String },
    BatchNumber: { type: String },
    HSNCode: { type: String },
    netRate: { type: String },
    profitPercent: { type: String },
    profitAmount: { type: String },
    costPerMedicine: { type: String },
    customerDiscount: { type: String },
    expiryDate: { type: String },
    mrp: { type: String },
    minimumStock: { type: String },
    createdAt: { type: Date, default: new Date() },
    deletedAt: { type: Date, default: null }

}, { timestamps: true }
)
const inventory = mongoose.model("inventoryModel", inventoryModel)
module.exports = inventory