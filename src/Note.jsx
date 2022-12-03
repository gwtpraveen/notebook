import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Note = ({notes}) => {
    const data = useParams();
    const note = notes.filter(item => item.id == data.id)[0]

    return (
        <div>
           <p>{note.title}</p>
           <p>{note.note}</p>
           <Link to={`../edit?id=${data.id}`}>
            <button>Edit</button>
           </Link>
           <button>Delete</button>
        </div>
    )
}
