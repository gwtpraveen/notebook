import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MultiSelectTags } from "./MultiSelectTags";
import "./style/NoteForm.scss";

export const NoteForm = ({onSubmit, title, tag, note, id}) => {
    const titleRef = useRef();
    const textareaRef = useRef();
    const [tags, setTags] = useState(tag);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title: titleRef.current.value,
            tags: tags,
            note: textareaRef.current.value,
            id
        });
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="formGroup">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="title" ref={titleRef} defaultValue={title}/>
                </div>
                <div className="formGroup">
                    <MultiSelectTags tags={tags} setTags={setTags}/>
                </div>
            </div>
            <div className="formGroup">
                <label htmlFor="note">Note</label>
                <textarea name="note" id="note" rows="20" placeholder="note" ref={textareaRef} defaultValue={note}></textarea>
            </div>
            <div className="btnDiv">
                <button type="submit" className="btn">Save</button>
                <Link to="..">
                    <button className="btn">Back</button>
                </Link>
            </div>
        </form>
    )
};

NoteForm.defaultProps = { title: null, tags: [], note: null, id:null}
