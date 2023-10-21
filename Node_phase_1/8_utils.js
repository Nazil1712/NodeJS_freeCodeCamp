const {readFile, write, writeFile} = require('fs')

const util =  require('util')

let fsReadFile = util.promisify(readFile)
let fsWriteFile = util.promisify(writeFile)

const fileOps = async()=>{
    try{
        const a1 = await fsReadFile('./content/first.txt','utf8')
        console.log(a1)
    }catch(err){
        console.log(err)
    }
}

fileOps()