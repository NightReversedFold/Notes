import type {note} from './ObjectTypes'

export interface ServerToClientEvents {
 notePublished:(nota:note) => void
}

export interface ClientToServerEvents {
 notePublished:(nota:note) => void
}

export interface InterServerEvents {
  ping: () => void;
}
export interface SocketData {
  name: string;
  age: number;
}