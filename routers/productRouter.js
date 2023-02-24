const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/best-seller", productController.getBestSellerProds);
router.get("/best-seller/:id", productController.getBestSellerProdsById);

router.get("/recommended", productController.getRecommendedProds);
router.get("/recommended/:id", productController.getRecommendedProdsById);

module.exports = router;
