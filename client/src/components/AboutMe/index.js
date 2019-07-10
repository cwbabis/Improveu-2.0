import React from "react";
import "./about.css";

function AboutMe(props) {
    return (
        <div className="col-md-12 h-100">
            <div className="card h-100">
                <div className="card-header">
                    About Me
                </div>
                <div className="card-body">
                    <p className="bioText">This shows any potential buddies what your interests are. </p>

                    <p className="bioText">It looks like you don't have anything here yet.</p>
                    
                    <p className="bioText">This functionality is not currently working.</p>                    
    
                </div>

                <div className="card-footer text-muted">

                </div>
            </div>
        </div >
    );
}

export default AboutMe;