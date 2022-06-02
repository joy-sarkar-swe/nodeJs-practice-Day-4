const fs = require("fs");
const http = require("http");// In nodeJs we get an object when we require http.

// creating server by http and it returns an object to us.
// http.createServer((req, res) => {
    // const data = fs.readFileSync("./random.txt");
    // const data = fs.createReadStream("./random.txt");
    // data.on("data", chunk=>{
    //     console.log(chunk);
    // })
    // res.write(data);
    // res.end();
// }).listen(2000, ()=> {
//     console.log("server running at 2000 port.");
// });

// ==========================================================================================================//

// const readStream = fs.createReadStream("./random.txt");
// const writeableStream = fs.createWriteStream("./writeableFile.txt");

    // readStream.on("data", chunk=>{
    //     writeableStream.write(chunk);
    // })

    //in shortcut 
// readStream.pipe(writeableStream);

// ==========================================================================================================//


const writeableStream = fs.createWriteStream("./writeableFile.txt");

// creating server by http and it returns an object to us.
http.createServer((req, res) => {
    const readStream = fs.createReadStream("./random.txt"); 
    readStream.on("data",(chunk)=> {
        res.write(chunk);
    })
    readStream.on("end", () => {
        res.end();
    })
}).listen(2000, ()=> {
    console.log("server running at 2000 port.");
});