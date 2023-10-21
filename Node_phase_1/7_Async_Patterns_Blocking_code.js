const http =  require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('<h1>HOME</h1>')
    }
    else if(req.url === '/about'){
        // Blocking Code!!!!!!!
        // That's  why using Async Approach is better than this!!!
        for(let i=0; i<1000; i++){
            for(let j =0; j<1000 ; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('<h1>About</h1>')
    }
    else{
        res.end(`<h1>Page Error</h1>`)
    }
})

server.listen(3000,()=>{
    console.log('Listening on the port 3000....')
})