const url = require('url')
let address = 'http://localhost:3000/default.html/search?year=2017&month=february'
let q = url.parse(address,true)

console.log(q.pathname) ///default.html/search
console.log(q.query)  //[Object: null prototype] { year: '2017', month: 'february' }
console.log(q.protocol) //http:
console.log(q.search) //?year=2017&month=february
console.log(q.host) //localhost:3000
console.log(q.query.year)