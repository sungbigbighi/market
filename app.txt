const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('C:/Users/user/Desktop/market/back/routes/productRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// 商品路由
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
