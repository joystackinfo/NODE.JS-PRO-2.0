
//CRYPTO (create a cryptographic hash)
const crypto=require('crypto')
  const hash=crypto.createHash('sha256')
  hash.update('Hello, World!, this is a secret message.')
console.log('Hash:', hash.digest('hex'));