import React from "react";
import "./style.css";

function SignIn(props) {
    return (

        <div className="card">
            <div className="card-header">
                Sign In
              </div>
            {/* <<h1>{{msg}}</h1> */}
            <div className="card-body">
                 <h5 className="card-title" />
                <form className="clearfix mb-2" action="POST">
                    <div className="form-group">
                        <label htmlFor="example-text">Username</label>
                        <input type="text" id="user-name" className="form-control" aria-describedby="example-text" placeholder="Enter Your Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="example-description">Password</label>
                        <input type="password" className="form-control" id="example-description" aria-describedby="example-description" placeholder="Enter Your Password" />
                        <br />
                    </div>
                    <button id="user-submit" className="btn btn-success btn-block float-left">Sign In</button>
                </form>
                 
            </div>
        </div>
    );

}

export default SignIn;