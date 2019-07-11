import React from "react";
import Button from "../BuddyButton"
import "./index.css";

/* const buddyStyle{
    padding: "10"
}; */


//function to enter a comment with enter key instead of the "comment button"


function GoalCard(props) {
    return (
        <div className="col-md-6">
            <div className="card">
            <div href="" className="card-header username-styling">
                    <span className="name float-left">
                    {props.title}
                    </span>
                    <Button partner={props.partner} handleBuddySubmit={props.handleBuddySubmit} id={props.id} />
                </div>
                <div>
                    <div>
                        <a href="#"><img class="goalcardpropic " src={props.image} alt="placeholder"></img></a>
                        <div>
                            <a href="#" ><p class="goalCardUsername name">{props.creator}</p></a>
                            {/*                             <time className="float-left timeago" dateTime="">
                                Time
                            </time> */}
                        </div>

                    </div>
                </div>
                <div class="card-body">
                    <p class="goalText">{props.goal}</p>
                </div>

                <hr></hr>
                {/*                 <div className="card-header">
                    <div className="form-group">
                        <textarea placeholder="Write a comment..." className="form-control form-rounded" rows="1" id="comment"></textarea>
                    </div>
 
              <button className="btn btn-success btn-sm float-right comment-button">
                            Comment
                </button> 
                </div>
                <div className="comment-card-body">
                    <a href="#"><img class="commenterProPic" src="https://via.placeholder.com/45" alt="placeholder"></img></a>

                    <div className="commentText float-right">
                        <a href="#" ><p class="dashProUsername">{props.name}</p>Username Placeholder</a> DIV WHERE COMMENTS GET APPENDED TO. Ipsum laborum aliqua sunt magna exercitation Lorem fugiat excepteur in anim id. Non velit commodo reprehenderit magna exercitation dolor reprehenderit laborum culpa adipisicing irure ad sunt. Consequat culpa cupidatat et Lorem magna ea amet. Proident non mollit magna fugiat elit. Ipsum ex enim quis fugiat cillum adipisicing aute amet est. Enim anim pariatur fugiat id ut dolore ipsum dolore nisi esse Lorem sit. Do excepteur labore veniam sunt amet veniam elit dolore tempor mollit ad.
                    </div>
                </div>
                <div className="comment-card-body">
                    <a href="#"><img class="commenterProPic" src="https://via.placeholder.com/45" alt="placeholder"></img></a>

                    <div className="commentText float-right">
                        <a href="#" ><p class="dashProUsername">{props.name}</p>Username Placeholder</a> div where comments append to. blah blah blah filler blah
                        border raidius is messed up depending on size of comment. need to use different css property
                    </div>
                </div> */}
            </div>
        </div >
    );
}

export default GoalCard;
