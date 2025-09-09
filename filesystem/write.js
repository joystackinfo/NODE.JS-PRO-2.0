 
 fs.writeFile('output.txt', 'Hello, NodeJs', (err) => {
     if (err) {
        console.error(err);
        return;
     }
     console.log('File written successfully');
 });