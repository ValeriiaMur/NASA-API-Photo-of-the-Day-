import React from "react";

const Photo = ({date, desc, copy, url, title}) => {
    return (
        <div className = "card">
            <img src={url}></img>
            <div className = "card-text">
                <h2 className = "card-title">Title: {title}</h2>
                <div className = "card-read">{date}</div>
                <p className = "card-description">Description: {desc}</p>
                <p className="copy">{copy}</p>
            </div>
        </div>
    )
}

export default Photo;