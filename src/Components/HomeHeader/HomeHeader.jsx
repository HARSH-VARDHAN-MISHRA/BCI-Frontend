import React from 'react'
import './HomeHeader.css'
import Header from '../Header/Header'

const HomeHeader = () => {
  return (
    <>
        <div className="homeHead">
            <Header/>
            <div class="text_box">
                <h3>Welcome to <br /> Bharat Control India</h3>
                <p>We are majorly engaged in the production and supply of Brass Plumbing Components, brass precision turned components, bronze fittings, bronze bearings.</p>

                <a href="#begin" class="hero_btn">Known More</a>
            </div>
        </div>
    </>
  )
}

export default HomeHeader