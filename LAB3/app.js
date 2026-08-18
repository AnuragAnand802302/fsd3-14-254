import http from "http";

const server = http.createServer();
server.on("request", (req, res) => {
  res.write("Welcome To server side programming");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running");
});
