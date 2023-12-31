const express = require("express");
const {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// routes
router.get("/", getProducts);

// find by id
router.get("/:id", getProductsById);

// Create data
router.post("/", createProduct);

// Edit products
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

module.exports = router;
