var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);


function handleServer(req, res) {
    if (req.url === '/welcome') {
        res.writeHead(200);
        res.write(' Welcome to Dominos!');
    }
    else if (res.url === 'contact') {
        res.setHeader('Content-Type' , 'application/json');
        res.end(JSON.stringify({
            "phone" : '18602100000',
            "email" : 'guestcaredominos@jublfood.com'
        }))
    }
    res.end()
}

module.exports = httpServer;
console.log("port listening to port 8081");