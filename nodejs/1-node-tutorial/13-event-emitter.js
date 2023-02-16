const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id ${34}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here `)
})

customEmitter.emit('response', 'john', 34)