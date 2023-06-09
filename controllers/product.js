const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    try{
        const productData = await Product.findAll();
        res.send(productData);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to fetch products'});
    }
};

exports.createProducts = async (req, res) => {
    const sellingPrice = req.body.sellingPrice;
    const productName = req.body.productName;
    try{
        const productData = await Product.create({
            sellingPrice: sellingPrice,
            productName: productName
        })
        res.status(201).json({ product: productData });
    }
    catch (error) {
        res.status(400).json({error: 'Failed to create product'});
    }
};

exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    try{
        const product = await Product.findByPk(productId);
        res.send(product);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to fetch product'});
    }
}

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try{
        const product = await Product.findByPk(productId);
        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }
    
        await product.destroy();
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};