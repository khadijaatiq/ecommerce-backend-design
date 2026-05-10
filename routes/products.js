const express = require('express');
const router = express.Router();

const products = [
    { id: 1, name: "Soft chairs", price: 19, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Soft+Chairs", description: "Comfortable soft chairs for your living room.", stock: 50 },
    { id: 2, name: "Sofa & chair", price: 99, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Sofa+Chair", description: "Elegant sofa and chair set.", stock: 20 },
    { id: 3, name: "Smart watches", price: 19, category: "Electronics", image: "https://placehold.co/200x200?text=Smart+Watch", description: "Feature-packed smart watch.", stock: 100 },
    { id: 4, name: "Cameras", price: 89, category: "Electronics", image: "https://placehold.co/200x200?text=Camera", description: "High resolution digital camera.", stock: 30 },
    { id: 5, name: "Headphones", price: 10, category: "Electronics", image: "https://placehold.co/200x200?text=Headphones", description: "Noise cancelling headphones.", stock: 75 },
    { id: 6, name: "Coffee maker", price: 10, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Coffee+Maker", description: "Brew perfect coffee every morning.", stock: 40 },
    { id: 7, name: "Laptops", price: 340, category: "Electronics", image: "https://placehold.co/200x200?text=Laptop", description: "High performance laptop.", stock: 15 },
    { id: 8, name: "Kitchen mixer", price: 100, category: "Home and outdoor", image: "https://placehold.co/200x200?text=Kitchen+Mixer", description: "Professional kitchen mixer.", stock: 25 }
];

// GET all products + optional search/filter
router.get('/', (req, res) => {
    const { search, category } = req.query;
    let result = products;

    if (search) {
        result = result.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (category) {
        result = result.filter(p =>
            p.category.toLowerCase() === category.toLowerCase()
        );
    }

    res.json(result);
});

// GET single product by id
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

module.exports = router;