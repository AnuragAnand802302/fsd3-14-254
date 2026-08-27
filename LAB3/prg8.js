import http from "http"
import { createReadStream } from "fs";
import { writeFile, readFile, appendFile } from 'fs/promises';

const server = http.createServer(async(req,res)=>{
    if(req.url === '/stream'){
        const stream = createReadStream("big.txt", {encoding: "utf-8"});
        stream.pipe(res);
    }else if(req.url === '/normal'){
        res.write("Loading....");
        const text = await readFile("big.txt");
        res.end(text);
    }else{

    }
    // res.end();
});

server.listen(3000,()=>console.log("Server is running..."));