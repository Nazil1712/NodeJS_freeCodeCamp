// 1) Not using Async - await
/* const {readFile} = require('fs');

const getText = (Filepath)=>{
    return new Promise((resolve,reject)=>{
        readFile(Filepath,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
};

getText('./content/fir5st.txt').then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
}) */


// 2) using Async - await
const {readFile, writeFile} = require('fs');

const getText = async(Filepath)=>{
    return new Promise((resolve,reject)=>{
        readFile(Filepath,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
};

const writeText = async(wfPath,string)=>{
    writeFile(wfPath,string,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Write COmplete")
        }
    })
}

// Error not handled here
/* const start = async()=>{
    const ans = await getText('./conten55t/second.txt');
    console.log(ans)
} */


// hence handling the error
const start = async()=>{
    let ans1;
    let ans2;
    let ans3;
    try{
        ans1 = await getText('./content/second.txt');
        ans2 = await getText('./content/first.txt');
         await writeText('./content/writeff',"Hey This is WriteTExt function")
        console.log(ans1)
        console.log(ans2)
    }
    catch(err){
        if(err){
            console.log(err)
        }
    }
}

start()