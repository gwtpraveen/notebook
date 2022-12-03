import { useSearchParams } from "react-router-dom";
import { NoteForm } from "./NoteForm";

export const NoteEdit = ({onSubmit, notes}) => {
    const [searchParams] = useSearchParams();
    const noteId = searchParams.get("id");
    const note = notes.filter(item => item.id == noteId)[0];

    return (
        <div>
            <h1>NoteEdit</h1>
            <NoteForm onSubmit={onSubmit} title={note.title} tag={note.tags} note={note.note} id={note.id}/>
        </div>
    )
}
