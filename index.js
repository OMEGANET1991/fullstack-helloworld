const http = require ("http");
const fs = require("fs").promises;



const host = 'localhost'
const port = 1111 ;


const requestListener = function (req, res) {

    if (req.url === '/api') {
        res.setHeader("content-type" , "application/json")
        res.writeHead (200);
        res.end (`
        
        {
            "nombre": "martincho",
            "lenguajes": ["javascript","php", "rust", "go"]
        }
        
        `)
    } else {
        fs.readFile(__dirname + '/index.html').then(content => {
            res.setHeader('content-type', 'text/html')
            res.writeHead(200);
            res.end(content)
        })
    }

}

const server = http.createServer (requestListener)
server.listen(port , host) 

console.log ("el servidor esta ejecutandose")
