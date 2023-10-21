const {readFileSync, writeFileSync} = require('fs')
const fs = require('fs')


// Sync
// console.log("start")
// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')
// console.log("Read Successfull")
// console.log(first)
// console.log(second)
// console.log("Done with reading task")


// console.log("start write opetion")
// // writeFileSync('./content/result-sync.txt',`Here the result is : \n${first},\n${second}`)
// // writeFileSync('./content/result-sync.txt',`Here the result is : \n${first},\n${second}`,{flag:'a'})
// console.log("Write complete")


//Async
console.log("start first reading file")

fs.readFile('./content/first.txt','utf8',(err,data)=>{
  if(err){
    console.log("err");
    return;
  }
  // console.log(data)
  console.log("First read Complete")
  const first = data;

  console.log("Start second reading file")
  fs.readFile('./content/second.txt','utf8',(err,data)=>{
    if(err){
      console.log("err");
      return;
    }
    // console.log(data))
    console.log("second read Complete")
    const second = data;

    console.log("Start writing file")
    fs.writeFile('./content/result-async.txt',`Here is the result : ${first} and ${second}`,{flag:'a'},(err,data)=>{
      if(err){
        console.log("err");
        return;
      }

    })
    console.log("Write complete")

  })

})

console.log("All task completed\n")