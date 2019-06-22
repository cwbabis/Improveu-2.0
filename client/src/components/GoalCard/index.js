import React from "react";
import "./index.css";

function GoalCard(props) {
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header text-muted">
                    Example goal title
                    <div className="float-right text-muted">
                        Buddy Status:
                    </div>
                </div>
                <div>
                    <div>
                        <a href="#"><img class="goalcardpropic " src="https://via.placeholder.com/60" alt="placeholder"></img></a>
                        <div>
                            <a href="#" ><p class="goalCardUsername">Username Placeholder</p></a>
                            <time className="float-left timeago" dateTime="">
                                Time
                            </time>
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <p class="goalText">Deserunt esse nisi velit tempor eiusmod. Dolore incididunt eiusmod dolore eu sint culpa ea esse fugiat nulla eu dolor. Lorem elit reprehenderit Lorem nostrud magna ullamco excepteur dolore esse pariatur eu velit. Commodo nostrud in irure magna qui ut proident enim laboris adipisicing enim nisi exercitation. Aliquip elit sunt sit ea tempor nisi Lorem.</p>
                </div>

                <div className="card-footer text-muted">

                    <button className="btn btn-success btn-sm float-right buddy-button" id="buddy-button">
                        Buddy Up
                </button>
                </div>
            </div>
        </div >
    );
}

export default GoalCard;
