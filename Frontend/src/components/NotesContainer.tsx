
import type {noteHandler} from '../types/ObjectTypes'

import Note from './Note'

export default ({
  notes,
  notesSetted
}:noteHandler & {
  notesSetted: true | null
}) => {

  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-20 px-5 py-15 gap-5 justify-items-center`}
    >

    {notesSetted ? notes.map(({author, content},indx) =>{
      return <Note key={indx} author = {author} content = {content}/>
    }): 
      <p>Loading notes...</p>
    }

    </div>
  );
};
