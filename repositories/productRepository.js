const sequelize = require('../models/db/sequelize');
const product = require('../models/db/product');
const numofpage = 6;

exports.getList = async(categories, paging) =>{
    const {count, rows} = await product.ProductBasic.findAndCountAll({
        where:{
            category: categories,
        },
        offset: paging * numofpage,
        limit: numofpage + 1,
    });
    const plainRows = rows.map(row => row.get({plain: true}));
    return {
        count: paging ? count < numofpage + 1 : paging + 1, 
        rows: plainRows
    };
};

exports.createProduct = async(productInfo) =>{
    const newProduct = await product.ProductBasic.create({
        product_id: productInfo.product_id,
        product_name: productInfo.product_name,
        product_title: productInfo.product_title,
        description:productInfo.description,
        price: productInfo.price,
        category: productInfo.category,
        category_eng: productInfo.category_eng,
        image_addr: productInfo.image_addr
    });
    return newProduct; 
};

