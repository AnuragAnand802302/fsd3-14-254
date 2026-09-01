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
        const data1 = createReadStream("product.html");
        data1.pipe(res);
    }else if(req.url === '/home'){
        res.setHeader("content-type","text/html");
        res.statusCode = 200;
        const data2 = createReadStream("index.html");
        data2.pipe(res);
    }else if(req.url === "/about"){
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;

        const data3 = createReadStream("about.html");

        data3.pipe(res);
    }
    // res.end();
});

server.listen(3000,()=>console.log("Server is running..."));