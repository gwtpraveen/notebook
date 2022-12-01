import { Link } from "react-router-dom"

export const Notes = ({notes}) => {
    return (
        <>
            <div className="grid">
                {(notes.length !== 0) ? notes.map(item => 
                    <div className="card" key={item.id}>
                        <p>{item.title}</p>
                        <div className="tags">
                            {item.tags && item.tags.map(tag => 
                                <span key={tag}>{tag}</span>
                            )}
                        </div>
                        <p>{item.date}</p>
                        <Link to={`./note/${item.id}`}>
                            <button>view</button>
                        </Link>
                    </div>
                ) : <p>No notes</p>}
            </div>
        </>
    )
}