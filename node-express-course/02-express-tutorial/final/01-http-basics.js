const http = require('http')

http.createServer((req,res)=>{
    console.log(req.method)
    console.log(req.url)

    const url = req.url

    //Home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home page</h1>')
        res.end()
    }

    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }

    // error page 404
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(`
        <h1> 404 </h1>
        <p>The page you are looking for is not found</p>`)
        res.end()
    }
    // res.writeHead(200,{'content-type':'text/plain'})
    // res.writeHead(200,{'content-type':'text/html'})
    // res.write(`<h1> Home page </h1>`)
    // res.end()
}).listen(3000,()=>{
    console.log(`Listening on the server 3000.......`)
})