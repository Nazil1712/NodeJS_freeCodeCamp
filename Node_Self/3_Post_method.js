const request = require('request')


const url = "https://example.com/users"
const data ={
    name:"Nazil",
    email:"nazil@gmail.com"
}

request({
    method:'POST',
    url,
    body:JSON.stringify(data)
},
(err,res,body)=>{
    if(err) throw err
    else{
        console.log(body)
    }
})