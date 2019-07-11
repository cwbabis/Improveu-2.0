import React from "react";
import unlocked from "../../images/Unlocked+Achievement.png";
import locked from "../../images/Locked+Achievement.png";
import "./index.css";

const isLocked = true;

function Achievement(props) {
    return (
        <div className="col-md-12" style={{height: '100%'}}>
            <div className="card achievement-card">
                <div className="card-header text-achievement name">
                   Achievements
                </div>
                <div>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>
                    <img src={isLocked? locked: unlocked} alt="award image"></img>

                </div>
            </div>
        </div>
    )
}

export default Achievement;