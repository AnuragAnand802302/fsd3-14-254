import http from "http"

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url === "/product"){
        res.end(`<h1>Mobile Phone</h1>
                <h2>Price: 25000</h2>
                <p>Discount: 5%</p>
                <a href='#'> Buy Now </a>
                <br>
                <h1>Laptop</h1>
                <h2>Price: 50000</h2>
                <p>Discount: 10%</p>
                <a href='#'> Buy Now </a>
        `);
    }
    else if(req.url === "/Cart"){
        res.end(`
                <h2>🛒->has 2 items</h2>
        `);
    }
    else if(req.url === "/checkout"){
        res.end(`<h1>Checked Out</h1>
        `);
    }
    else{
        res.statusCode = 404;
        res.end(`
                <h1>404, Not found</h1>
                <p>page Not found</p>
                <a href='/'>Home</a>
            `);
    }
})

server.listen(3000, ()=>{
    console.log("Server is running at 3000 port");
    
})