require('dotenv').config();
const config = require('config')

// the port to use to listen on server
const port = config.get('port');
// http library -> use to start the server
const http = require('http');
// handling files -> use to read the html file content
const fs = require('fs');
const express = require('express');
const app = express();

// Import models
const {sequelize} = require('./models/db/sequelize');
const {logger} = require('./utils/logger');
const {ProductInfo, SampleProductInfo, ProductBasic, SampleProductBasic} = require('./models/db/product');
const {UserInfo, SampleUserInfo} = require('./models/db/user');
const {Orders, SampleOrders, OrdersDetail, SampleOrdersDetail} = require('./models/db/order');
const UsersRoutes = require('./routes/api/v1/userRoute');
const ProductRoutes = require('./routes/api/v1/productRoute');

// Create Tables
(
    async () =>{
    try {

        // force: true -> clear db date, for development stage
        // await sequelize.sync({force: true});
        await sequelize.sync({});
        
        /*
        await ProductInfo.create(SampleProductInfo);

        await ProductBasic.create(SampleProductBasic);

        await UserInfo.create(SampleUserInfo);

        await Orders.create(SampleOrders);

        await OrdersDetail.create(SampleOrdersDetail);
        */

        logger.log('info', 'DB Sync Success.')
        
    } catch (err) {
        logger.error('DB Sync Failed - ' + err);
    }
})();

// Create Server
app.get('', (req, res) => {
    // write html file -> status code 200 = good
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('./views/index.html', function(error, data){
        if(error){
            res.writeHead(404);
            res.write('Error: File Not Found');
        }else{
            res.write(data);
        }
        // end reposne
        res.end();
    });
});

app.use(express.json());
app.use('/api/v1/users', UsersRoutes);
app.use('/api/v1/products', ProductRoutes);

// listen once server start
// check if error happens
app.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error);
    } else{
        console.log('Server is listening on port ' + port);
    }
});