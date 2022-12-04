import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NewNote } from "./NewNote";
import { Layout } from "./Layout";
import { NewNoteObj } from "./Helper";
import { Notes} from "./Notes";
import { Note } from "./Note";
import { NoteEdit } from "./NoteEdit";


function App() {
  const [notes, setNotes] = useState(() => {
    if (localStorage.getItem("notes")) {
      return JSON.parse(localStorage.getItem("notes"));
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])  

  const handleSubmit = ({title, tags, note}) => {
    const newNote = new NewNoteObj(title, tags, note);
    setNotes(preVal => {
      return [...preVal, newNote];
    });
  }

  const updateNote = ({title, tags, note, id}) => {
    setNotes(preVal => {
      const notes = [...preVal];
      for (let x of notes) {
        if (x.id == id) {
          x.title = title;
          x.tags = tags;
          x.note = note
        }
      }

      return notes;
    })
  }

  const handleDelete = (id) => {
    setNotes(preVal => {
      const notes = preVal.filter(item => item.id != id);
      return notes;
    })
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Notes notes={notes}/>} />
          <Route path="/new" element={<NewNote onSubmit={handleSubmit}/>} />
          <Route path="/note">
            <Route path=":id" element={<Note notes={notes} onDelete={handleDelete}/>}/>
            <Route path="edit" element={<NoteEdit notes={notes} onSubmit={updateNote}/>}/>
          </Route>
          <Route path="*" element={<h1>not found</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
