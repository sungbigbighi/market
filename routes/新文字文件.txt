const express = require('express');
const router = express.Router();
const products = require('C:/Users/user/Desktop/market/back/models/Product');

// 取得所有商品
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
