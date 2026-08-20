import http from "http";   //use http if https not working

const server = http.createServer((req, res) => {
  console.log("Welcome to Node JS");
  console.log(req.url);
  console.log("Request Method:");

  console.log(req.method);
  console.log("Request Header");
  console.log(req.headers);
  console.log("Socket info");
//   console.log(req.socket);
  console.log(req.headers.host);
  res.end("Hello");
});

server.listen(3000, () => {
  console.log("server is running... at 3000");
});
