import React from "react";

const CardContainer = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
};

export default CardContainer;