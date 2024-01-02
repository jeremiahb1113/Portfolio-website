const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("dummyBtn", () => {
    console.log('button clicked!!!!!');
})

emitter.emit("dummyBtn");

function dummyBtn(){
    console.log('button clicked!!!!!');
}

export default dummyBtn();