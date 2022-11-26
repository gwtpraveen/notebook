import { useState, useRef } from "react";

export const MultiSelectTags = () => {
    const [tags, setTags] = useState([]);
    const tagInputRef = useRef();

    // const handleKeyDown = (e) => {
    //     if (e.key === "Enter") {
    //         const value = tagInputRef.current.value;
    //         setTags(preVal => {
    //             if (!tags.includes(value)) {
    //                 return [...preVal, value];
    //             } else {
    //                 return preVal;
    //             }
    //         });
    //         tagInputRef.current.value = null;
    //         console.log("updated the tags")
    //     }
    // };

    const handleTags = () => {
        console.log("i am running")
        const tags = tagInputRef.current.value;
        if (tags) {
            const tagsList = tags.split("|");
            setTags(tagsList);
        }
        tagInputRef.current.value = null;
    };

    const handleRemoveTag = (tag) => {
        console.log("i am handleremove tag function");
        setTags(preVal => {
            const newTags = preVal.filter(item => item !== tag);
            return newTags;
        })
    };

    const handleFocus = () => {
        tagInputRef.current.value = tags.join("|");
        setTags([]);
    };

    console.log(tags)
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
                <input type="text" id="tag" ref={tagInputRef} onBlur={handleTags} onFocus={handleFocus}/>
            </div>
        </div>
    )
}
