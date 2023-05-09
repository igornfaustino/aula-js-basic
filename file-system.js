const {readdir} = require("fs");
const {readdir: readdirPromise} = require("fs/promises");

readdir(".", (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(files);
})

readdirPromise(".").then((files) => {
    console.log(files);
}).catch(err => {
    console.log(err);
})