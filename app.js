// http library -> use to start the server
const http = require('http')
// handling files -> use to read the html file content
const fs = require('fs')
// the port to use to listen on server
const port = 80

// create server
const server = http.createServer(function(req, res){
    // write html file -> status code 200 = good
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', function(error, data){
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