import React from "react";
import "./style.css";

function SignIn(props) {
    return (
                <div className=" col-md-4 offset-md-2 ">
                    <div className="col-sm-12 nopadding">
                        <ul className="nav-links new-session-tabs nav-tabs nav">
                            <li className="nav-item" style={{ width: '50%'}}><a className="nav-link active show text-center" data-toggle="tab" href="#signin">Sign in</a></li>
                            <li className="nav-item" style={{ width: '50%'}}><a className="nav-link text-center" data-toggle="tab" href="#menu1">Register</a></li>
                        </ul>
                        <div className="tab-content card nopadding">
                            <div id="signin" className="tab-pane fade-in active">
                                <form method='post' action="api/signin">
                                    <div className="form-group mt-3">
                                        <label htmlFor="UserName">Username</label>
                                        <input type="text" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password</label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    
                                    <button type="submit" className="btn btn-success btn-block">Submit</button>
{/*                                     <button type="submit" className=" pull-right btn-link"><a href="www.google.com">Forget password</a></button> */}
                                </form>
                                <br />
                            </div>
                            <div id="menu1" className="tab-pane fade">
                                <form action="#">
                                    <div className="form-group mt-3">
                                        <label htmlFor="UserName">Username</label>
                                        <input type="text" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password</label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    <div className="form-group mb-0 ">
                                        <label htmlFor="pwd">Confirm Password</label>
                                        <input type="password" className="form-control" id="pwd" />
                                    </div>
                                    <p>Minimum length is 8 characters</p>
                                    <button type="submit" className="mt-3 btn btn-info btn-block">Register</button>
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