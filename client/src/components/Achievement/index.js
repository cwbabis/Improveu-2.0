import React from "react";
import unlocked from "../../images/Unlocked+Achievement.png";
import locked from "../../images/Locked+Achievement.png";

const isLocked = false;

function Achievement(props) {
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-header center">
                   Achievement Header
                </div>
                <div>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>
                </div>
                <hr></hr>
                <div className="card-footer text-muted float-left">
                   
                </div>
            </div>
        </div>
    )
}

export default Achievement;