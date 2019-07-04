const path = require('path');

// Base file name
console.log('__filename: ' + __filename);
console.log('path.basename(__filename): '+ path.basename(__filename));

// Directory name
console.log('path.dirname(__filename): ' + path.dirname(__filename));

// File extension
console.log('path.extname(__filename): ' + path.extname(__filename));

// Create path object
console.log('path.parse(__filename): ');
console.log(path.parse(__filename));

// Concatenate paths
console.log('path.join(__dirname, \'test\', \hello.html\): ' + path.join(__dirname, 'test', 'hello.html'));