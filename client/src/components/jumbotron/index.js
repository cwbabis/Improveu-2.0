import React from "react";
import "./style.css";


function Jumbotron(props) {
    return (

        <div className="col-6">
            <p className="pTag"><i className="material-icons md-dark md-48">timeline</i>  Choose your goals. </p>
            <p className="pTag"><i className="material-icons md-dark md-48">group</i>  Buddy up with friends. </p>
            <p className="pTag"><i className="material-icons md-dark md-48">thumb_up</i>  Improve you! </p>
        </div>
    )
}

export default Jumbotron;