
const http = require("http");// In nodeJs we get an object when we require http.
const fs = require("fs");// In nodeJs to access file system we have to require fs module.

// creating server by http and it returns an object to us.
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if (req.method.toLocaleLowerCase() === "get" && req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(fs.readFileSync("./index.html"));
        res.end();
    } else if (req.method.toLocaleLowerCase() === "get" && req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(fs.readFileSync("./about.html"));
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(fs.readFileSync("./404.html"));
        res.end();
    }
});

// listening server by listen method
server.listen(2000, "localhost", () => {
    console.log("Our server is running on port 2000");
})

