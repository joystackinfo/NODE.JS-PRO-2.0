 const fs = require('fs');
 fs.writeFile('output.txt', 'Hello, NodeJs,welcome to the world of file systems!,also node.js ', (err) => {
     if (err) {
        console.error(err);
        return;
     }
     console.log('File written successfully');
 });