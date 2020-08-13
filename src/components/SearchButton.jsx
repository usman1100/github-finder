import React from "react";

const SearchButton = ({ getUsers }) => {
    return (
        <button className="btn btn-primary" onClick={getUsers}>
            Search
        </button>
    );
};

export default SearchButton;
