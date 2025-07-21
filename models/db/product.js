// Import Connection from index
const {sequelize, DataTypes} = require('../index');

// Define a new model, representing a table in the database.
const ProductBasic = sequelize.define('product_basic',{
    'product_id': {
        type: DataTypes.STRING, 
        primaryKey: true
    },
    'product_name': {
        type: DataTypes.STRING
    },
    'product_title': {
        type: DataTypes.STRING
    },
    'description':{
        type: DataTypes.TEXT
    },
    'price': {
        type: DataTypes.DOUBLE, 
        defaultValue: 0
    },
    'category': {
        type: DataTypes.STRING
    },
    'category_eng': {
        type: DataTypes.STRING
    },
    'image_addr':{
        type: DataTypes.STRING
    },
    'create_day': {
        type: DataTypes.DATE, 
        defaultValue: Date.now()
    }},
    {
        tableName: 'product_basic'
    }
);

const SampleProductBasic = {
    'product_id': 'A1234',
    'product_name': 'white shirt',
    'product_title': 't-shirt',
    'category': '上衣',
    'category_eng': 'shirt'
};

// Define a new model, representing a table in the database.
const ProductInfo = sequelize.define('product_inform',{
    'product_id': {
        type: DataTypes.STRING, 
        allowNull: false
    },
    'color': {
        type: DataTypes.STRING, 
        allowNull: false
    },
    'size': {
        type: DataTypes.STRING, 
        allowNull: false
    },
    'amount':{
        type: DataTypes.INTEGER, 
        allowNull: false, 
        defaultValue: 0
    }},
    {
        tableName: 'product_inform'
    }
);

const SampleProductInfo = {
    'product_id': 'A1234',
    'color': 'Black',
    'size': 'S',
    'amount': 100
};

module.exports = {ProductInfo, SampleProductInfo, ProductBasic, SampleProductBasic};