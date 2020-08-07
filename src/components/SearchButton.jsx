import React from "react";

const SearchButton = (props) => {
    return (

        <div className="container">
            <button className="btn btn-primary" onClick={props.getUsers}>
                Search
            </button>
        </div>
    );
};

export default SearchButton;
