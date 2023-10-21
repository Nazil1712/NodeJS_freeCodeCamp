const http = require('http')
const {readFileSync} = require('fs')

// 1)
// const homePage = readFileSync('./html_others/index.html')

// 2)
// const homePage = readFileSync('./navbar-app/index.html')

// 3)
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeJs = readFileSync('./navbar-app/browser-app.js')
const homeLogo = readFileSync('./navbar-app/logo.svg')


http.createServer((req,res)=>{
    const url = req.url
    console.log(url)
    //Home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }

    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    }

    //css
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }

    //  Js
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeJs)
        res.end()
    }

    //Logo
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo)
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
}).listen(3000,()=>{
    console.log(`Listening on the server 3000.......`)
})