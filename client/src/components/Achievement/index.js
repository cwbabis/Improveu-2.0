import React from "react";
import unlocked from "../../images/Unlocked+Achievement.png";
import locked from "../../images/Locked+Achievement.png";

const isLocked = true;

function Achievement(props) {
    return (
        <div className="col-md-12" style={{height: '100%'}}>
            <div className="card">
                <div className="card-header center">
                   Achievements
                </div>
                <div>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>

                </div>
                <hr></hr>
                <div className="card-footer text-muted">
                   
                </div>
            </div>
        </div>
    )
}

export default Achievement;