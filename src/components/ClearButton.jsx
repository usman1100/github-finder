import React from "react";

const ClearButton = ({ func }) => {
    return (
        <div className="btn btn-danger mx-3" onClick={func}>
            Clear
        </div>
    );
};

export default ClearButton;
