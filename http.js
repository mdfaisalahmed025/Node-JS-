
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`welcome to our home page`)
    }
    if(req.url === '/about'){
        res.end(`Here is our short history`)
    }
    
    res.end(`
    <h1> OOpss!</h1>
    <p> Sorry! We can't seem to find the page you are looking for </p>
    <a href= "/"> back Home</a>

    `)

})
server.listen(5000)