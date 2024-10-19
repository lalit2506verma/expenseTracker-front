import './Login.css'
import React from 'react'
import { RiGoogleFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
    return (
        <div className="container-fluid p-2">

            <div className="row vh-h85 g-0">
                {/* left side */}

                <div className="col-lg-6 position-relative d-none d-lg-block">
                    <div className="bg-holder login-image">
                    </div>
                </div>

                {/*  End left side */}

                {/* Right side */}

                <div className="col-lg-6">
                    <div className="row align-items-center justify-content-center h-100 g-0 px-4 px-sm-0">
                        <div className="col col-sm-6 col-lg-7 col-xl-6">

                            <div className="text-center mb-5">
                                <h3 className="fw-bold"> Login</h3>
                                <p className="text-secondary"> Get access to your account</p>
                            </div>

                            {/* Social Links */}
                            <button className="btn btn-outline-secondary  w-100 mb-3">
                                <RiGoogleFill className="me-1 fs-6 social-logo" /> Login With Google
                            </button>

                            <button className="btn btn-outline-secondary w-100 mb-3">
                                <RiFacebookCircleFill className="me-1 fs-6 social-logo" /> Login With Facebook
                            </button>
                            {/* End Social Link */}

                            {/* divider */}
                            <div className="position-relative">
                                <hr className="text-secondary divider" />
                                <div className="divider-content-center">
                                    Or
                                </div>
                            </div>
                            {/* End Divider */}

                            {/* Login Form */}
                            <form action="/">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <FaRegUser />
                                    </span>
                                    <input type="text" className="form-control form-control-lg fs-6"
                                        placeholder="Username" />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">
                                        <RiLockPasswordLine />
                                    </span>
                                    <input type="password" className="form-control form-control-lg fs-6"
                                        placeholder="Password" />
                                </div>

                                <div className="input-group mb-3 d-flex justify-content-between">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input"
                                            id="formCheck" />
                                        <label htmlFor="formCheck" className="form-check-label text-secondary"> <small>Remember Me</small></label>
                                    </div>

                                    <div>
                                        <small>
                                            <a href="#"> Forget Password?</a>
                                        </small>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-primary btn-lg btn-fs w-100 mb-3">
                                    <span className="fs-6">Login</span>
                                </button>
                            </form>
                            {/* End Login Form */}

                            <div className="text-center">
                                <small> Don't have an account? <a className="ms-2" href="#">Sign Up</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
