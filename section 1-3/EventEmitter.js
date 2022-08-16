const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on('response',() => {
  console.log("Data Encapsulation");
})

customEmitter.on('response', (user, id) => {
  console.log(`Data retrieved from ${user} whose id ${id}`);
})

customEmitter.emit('response', 'Vinay', 408120);