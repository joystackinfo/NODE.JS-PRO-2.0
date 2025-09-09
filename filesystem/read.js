const fs=require('fs')
fs.readFile('example.txt', 'utf8', (err, data) => {  // to read the file
  if (err) {
      console.error(err)  // to log errors
       return;
   }
   console.log(data)  // to log the file content
});
