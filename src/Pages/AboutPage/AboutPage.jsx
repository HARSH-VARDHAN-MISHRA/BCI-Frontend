import React, { useEffect } from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

import About from '../../Components/About/About'

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <Breadcrumb title="About Us" middle={{ url: '', text: '' }} last='About Us' />
            <About />

            <section className='about-p'>
                <div className="container pt-2">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>
                                <span>Our Vision</span>
                            </h4>
                            <p>Bharat Control India is an established name in the leading metal industries and we aspire to grow even bigger in the coming time. We believe in adopting all the latest technologies that can help us in manufacturing supreme quality products with the utmost automation.</p>
                        </div>
                        <div className="col-md-12 mt-3">
                            <h4>
                                <span>Core Values</span>
                            </h4>

                            <ul>
                                <li>
                                    <p>
                                        <strong>Integrity -</strong>
                                        We clad all our actions with the integrity of the highest standards.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Ownership -</strong>
                                        We develop a relationship with customers and ensure that we take ownership of all our actions.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Quality -</strong>
                                        We have pledged to comply with every quality standard and keep outmost consistency in every single batch of production.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Teamwork -</strong>
                                        We work together no matter what, across all circumstances to meet our deadlines and serve customers.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Accountability -</strong>
                                        We are completely accountable for all our actions and delivering our commitments.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage