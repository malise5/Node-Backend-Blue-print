const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter The Product Name"],
        },
        quantity: {
            type: Number,
            required: [true, "Please Enter The Product Quantity"],
            default: 0,
        },
        price: {
            type: Number,
            required: [true, "Please Enter The Product Price"],
        },
        image: {
            type: String,
            required: [true, "Please Enter The Product Image"],
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
