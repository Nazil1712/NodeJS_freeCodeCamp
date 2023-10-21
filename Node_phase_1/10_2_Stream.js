const { error } = require('console')
const fs = require('fs')

const stream = fs.createReadStream('./content/big-file.txt',{highWaterMark:9000})
// const stream = fs.createReadStream('./content/big-file.txt',{encoding:'utf-8'})

// const stream = fs.createReadStream('./content/big-file.txt',{highWaterMark:9000, encoding:'utf-8'})

stream.on('data',(result)=>{
    console.log(result)
})

//  To catch error 
stream.on('error',(error)=>{
    // console.log(error)
    console.log("Error has been occured")
})