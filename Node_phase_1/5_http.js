const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    res.end("Welome to our home page")
  }
  else if(req.url === "/about"){
    res.end("This is our short history")
  }
  else{
    res.end(`
    <h1>Oops!</h1> 
    <p>We can't seem to find the page you are looking for!</p> 
    <a href="/">Back to home</a>`)
  }

});

server.listen(3000)