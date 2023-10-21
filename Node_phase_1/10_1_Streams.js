const fs = require('fs')

// creating big file
// for(let i=0; i<100000; i++){
//     fs.writeFileSync('../content/big-file.txt',`Hello world ${i}\n`,{flag:'a'})
// }

// To read data inn chunks
const stream = fs.ReadStream('../content/big-file.txt')

stream.on('data',(result)=>{
    console.log(result)
})



