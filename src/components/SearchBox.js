import React from "react";

let SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="seach robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;