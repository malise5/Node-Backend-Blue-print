const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//get All products
const getProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//get a single products by id
const getProductsById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        // res.status(404).json({ message: error.message });
    }
});

//create new Product
const createProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

//Edit a product
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404);
            throw new Error(`can not find product with id ${id}`);
            // return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({
            Message: `Product with id ${id} has been deleted successfully`,
        });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        // res.status(404).json({ message: error.message });
    }
});

module.exports = {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
};
