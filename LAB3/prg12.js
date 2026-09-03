import http from "http"

const server = http.createServer((req,res)=>{
    // res.write("<h1>hello buddy!</h1>");
    if(req.url === '/' && req.method === 'GET'){
        res.end("Home Page");
    }else if(req.url === "/product" && req.method === "GET"){
        res.end("Show Product");
    }else if(req.url === "/product" && req.method === "POST"){
        res.end("add product");
    }else if(req.url === '/product' && req.method === "PUT"){
        res.end("Update Product");
    }else if(req.url === '/product' && req.method === "DELETE"){
        res.end("Remove product");
    }else{
        res.statusCode = 404;
        res.end("Not found")
    }
});

server.listen(3000, ()=>{
    console.log("server for prg12 at 3000");
})