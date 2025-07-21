const {sequelize, DataTypes} = require('../index');

const Orders = sequelize.define('orders',{
    'order_id': {
        type: DataTypes.STRING, 
        primaryKey: true, 
        allowNull:false
    },
    'user_id': {
        type: DataTypes.STRING, 
        allowNull:false
    },
    'product_id': {
        type: DataTypes.STRING, 
        allowNull:false
    },
    'payment': {
        type: DataTypes.BOOLEAN, 
        defaultValue: false, 
        allowNull:false
    }},
    {
        tableName: 'orders'
    }
);

const SampleOrders = {
    'order_id': 'O1234',
    'user_id': 'A123456789',
    'product_id': 'C1234'
};

const OrdersDetail = sequelize.define('orders_detail',{
    'order_id': {
        type: DataTypes.STRING, 
        allowNull:false
    },
    'amount': {
        type: DataTypes.INTEGER, 
        defaultValue: 0, 
        allowNull:false
    },
    'total_consume': {
        type: DataTypes.DOUBLE, 
        defaultValue: 0, 
        allowNull:false
    },
    'is_delete': {
        type: DataTypes.BOOLEAN, 
        defaultValue: false, 
        allowNull:false
    }},
    {
        tableName: 'orders_detail'
    }
);

const SampleOrdersDetail = {
    'order_id': 'O1234'
};

module.exports = {Orders, SampleOrders, OrdersDetail, SampleOrdersDetail}