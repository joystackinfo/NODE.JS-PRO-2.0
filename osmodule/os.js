const os = require('os');

console.log('Operating System Information:');
//console.log('--------------------------------',{os});
 console.log('platform:', os.platform());
console.log('architecture:', os.arch());
console.log('total memory:', os.totalmem());
console.log('free memory os:', os.freemem());
console.log('user info:', os.userInfo());