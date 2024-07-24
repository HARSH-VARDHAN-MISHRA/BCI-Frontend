import React, { useEffect } from 'react'
import About from '../../Components/About/About'
import LineHead from '../../Components/LineHead/LineHead'
import CategorySection from '../../Components/CategorySection/CategorySection'
import banner1 from './banner-1.jpg'
import banner2 from './banner-2.jpg'
import banner3 from './banner-3.jpg'
import Contact from '../../Components/Contact/Contact'
import './HomePage.css'

import Header from '../../Components/Header/Header'


const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
      }, [])
      
    
    return (
        <>
            {/* ---- caraSoul ----  */}
            {/* <div className="container-fluid p-0 mb-sm-5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={banner3} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={banner1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}


            <div className="mt-5">
            <About/>

            </div>

            <LineHead title={"Our Products"}/>
            <CategorySection/>

            <section className="vision">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Our Vision</h3>
                            <h4>About Company</h4>
                            <span className="line"></span>

                            <p className="large">
                                Bharat Control India is an established name in the leading metal industries and we aspire to grow even bigger in the coming time. We believe in adopting all the latest technologies that can help us in manufacturing supreme quality products with the utmost automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <LineHead title={"Contact Us"}/>
            <Contact/>
        </>
    )
}

export default HomePage