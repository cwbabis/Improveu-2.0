import React from "react";
import "./index.css";

var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on' + event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function init() {
    var text = document.getElementById('text');
    function resize() {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight + 'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize() {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change', resize);
    observe(text, 'cut', delayedResize);
    observe(text, 'paste', delayedResize);
    observe(text, 'drop', delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
}


function NewGoalCard(props) {
    if (props.id) {
        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header create-goal-text">
                        Create Goal
                </div>
                    <div>
                        <div>
                            <a href="#"><img class="goalcardpropic " src={props.image} alt="placeholder" ></img></a>
                            <textarea placeholder="Post a Goal." value={props.goal} onChange={props.handleGoalInput}></textarea>

                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-info btn-block btn-sm" onClick={props.handleGoalSubmit}>
                            Share Goal
                </button>
                    </div>
                </div>
            </div >
        )
    }
    else {
        return (
            <div className="container no-pad">
            <div className="col-md-12 alert alert-danger">
                <div className="sign-in-alert-text">Please Sign in to Create a Goal</div>
                
            </div>
            <br></br>
        </div>
        )
    }
}



export default NewGoalCard;
