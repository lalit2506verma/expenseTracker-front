import './Navbar.css';
import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary border-bottom border-4">
            <div className="container-fluid ">

                {/* logo */}
                <div className="logo ms-4 p-1">
                    <img src={'./logo.svg'}
                        alt='logo'
                        height={50}
                        width={75}
                    />
                </div>

                {/* SignUp and Sigin Button */}
                <div className="started-button mx-4">
                    <button type="button" className="btn btn-primary btn-md mx-3">Sign Up</button>
                    <button type="button" className="btn btn-outline-primary btn-md border-2 mx-3">Sign In</button>
                </div>
            </div>
        </nav>
    )
}
