const {URL}=require('url')
const myUrl=new URL('http://example.com:8080/path/name?query=hello#hash')
console.log('host' ,myUrl.host);
console.log('pathname' ,myUrl.pathname);
console.log('search params' ,myUrl.searchParams.get('query'));