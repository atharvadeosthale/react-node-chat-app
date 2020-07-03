const http = require("http").createServer();
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("client connected");
  socket.on("message", (data) => {
    io.emit("message", { from: data.from, message: data.message });
  });
});

http.listen(5000, () => {
  console.log("Server running at port 5000");
});
