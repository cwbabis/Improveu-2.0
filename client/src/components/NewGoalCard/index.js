import React from "react";
import "./index.css";

var observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function init () {
    var text = document.getElementById('text');
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
}


function NewGoalCard(props) {
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header text-muted">
                    Create Goal
                </div>
                <div>
                    <div>
                        <a href="#"><img class="goalcardpropic " src="https://via.placeholder.com/60" alt="placeholder"></img></a>
                        <textarea placeholder="Post a Goal."></textarea>
                        
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary btn-block btn-sm disabled"> {/* Change class of disabled to enabled on text area input */}
                        Share Goal
                </button>
                </div>
            </div>
        </div >
    );
}



export default NewGoalCard;
