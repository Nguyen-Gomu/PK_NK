require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
const addressRouter = require('./routes/addressRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/address', addressRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));