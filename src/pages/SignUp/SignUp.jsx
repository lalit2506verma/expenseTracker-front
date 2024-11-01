import React, { useEffect, useState } from 'react'
import './SignUp.css'
import { RiGoogleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { signUp } from '../../services/user-service';


export default function SignUp() {

    //terms and Conditions - Checked
    const [accept, setAccept] = useState(false);

    const enable = (event) => {
        setAccept(event.target.checked);
        //const checked = event.target.checked;
        //console.log(checked);
    }

    //Two way binding for the form feilds
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        Errors: {},
        isError: false
    })

    //Handle change
    const handleChange = (event, field) => {
        //dynamically seting up the data in the data useState Hook
        setData({ ...data, [field]: event.target.value })

    }

    //Submitting the registration form
    const formSubmit = (event) => {
        event.preventDefault()

        //data validation

        if (data.name.trim() === "") {
            alert("Enter a valid Name");
        }

        if (data.password.trim() == "") {
            alert("Enter a strong password");
        }

        //call server api for sending data
        signUp(data).then((resp) => {
            console.log(resp);
            console.log("Success Log");
        }).catch((error) => {
            console.log(error);
            console.log("Error log");
        });
    }

    //Using useEffect Hook for logging the data on handlechange - DEBUGGING
    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    return (
        <div className="container-fluid p-2">
            <div className="row vh-h85 g-0">

                {/* left side */}
                <div className="col-lg-6">
                    <div className="row align-items-center justify-content-center h-100 g-0 px-4">
                        <div className="col col-sm-6 col-lg-7 col-xl-6">

                            <div className="text-center mb-4">
                                <h3 className="fw-bold">Register</h3>
                                <p className="text-secondary"> Create Your FREE account today!</p>
                            </div>

                            {/* Social Links */}
                            <button className="btn btn-outline-secondary w-100 mb-2 ">
                                <RiGoogleFill className="m-1 fs-6 social-logo" /> Sign-Up With Google
                            </button>

                            {/* END Social Links */}

                            {/* divider */}
                            <div className="position-relative">
                                <hr className="text-secondary divider" />
                                <div className="divider-content-center">
                                    Or
                                </div>
                            </div>
                            {/* End Divider */}

                            {/* Registration Form */}
                            <form onSubmit={formSubmit}>

                                <div className="input-group mb-4">
                                    <label htmlFor="name" className="form-label">Name<span>*</span></label>
                                    <input required
                                        type="text"
                                        className="form-control w-100 rounded-pill"
                                        id="name"
                                        placeholder="Name"
                                        onChange={(e) => handleChange(e, 'name')}
                                        value={data.name}
                                    />
                                </div>

                                <div className="input-group  mb-4">
                                    <label htmlFor="email" className="form-label">Email<span>*</span></label>
                                    <input required
                                        type="email"
                                        className="form-control w-100 rounded-pill"
                                        id="email"
                                        placeholder="Email"
                                        onChange={(e) => handleChange(e, 'email')}
                                        value={data.email}
                                    />
                                </div>

                                <div className="input-group  mb-4">
                                    <label htmlFor="password" className="form-label">Password<span>*</span></label>
                                    <input required
                                        type="password"
                                        className="form-control w-100 rounded-pill"
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => handleChange(e, 'password')}
                                        value={data.password}
                                    />
                                </div>

                                <div className="input-group mb-3 d-flex justify-content-between">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="formCheck" onClick={enable} />
                                        <label htmlFor="formCheck" className="form-check-label text-secondary"> <small>I agree to the <span className="text-primary">Terms & Conditions</span></small></label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mb-3" disabled={!accept}>
                                    Register
                                </button>
                            </form>
                            {/* END Registration Form */}

                            {/* Login Link  */}

                            <div className="text-center">
                                <small> Already have an Account? <Link className="ms-2" to="/login">Login</Link></small>
                            </div>

                            {/* End Login Link */}
                        </div>
                    </div>
                </div>
                {/* End left Side */}

                {/* Right Side */}
                <div className="col-lg-6 position-relative d-none d-lg-block">
                    <div className="bg-holder signup-image">
                    </div>
                </div>
                {/* END Right Side */}
            </div>
        </div>
    )
}
