import type { handlerSet } from "../types/StateSetters";
import type { addNoteHandler } from "../types/StateSetters";

import { useEffect, useRef, useState } from "react";

const errors = {
  Lenght: "Content must have 10 or more characters.",
  Empty: "Content cannot be empty.",
  CantCreate: 'An error ocurred when trying to create the note.'
} as const;

type typeError = (typeof errors)[keyof typeof errors];

export default ({
  hideState,
  toggleHideState,
  createNote,
}: handlerSet & addNoteHandler) => {
  const textAreaContent = useRef<HTMLTextAreaElement>(null);
  const textAreaAuthor = useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState<typeError | null>(null);
  const requestStatus = useRef(false) 

  useEffect(() => {
    requestStatus.current = false

    if (error){
       setTimeout(() => {
      setError(null);
    }, 1300);
    }
   
  },[error]);

  return (
    <div>
      <div className="">
        <textarea
          maxLength={50}
          placeholder="Author (it is not necessary)"
          className={`text-center p-5 mt-20 min-w-1/5 max-w-3/4 md:max-w-1/3 max-h-100 w-50 h-20 resize-x bg-[#3b3a3a] mx-0`}
          ref={textAreaAuthor}
        ></textarea>
      </div>

      <div className="">
        <textarea
          required
          maxLength={1000}
          placeholder="Content"
          className={`text-center p-5 mb-5 min-h-/4 min-w-1/5 max-w-3/4 max-h-100 py-5 size-50 resize bg-[#3b3a3a] mx-0`}
          ref={textAreaContent}
        ></textarea>
      </div>

      <button
        onClick={async () => {
     //     if (requestStatus.current === true) return 
       //   requestStatus.current = true

          const trimmed = textAreaContent.current!.value.trim();

          if (trimmed == "") {
            setError(errors.Empty);
            return;
          } else if (trimmed.length < 10) {
            setError(errors.Lenght);
            return;
          }
          
          const createNoteResponse = await createNote(
            textAreaAuthor.current!.value.trim() == ""
              ? "Anonymous"
              : textAreaAuthor.current!.value,
            textAreaContent.current!.value.trim()
          );
          console.log(createNoteResponse)
          
          if (createNoteResponse != 200) {
            setError(errors.CantCreate)
            
            return 
          }

          toggleHideState(!hideState);

          //requestStatus.current = false

        }}
        className="cursor-pointer text-2xl w-35 min-h-15 bg-green-600"
      >
        {error ?? "Publish"}
         
      </button>
    </div>
  );
};
