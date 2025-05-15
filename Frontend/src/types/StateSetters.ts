
export type handlerSet = {
  hideState: boolean;
  toggleHideState: React.Dispatch<React.SetStateAction<boolean>>
}

export type addNoteHandler = {
  createNote: (Author:string, Content:string) => Promise<number>
}

