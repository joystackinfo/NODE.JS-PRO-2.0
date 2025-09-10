const EventEmitter = require('events');

const emitter = new EventEmitter();

// Create listener functions
const listener1 = () => {
  console.log('an event has occurred in test 1');
};

const listener2 = () => {
  console.log('an event has occurred in test 2');
};

// Registering event listeners
emitter.on('test1', listener1);
emitter.on('test1', listener2);

// Emit event
emitter.emit('test1');

emitter.on('error', (err) => {
  console.error('Error event emitted:', err.message);
});

try {
  // Emit again
  emitter.emit('test1');

  // ❌ Correct way to remove a specific listener
  emitter.removeListener('test1', listener1);

  // Now only listener2 will run
  emitter.emit('test1'); 

} catch (error) {
  emitter.emit('error', error);
};