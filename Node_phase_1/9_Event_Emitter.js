// const events = require('events')
// const EventEmitter = new events.EventEmitter()

// EventEmitter.on('response',(data,id)=>{
//     console.log(`Data received of user ${data} with id ${id}`)
// })

// EventEmitter.emit('response','john',34)


// Another example
const events = require('events')
const EventEmitter = new events.EventEmitter()

EventEmitter.on('scream',()=>{
    console.log("hey i am nazil")
})

EventEmitter.emit('scream')
