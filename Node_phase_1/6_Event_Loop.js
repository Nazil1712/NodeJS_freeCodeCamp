// 1)
// console.log("start")
// console.time()
// for(let i=0; i<100000;i++){
//     const h3 =document.querySelector("h3")
//     h3.textContent = 'Hey, Everyone is waiting on me'
// }
// console.timeEnd()

// console.log("End")


// 2) Offload
// console.log("First Task")
// // Eventhough time is 0, it will be offloaded!
// setTimeout(()=>{
//     console.log("Second task")
// }, 0)
// console.log("Third Task")


// 3) fs module example
// const fs = require('fs')
// const path = require('path')

// console.log("Started first Task")

// // Offloading() because it is Asynchronous
// fs.readFile(path.join(__dirname,'Content','first.txt'),'utf-8',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data)
//     console.log("Completed  task")
// })
// console.log("Starting the next Task")


// 4) SetInterval(())
//offload
// setInterval(()=>{   
//     console.log("I am SetInterval")
// }, 2000)
// console.log("I will run first")

// 5) http
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Server is running")
    res.end(`<h1> HEllo world </h1>`)
})

// This call back is differnet than Event Loop Remember that thing
// This executed at the time of successfull listening request and not again
server.listen(3000,()=>{
    console.log("Listening on the port 3000")
})