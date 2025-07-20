// http library -> use to start the server
const http = require('http');
// the port to use to listen on server
const port = 3000;
// handling files -> use to read the html file content
const fs = require('fs');

// Import models
const {sequelize} = require('./models');
const {ProductInfo, SampleProductInfo, ProductBasic, SampleProductBasic} = require('./models/product');
const {UserInfo, SampleUserInfo} = require('./models/user');
const {Orders, SampleOrders, OrdersDetail, SampleOrdersDetail} = require('./models/order');

// Create Tables
(
    async () =>{
    try {

        // force: true -> clear db date, for development stage
        await sequelize.sync({force: true})
        console.log('Create Success.')
        
        await ProductInfo.create(SampleProductInfo)
        console.log('Product Info add.')

        await ProductBasic.create(SampleProductBasic)
        console.log('Product Basic add.')

        await UserInfo.create(SampleUserInfo)
        console.log('UserInfo add.')

        await Orders.create(SampleOrders)
        console.log('Orders add.')

        await OrdersDetail.create(SampleOrdersDetail)
        console.log('OrdersDetail add.')

        console.log('Sample Insert Success.')
        

    } catch (err) {
        console.error('Failed.', err)
    }
})();

// Create Server
const server = http.createServer(function(req, res){
    // write html file -> status code 200 = good
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('./views/index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }else{
            res.write(data)
        }
        // end reposne
        res.end()
    })
})

// listen once server start
// check if error happens
server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    } else{
        console.log('Server is listening on port ' + port)
    }
})