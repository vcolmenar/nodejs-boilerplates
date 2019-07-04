const url = require('url');
const myUrl = new url.URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.href.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Add param
myUrl.searchParams.append('abc','123');

//Params object
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value,name) => {
    console.log(`${name}: ${value}`);
})
