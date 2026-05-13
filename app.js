const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://ecommerce-frontend-design-silk.vercel.app'
    ]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Ecommerce API is running!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});