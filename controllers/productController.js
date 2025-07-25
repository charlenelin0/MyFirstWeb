const productService = require('../services/productService');

exports.getList = async(req, res) =>{
    try{
        const category = req.params.category;
        const paging = parseInt(req.params.paging) || 0;
        const pageInfo = await productService.getList(category, paging);
        return res.json(pageInfo.count);
    }
    catch(err){
        return res.status(err.statusCode || 500).json({ message: err.message });
    };
};

exports.searchProduct = async(req, res) =>{
    try{
        const products = await productService.searchProduct(req.query.keyword);
        return res.json(products);
    }
    catch(err){
        return res.status(err.statusCode).josn({message: err.message});
    }
}

exports.createProduct = async(req, res) =>{
    try{
        const created = await productService.createProduct(req.body);
        return res.status(201).json({message: 'Product created successfully', id: created.product_id });
    }
    catch(err){
        return res.status(err.statusCode || 500).json({ message: err.message });
    };
};