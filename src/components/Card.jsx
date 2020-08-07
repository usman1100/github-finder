import React from "react";

const Card = (props) => {
    const { login, avatar_url, html_url } = props.profile;

    return (
        <div
            className="col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2 py-2
        rounded custom-bg border"
        >
            <img src={avatar_url} className="card-img-top" alt="avatar" />
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <a href={html_url} className="btn btn-primary">
                    Visit Profile
                </a>
            </div>
        </div>
    );
};

export default Card;
