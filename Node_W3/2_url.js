/* const myURL = new URL('https://example.org/?year=2023&month=August')
// console.log(myURL.searchParams.get('year'))
myURL.searchParams.set('abc','xyz')
myURL.searchParams.set('abc2','xyz2')
myURL.searchParams.delete('abc2')
myURL.searchParams.delete('abc')
console.log(myURL.searchParams) */


const http = require('http')
const { URLSearchParams } = require('url')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    const url = req.url
    const myURL = new URL(url, 'http://localhost:3000/')
    const year = myURL.searchParams.get('year')
    const month = myURL.searchParams.get('month')
    console.log(myURL)
    console.log(year)
    console.log(month)
    console.log(`Year - ${year} and Month ${month}`)

    // if(url == '/'){
    //     res.writeHead(200,{'content-type':'text/html'})
    //     res.write(`<h1>Home</h1>`)
    //     res.end()
    // }
    // else{
        res.write(`This page is not routed`)
        res.end(`Year - ${year} and Month ${month}`)
    // }

}).listen(3000,()=>console.log(`Listening on the server 3000.....`))