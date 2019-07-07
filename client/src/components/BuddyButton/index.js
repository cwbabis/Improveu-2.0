import React from "react";

function Button(props) {
    if (props.partner) {
        return (
        <div href="#" className="float-right text-muted">
            Buddy'd with {props.partner}
        </div>
        )
    }
    return  (
    <button style={{ marginLeft: 10, marginRight: 10 }} className="btn btn-success btn-sm float-right buddy-button" id={props.id} onClick={props.handleBuddySubmit}>
        Buddy Up
    </button>
    )
}

export default Button;