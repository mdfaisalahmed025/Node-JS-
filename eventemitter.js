
const EventEmiiter =require('events')
const customEmitter= new EventEmiiter()

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log('some other logic here ')
})

customEmitter.emit('response', 'jhon', 34)