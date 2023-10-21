const http = require('http')
const fs = require('fs')
const { chunk } = require('lodash')
const { error } = require('console')

http.createServer((req,res)=>{
    // const ans = fs.readFileSync('./content/big-file.txt','utf-8')
    // res.end(ans)

    const ans = fs.createReadStream('./content/big-file.txt',{encoding:'utf-8'})

    //1)
    // ans.on('data',(chunk)=>{
    //     res.end(chunk)
    // })
    // ans.on('error',(error)=>{
    //     res.end(error)
    // })

    // 2) Another way to write file on the WebPage
    ans.pipe(res)
    
}).listen(3000,()=>{
    console.log(`Listenning on the pert 3000......`)
})