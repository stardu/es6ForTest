let fs = require('fs');

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

async function gen() {
    let f1 = await readFile('file/a.txt');
    let f2 = await readFile('file/b.txt');
    console.log(f1.toString());
    console.log(f2.toString());
}

gen();