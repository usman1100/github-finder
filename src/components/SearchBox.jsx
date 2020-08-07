import React from "react";

const SearchBox = (props) => {
    return (
        <div className="container">
            <div className="form-group">
                <label />
                <input
                    className="form-control"
                    placeholder="Enter username"
                    onChange={props.updateUserName}
                />
            </div>
        </div>
    );
};

export default SearchBox;
