import React from "react";
import "./index.css";

function Button(props) {
    if (props.partner) {
        return (
            <div href="#" className="float-left text-muted buddy-text">_is Buddy'd up with <span className="name">{props.partner} </span>
            </div>
        )
    }
    return (
        <button style={{ marginLeft: 10, marginRight: 10 }} className="btn btn-success btn-sm float-right buddy-button" id={props.id} onClick={props.handleBuddySubmit}>
            Buddy Up
    </button>
    )
}

export default Button;