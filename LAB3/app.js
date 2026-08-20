import http from "http";

const server = http.createServer((req, res) => {
  res.end("<h2>Welcome to Serverside programming</h2>");
});

server.listen(3000, () => {      //'npm i'  or 'npm install' command is used to install package by terminal through reading json packages
  console.log("Server is running");
});
