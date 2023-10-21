const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: fs.createReadStream('./demo.html')
})

let lineno = 0;
rl.on('line',(line)=>{
    lineno++;
    console.log(`${lineno} : ${line}`)
})

