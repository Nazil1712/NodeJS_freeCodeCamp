const querystring = require('querystring')

// querystring.parse()
/* let q = `name=Nazil&company=mom's Biryani`
let ans = querystring.parse(q)
console.log(ans) */



// querystring.stringify()
let q2 = querystring.stringify({name:"Nazil",company:"Mom's Biryani"})
console.log(q2)