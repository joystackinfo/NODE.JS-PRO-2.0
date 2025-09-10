fs = require('fs');
const readablestream =fs.createReadStream('example.txt', {encoding: 'utf8'})
readablestream.on('data' ,(chunk) => {
  console.log(chunk);//to readthe file in chunks
})

readablestream.on('end', () => {
  console.log('Finished reading file');//to execute the command
});

readablestream.on('error', (err) => {
  console.error('Error', err);
});