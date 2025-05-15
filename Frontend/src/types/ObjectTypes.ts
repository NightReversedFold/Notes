import type { Dispatch, SetStateAction } from 'react';

export type note = {
  author: string;
  content: string;
}

export type notes = {
  notes:note[]
}

export type noteHandler = notes & {handler:Dispatch<SetStateAction<note[]>>}