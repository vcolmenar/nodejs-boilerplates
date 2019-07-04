const fs = require('fs');
const path = require('path');

//Create folder
fs.exists(path.join(__dirname, '/test'), (exists) => {
    if(!exists) {
        fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
            if(err) throw err;
            console.log('Folder created...');
        })
    } else {
        console.log('Folder exists already, skipping...');
    }
})

//Create, write, and update to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
    if(err) throw err;
    console.log('File created...');

    //update file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\r\nI love node.js', (err) => {
        if(err) throw err;
        console.log('File updated...');

        //Read file
        fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
            if (err) throw err;
            console.log('File read: ');
            console.log(data);

            //Rename file
            fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
                if(err) throw err;
                console.log('File renamed...');

                //Delete file
                
            } )
        })
    });

    
});


