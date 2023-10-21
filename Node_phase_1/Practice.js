const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    const readable = fs.createReadStream('../content/newBig.txt')

    readable.pipe(res)

}).listen(3000,()=>console.log("Liistening on 3000......"))