import React from "react";
import "./index.css";

function UserCard(props) {
    return (
        <div className="col-md-12">
            <div className="card">
                <div class="alignImg">
                    <a href="#" ><img
                        class="dashProPic" src={props.image} alt="profile image"></img></a>
                </div>
                <div>
                    <a href="#" ><p class="dashProUsername">{props.name}</p></a>
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

export default UserCard;