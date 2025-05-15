import { useEffect, useState } from "react";
import NotesContainer from "./components/NotesContainer";
import CreateNote from "./components/CreateNote";
import AddButton from "./components/AddButton";

import type { note } from "./types/ObjectTypes";

import { useRef } from "react";

import getSocket from "./socket";
import { Socket } from "socket.io-client";

function App() {
  const [hide, update] = useState<boolean>(false);
  const [notes, setNotes] = useState<note[]>([]);
  const [notesSetted, setNotesSetted] = useState<true | null>(null);

  const socket = useRef<Socket | null>(null);

  const createNoteSh = async (
    author: string = "Anonymous",
    content: string
  ): Promise<number> => {
    try {
      const note: note = {
        author,
        content,
      };

      const query = await fetch("/api/createNote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(note),
      });

      if (query.status == 200) {
        socket.current?.emit("notePublished", note);
      }

      return query.status;
    } catch (err) {
      console.log(err);
      return 500;
    }
  };

  const setNotesFromDB = async () => {
    console.log("notes container use effect");

    const res = await fetch("/api/getNotes");
    const res2 = await res.json();

    setNotes(res2);

    setNotesSetted(true);
  };

  useEffect(() => {
    socket.current = getSocket();

    socket.current.on("notePublished", (note) => {
      console.log("Note published from a client");

      setNotes((currentNotes) => [...currentNotes, note]);
    });

    setNotesFromDB();

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  return (
    <div className="text-center flex flex-col justify-items-center m-9 bg-[#1f1f1f] text-white py-15">
      <div className="flex flex-col gap-y-10 justify-center w-full size-30 items-center text-6xl p-25 mb-15">
        <h1 className="align-middle basis-full pt-15 lg:pt-0 lg:text-9xl">
          Notes!
        </h1>
        <p className="text-amber-50/50 text-[20px] lg:text-2xl">
          Notes cannot be deleted, so be careful.
        </p>
        <AddButton hideState={hide} toggleHideState={update} />
      </div>

      {hide ? (
        <CreateNote
          createNote={createNoteSh}
          hideState={hide}
          toggleHideState={update}
        />
      ) : (
        <NotesContainer
          notes={notes}
          handler={setNotes}
          notesSetted={notesSetted}
        />
      )}
    </div>
  );
}

export default App;
