const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProduct,
  getProductByName,
  FillterProduct,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.get("/search/:name", getProductByName);
router.get("/fillter", FillterProduct);

module.exports = router;