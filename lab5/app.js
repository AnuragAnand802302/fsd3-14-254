import express from 'express'

const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>hello express</h1>");
});

app.get("/about", (req,res)=>{
    res.send("<h1>we are students performing server operation in lab.</h1>")
});

app.use((req,res)=>{
    res.status(404).send("<h1> Not found whatever you are looking for.</h1>")
});

app.listen(3000, ()=>console.log("Server is running"));

