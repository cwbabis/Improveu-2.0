import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                {/*    <div classNameName="user-name">
                <img id="userPhoto" />
                <p id="local-name"></p>
            </div> */}
                <div class="nav-title">
                    <h1>Improveu</h1>
                </div>
                <ul className="nav navbar-nav">
                    <li className="nav-item nav-link" onClick={props.handleDashboardClick}>
                        <i className="fa fa-home nav-link"><a className="nav-link">Home</a></i>
                    </li>
                    <li className="nav-item nav-link" onClick={props.handleProfileClick}>
                        <i className="fa fa-user nav-link"><a className="nav-link" >Profile</a></i>
                    </li>
                    <li className="nav-item nav-link" onClick={props.handleSignOutClick}>
                        <i className="fa fa-arrow-right nav-link"><a className=" nav-link" >Sign out</a></i>
                    </li>
                </ul>
            </div>{/* 
            <button id="target" type="button" classNameName="fas fa-plus fa-2x btn btn-success btn-circle btn-lg"></button> */}
        </nav>
    )
}

export default Nav;
