const http = require ("http");
const fs = require("fs").promises;



const host = 'localhost'
const port = 1111 ;


const requestListener = function (req, res) {

    console.log(req.url);

    if (req.url === '/api') {
        res.setHeader("content-type" , "application/json")
        res.writeHead (200);
        res.end (`
        
        {
            "nombre": "elias",
            "lenguajes": ["javascript","php", "rust", "go"]
        }
        
        `)
    } else if (req.url === '/') {
        fs.readFile(__dirname + '/index.html').then(content => {
            res.setHeader('content-type', 'text/html')
            res.writeHead(200);
            res.end(content)
        })
    } else if(req.url === '/apibateria.js')  {
            fs.readFile(__dirname + '/apibateria.js').then(content => {
                res.setHeader('content-type', 'application/javascript')
                res.writeHead(200);
                res.end(content)
            })
    } else {
        res.end(req.url)
    }
    

}

const server = http.createServer (requestListener)
server.listen(port , host) 

console.log ("el servidor esta ejecutandose")
