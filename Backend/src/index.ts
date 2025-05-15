import express from 'express'
import type { Request, Response } from 'express'

import router from './routes.db'
import http from 'http'

import { ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData} from '../types/webSocket'

import {Server,Socket} from 'socket.io'
import { CORS_url, PORT } from './config'

const app = express()
const server = http.createServer(app)

const io = new Server<ClientToServerEvents,ServerToClientEvents, InterServerEvents,SocketData>(server,{
    cors:{
        origin:CORS_url
    }
})

type socket = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

io.on('connection',(socket:socket) =>{
    console.log('Client connected: ')

    socket.on('disconnect',() => {
        console.log('Client disconnected')
    })

    socket.on('notePublished',(nota) => {
        console.log('Note from client', nota)
        io.emit('notePublished',nota)
    })
})

app.use(express.json());

app.use('/api',router)

server.listen(PORT,() =>{
    console.log('server')
})