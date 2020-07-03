import SocketIO from "socket.io-client";

const socket = SocketIO("http://localhost:5000");

export default socket;
