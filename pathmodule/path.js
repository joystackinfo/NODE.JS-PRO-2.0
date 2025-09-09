const path = require('path');
   const directory = '/user/local'
   const fileName = 'example.txt'
   const fullpath = path.join(directory, fileName)
   console.log(fullpath);
   console.log("Full path:", fullpath);
// Get just the file name
console.log("Base name:", path.basename(fullpath)); // example.txt
// Get just the extension
console.log("Extension:", path.extname(fullpath)); // .txt
// Get just the directory
console.log("Directory name:", path.dirname(fullpath)); // /user/local
// Even without extension
console.log("File name without ext:", path.basename(fullpath, path.extname(fullpath))); // example
