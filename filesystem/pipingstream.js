const fs=require('fs');
const readablestream=fs.createReadStream('example.txt') //to create a readable stream

const WritableStream=fs.createWriteStream('example-output.txt') //to create a writable stream
readablestream.pipe(WritableStream); // to pipe both readable and writable streams
WritableStream.on('finish', () => {
    console.log('File copied successfully');  // to indicate successful copy
});