require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method=== 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((req, res, next)=>{
    const error = new Error('Not found'); 
    error.status = 404; 
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.use((req, res, next) => {
    res.status(200).json({
        message: "It works!"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));