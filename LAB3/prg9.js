import http from "http"
import { createReadStream } from "fs";
import { writeFile, readFile, appendFile } from 'fs/promises';

const server = http.createServer(async(req,res)=>{
    if(req.url === '/stream'){
        const stream = createReadStream("big.txt", {encoding: "utf-8"});
        stream.pipe(res);
    }else if(req.url === '/product'){
        res.setHeader("content-type","text/html");
        res.statusCode = 200;
        const data = createReadStream("product.html");
        data.pipe(res);
    }else if(req.url === '/home'){
        res.setHeader("content-type","text/html");
        res.statusCode = 200;
        const data = createReadStream("index.html");
        data.pipe(res);
    }else if(req.url === "/about"){
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;

        const data = createReadStream("about.html");

        data.pipe(res);
    }
    // res.end();
});

server.listen(3000,()=>console.log("Server is running..."));