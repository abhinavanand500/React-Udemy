import React, { useState } from "react";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");
    return (
        <div className='search-bar ui segment'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onFormSubmit(term);
                }}
                className='ui form'
                style={{ width: "100%" }}>
                <div className='field'>
                    <label>What you want to watch?</label>
                    <input
                        type='text'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
