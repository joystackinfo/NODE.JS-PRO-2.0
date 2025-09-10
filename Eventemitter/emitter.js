 const EventEmitter = require('events');

const emitter = new EventEmitter() 
  //registering a event listener

    emitter.on('test1', ()=>{
     console.log('an event has occured in test 1');
   })

   emitter.on('test1', ()=>{
     console.log('an event has occured in test 2');
  })

   emitter.emit('test1');

  emitter.on('error', (err) => {
    console.error('Error event emitted:', err.message); 
  });


   try {
  emitter.emit('test1');
    emitter.removeListener('test1');
    emitter.emit('test1'); // this will not log anything because the listener has been removed
    
    } catch (error) {
      emitter.emit('error', error) // emit an error event if any error occurs
  };