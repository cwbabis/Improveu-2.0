import React from "react";
import "./about.css";

function AboutMe(props) {
    return (
        <div className="col-md-12 h-100">
            <div className="card h-100">
                <div className="card-header">
                    About Me
                </div>
                <div className="card-body about-me">
                    <p className="bioText">Hi! I'm looking for some buddies to help me achieve my goals. My interests include Hiking, Running, and going on long walks with my pup. I'm also trying to learn an instrument and wish I could play a song.</p>
                    <br></br>
                    <p className="bioText">My favorite type of music is Indie Rock. I would maybe like to learn how to play Weezer. That way I can play Weezer while I'm camping.</p>
                    <br></br>
                    <p className="bioText">Some goal ideas I have in mind are to meet a buddy who can encourage me to learn to play an instrument, encourage me to go on more hikes, and run more consistently.</p>                    
    
                </div>

                <div className="card-footer text-muted">

                </div>
            </div>
        </div >
    );
}

export default AboutMe;