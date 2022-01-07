//Events é um objt nativo do node pode pader ouvir e disparar eventos
//Importanto events

/*const events = require('events')

console.log(events)
*/


//Para poder disparar eventes precisamos extrar do obj event a function Emmiter (function estilo class), veja abaixo.
const { EventEmitter } = require("events")

const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log("Eu ouvi você: ", message)
})

//Para emitir o evento utilizado a function emit()

ev.emit('saySomething', "Everson")
ev.emit('saySomething', "João")
ev.emit('saySomething', "Fulano")
