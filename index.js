const http = require('http');
const path = require('path');
const fs = require('fs');

const server = new http.createServer((req,res) => {
    if(req.url === '/')   
    fs.readFile(path.join(__dirname, 'public', 'index.html'),(err,data) => {
        if(err) throw err;
        res.writeHead(400, {'Content-Type': 'text/html'}); 
        res.end(data);
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

var start = new Date();
const file = fs.createWriteStream('./big.file');
for(let i = 0; i <= 1e6; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n',
    () => {
        if(i == 1e6) {
            var end = new Date();
            var stopwatch = end - start;
            console.log(stopwatch);

        }
    });
}

file.end();