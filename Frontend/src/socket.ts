import { io, Socket } from "socket.io-client";

import type { ServerToClientEvents, ClientToServerEvents } from "./types/webSocket";

const getSocket = (): Socket<ServerToClientEvents, ClientToServerEvents> =>{
    return io('http://localhost:3000') 
}

export default getSocket

