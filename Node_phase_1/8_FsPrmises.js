const path = require('path')

const fs = require('fs').promises


const fsOp =async ()=>{
    try{
        const ans = await fs.readFile(path.resolve('D:/Nazil/1 A CHARUSAT/1 Visual Studio Code/Personal/_9_Node_JS_/content/first.txt'),'utf-8')
        console.log(ans)
        await fs.writeFile(path.resolve('D:/Nazil/1 A CHARUSAT/1 Visual Studio Code/Personal/_9_Node_JS_/content/first.txt'),"Hey I am nazil from Changa")
        await fs.appendFile(path.resolve('D:/Nazil/1 A CHARUSAT/1 Visual Studio Code/Personal/_9_Node_JS_/content/first.txt'),"\n I am also here")
        // await fs.re
    }
    catch(err){
        console.log("Error has been occured!")
        console.log(err)
    }
}

fsOp()

