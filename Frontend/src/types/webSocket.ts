import type {note} from './ObjectTypes'

export interface ServerToClientEvents {
  notePublished: (nota:note) => void
}
export interface ClientToServerEvents {

}
