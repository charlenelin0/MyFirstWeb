const productRepo = require('../repositories/productRepository');
const HTTPError = require('../utils/httpError');

exports.getList = async(categories, paging) =>{
    try{
        const {count, rows} = await productRepo.getList(categories, paging);
        return {count, rows};
    }
    catch(err){
        throw new HTTPError(404, "Category Not Found.");
    }
};

exports.searchProduct = async(keyword) => {
    try{
        const productList = await productRepo.searchProduct(keyword);
        return productList;
    }
    catch(err){
        throw err;
    }
}

exports.createProduct = async(productInfo)=>{
    try{
        const newProduct = await productRepo.createProduct(productInfo);
        return newProduct;
    }
    catch(err){
        throw err;
    }
};