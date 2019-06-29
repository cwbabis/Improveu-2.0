import React from "react";
import "./style.css";

function SignIn(props) {
    return (
                <div className="col-md-4 offset-md-2">
                    <div className="col-sm-12">
                        <ul className="nav-links new-session-tabs nav-tabs nav">
                            <li className="nav-item" style={{ width: '50%'}}><a className="nav-link active show text-center" data-toggle="tab" href="#signin">Sign in</a></li>
                            <li className="nav-item" style={{ width: '50%'}}><a className="nav-link text-center" data-toggle="tab" href="#menu1">Register</a></li>
                        </ul>
                        <div className="tab-content card nopadding">
                            <div id="signin" className="tab-pane fade-in active">
                                <form method='post' action="signin">
                                    <div className="form-group mt-3" >
                                        <label htmlFor="UserName">Username</label>
                                        <input type="text" onChange={props.handleSignInNameChange} value={props.signInName} className="form-control" id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password</label>
                                        <input type="password" onChange={props.handleSignInPassChange} value={props.signInPass} className="form-control" id="password"  />
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-success btn-block" onClick={props.handleSignInSubmit}>Submit</button>
{/*                                     <button type="submit" className=" pull-right btn-link"><a href="www.google.com">Forget password</a></button> */}
                                </form>
                                <br />
                            </div>
                            <div id="menu1" className="tab-pane fade">
                                <form method='post' action="signup">
                                    <div className="form-group mt-3">
                                        <label htmlFor="UserName">Username</label>
                                        <input type="text" onChange={props.handleRegisterNameChange} value={props.registerName} className="form-control" id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" onChange={props.handleRegisterEmailChange} value={props.registerEmail} className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password</label>
                                        <input type="password" onChange={props.handleRegisterPassChange} value={props.registerPass} className="form-control" id="password" />
                                    </div>
{/*                                     <div className="form-group mb-0 ">
                                        <label htmlFor="pwd">Confirm Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div> */}
                                    <p>Minimum length is 8 characters</p>
                                    <button type="submit" onClick={props.handleRegisterSubmit} className="mt-3 btn btn-info btn-block">Register</button>
                                   {/*  <button type="submit" className=" pull-right btn-link"><a href="www.google.com">Forget password</a></button> */}
                                </form>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

    );

}

export default SignIn;