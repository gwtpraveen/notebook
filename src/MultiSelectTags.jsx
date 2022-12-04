import { useRef } from "react";

export const MultiSelectTags = ({tags, setTags}) => {
    const tagInputRef = useRef();

    const handleTags = () => {
        const tags = tagInputRef.current.value;
        if (tags) {
            const tagsList = tags.split("|");
            setTags(tagsList);
        }
        tagInputRef.current.value = null;
    };

    const handleRemoveTag = (tag) => {
        setTags(preVal => {
            const newTags = preVal.filter(item => item !== tag);
            return newTags;
        })
    };

    const handleFocus = () => {
        tagInputRef.current.value = tags.join("|");
        setTags([]);
    };

    return (
        <div className="multiSelectTagContainer">
            <label htmlFor="tag">Tag</label>
            <div className="inputFeild">
                { tags && tags.map(item => 
                    <div className="tag" key={item}>
                        <p>{item}</p>
                        <button onClick={() => handleRemoveTag(item)}>X</button>
                    </div>
                )}
                <input type="text" id="tag" ref={tagInputRef} onBlur={handleTags} onFocus={handleFocus} placeholder="seperated by '|' eg:- tag1|tag2"/>
            </div>
        </div>
    )
}

// TODO: fix if user input empty tag via html||css
// TODO: trim white spaces in tags