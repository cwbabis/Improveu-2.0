import React from "react";
import "./index.css";

function ProfileCard(props) {
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="alignImg">
                    <a href="#" ><img href=""
                        className="dashProPic" src="https://via.placeholder.com/150" alt="placeholder"></img></a>
                </div>
                <div>
                    <a href="#" ><p class="dashProUsername">Username Placeholder</p></a>
                </div>
                <div className="card-footer">
                    <div class="">
                        <a href="#"><p style={{ margin: 0, fontSize: 14 }} >Buddies<span class="hightlight float-right">#</span></p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;