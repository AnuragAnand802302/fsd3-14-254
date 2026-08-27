import http from "http"
import { createReadStream } from "fs";

const server = http.createServer(async(req,res)=>{
    const stream = createReadStream("big.txt", {encoding});
    stream.pipe(res);
    res.end();
});

server.listen(3000,()=>console.log("Server is running..."));