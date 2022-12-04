import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Note = ({notes, onDelete}) => {
    const data = useParams();
    const note = notes.filter(item => item.id == data.id)[0];

    const handleDelete = () => {
        onDelete(data.id);
    }

    return (
        <div>
           <p>{note.title}</p>
           <p>{note.note}</p>
           <Link to={`../edit?id=${data.id}`}>
            <button>Edit</button>
           </Link>
           <Link to="/">
            <button onClick={handleDelete}>Delete</button>
           </Link>
        </div>
    )
}
