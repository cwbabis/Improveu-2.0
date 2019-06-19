import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-header">
                    Example goal title
            <div className="float-right text-muted">
                        Buddy Status:
                </div>
                </div>
                <div>
                    <img src="https://via.placeholder.com/50" alt="placeholder"></img>
                    <p>Example goal body</p>
                </div>
                <hr></hr>
                <div className="card-footer text-muted float-left">
                    <time className="float-left timeago" dateTime="">
                        Time
                </time>
                    <button className="btn btn-success btn-sm float-right buddy-button" id="buddy-button">
                        Buddy Up
                </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
