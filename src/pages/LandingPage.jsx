import './LandingPage.css'
import dashboard from '../images/sampleDashboard.jpg'
import React from 'react'

export default function LandingPage() {
    return (
        // Landing Page
        <section className="text-dark">
            <div className="container-fluid content-center">
                <div className="title align-content-center">
                    <div className=" d-flex flex-column title-header text-center pt-20">

                        <span className="main-header"> Manage Your Expense </span>
                        <span className="main-header text-primary"> Control Your Money </span>

                        <span className="fs-5 fw-medium"> Start Creating your budget and save ton of money </span>

                    </div>

                    <div className="get-started m-4 d-flex justify-content-center">
                        <button type="button" className="btn btn-primary btn-xl">Get Started</button>
                    </div>

                    <div className="sample-dashboard">
                        <img src={dashboard}
                            className="img-fluid"
                            alt="Sampledashboard"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
