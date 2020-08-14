import React, { useState } from "react";


const SearchBar = (props) => {
    const [term, setTerm] = useState('');



    return (
        <div className="search-bar ui segment">
            <form onSubmit={(e) => {
                e.preventDefault();
                props.onFormSubmit(term);
            }} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );

}




// class SearchBar extends React.Component {
//     state = { term: "" };
//     onInputChange = (event) => {
//         this.setState({ term: event.target.value });
//     };
//     onFormSubmit = (event) => {
//         event.preventDefault();
//         this.props.onFormSubmit(this.state.term);
//         // Callback function is required from app.js
//     };
//     render() {

//     }
// }

export default SearchBar;
