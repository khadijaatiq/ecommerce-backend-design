require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

const products = [
    { name: "Soft chairs", price: 19, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Soft+Chairs", description: "Comfortable soft chairs for your living room.", stock: 50 },
    { name: "Sofa & chair", price: 99, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Sofa+Chair", description: "Elegant sofa and chair set.", stock: 20 },
    { name: "Smart watches", price: 19, category: "Electronics", image: "https://placehold.co/200x200?text=Smart+Watch", description: "Feature-packed smart watch.", stock: 100 },
    { name: "Cameras", price: 89, category: "Electronics", image: "https://placehold.co/200x200?text=Camera", description: "High resolution digital camera.", stock: 30 },
    { name: "Headphones", price: 10, category: "Electronics", image: "https://placehold.co/200x200?text=Headphones", description: "Noise cancelling headphones.", stock: 75 },
    { name: "Coffee maker", price: 10, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Coffee+Maker", description: "Brew perfect coffee every morning.", stock: 40 },
    { name: "Laptops", price: 340, category: "Electronics", image: "https://placehold.co/200x200?text=Laptop", description: "High performance laptop.", stock: 15 },
    { name: "Kitchen mixer", price: 100, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Kitchen+Mixer", description: "Professional kitchen mixer.", stock: 25 }
];

const seedDB = async () => {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded successfully!');
    process.exit();
};

seedDB();