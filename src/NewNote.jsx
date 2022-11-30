import { NoteForm } from "./NoteForm";

export const NewNote = ({onSubmit}) => {
    return (
        <>
            <h1>New Note</h1>
            <NoteForm onSubmit={onSubmit}/>
        </>
    )
};
