import React from "react";
import Comment from "../Comment";
import "./index.css";

function GoalCard(props) {
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header text-muted">
                    {props.title}
                    <div className="float-right text-muted">
                         {props.partner}
                    </div>
                </div>
                <div>
                    <div>
                        <a href="#"><img class="goalcardpropic " src="https://via.placeholder.com/60" alt="placeholder"></img></a>
                        <div>
                            <a href="#" ><p class="goalCardUsername">{props.creator}</p></a>
                            <time className="float-left timeago" dateTime="">
                                Time
                            </time>
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <p class="goalText">{props.goal}</p>
                </div>

                <div className="card-footer text-muted">

                    <div className="float-left">
                        Show Comments
                    </div>
                    
                    <button className="btn btn-success btn-sm float-right buddy-button" id="buddy-button">
                        Buddy Up
                </button>
                </div>
                <Comment/>
            </div>
        </div >
    );
}

export default GoalCard;
