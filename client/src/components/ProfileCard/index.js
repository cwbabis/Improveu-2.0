import React from "react";
import "./index.css";

function ProfileCard(props) {
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="alignImg">
                    <img href=""
                        className="dashProPic" src={props.image} alt="placeholder"></img>
                </div>
                <div>
                   <p class="dashProUsername">{props.name}</p>
                </div>
                <div className="card-footer buddy-padding">
                    <div class="">
                        <a href="#"><p style={{ margin: 0, fontSize: 14 }} >Buddies<span class="hightlight float-right">#</span></p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;