const http = require('http');
const router = require('find-my-way')()
const hostname = '127.0.0.1';
const port = 3000;


router.on('GET', '/', function (req, res, params) {
    res.statusCode = 200;
    res.end('home page')
})


router.on('GET', '/about', function (req, res, params) {

    res.statusCode = 200;
    res.end('about page')
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    router.lookup(req, res);
    res.end("Hello world");
});


server.listen(port, hostname, (err) => {
    if(err) {
        throw new Error(err);
    }
    console.log(`Server running at http://${hostname}:${port}/`);
});


