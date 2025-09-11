fs = require('fs');
WritableStream=fs.createWriteStream('output2.txt' )
 WritableStream.write('I love node .js');
 WritableStream.write('Hello Node.js');
 WritableStream.end();

 WritableStream.on('finish', () => {
   console.log('Finished writing file');
 });
