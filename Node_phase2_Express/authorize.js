const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user=='John' || user == 'john')
    {
        req.user = {name:"John",id:1712}
        // return next()
    }
    else{
        return res.status(401).send(`<p style=color:"red">Authantication failed!</p>`)
    }
    console.log('Authorize complete')
    next()
}

module.exports = authorize