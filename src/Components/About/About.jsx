import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import LineHead from '../LineHead/LineHead'

import defence from './defence.png'
import electrical from './electrical-power-transmission.png'
import fire from './fire-fighting.png'
import oilGas from './oil-gas.png'
import sanitary from './plumbing-sanitary.png'

import side from './side.jpg'

const About = () => {
    const serviceData = [
        {
            iconImage:sanitary,
            serviceName : "Plumbing & Sanitary",
        },
        {
            iconImage:fire,
            serviceName : "Fire fighting",
        },
        {
            iconImage:oilGas,
            serviceName : "Oil & Gas",
        },
        {
            iconImage:electrical,
            serviceName : "Electrical & Power transmission",
        },
        {
            iconImage:defence,
            serviceName : "Defence",
        },
    ]
  return (
    <>
        <section className="about" id="begin">
            <div className="container ">
                <div className="row">
                    
                    <div className="col-md-8 content">
                        <h2>Welcome to <i>Bharat Control India</i></h2>
                        <p>Bharat Control India (Formerly known as BCI) is a non ferrous metal component manufacturer and exporter established in <strong>2010</strong> by <strong>Mr. Dinesh Mahajan</strong>. With state-of-the-art technology, we have design, analysis, manufacturing, and testing facilities under one roof backed with industry expertise.</p>
                        <p>We are majorly engaged in the production and supply of <strong>Brass Plumbing Components, brass precision turned components, bronze fittings, bronze bearings.</strong></p>
                        <p>We continuously work on improving our manufacturing processes by adopting flexibility in all the possible areas.</p>
                        
                        <div className="about-btn">
                            <Link to="/about-us" className="button1">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Know More</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <img src={side} alt="about-us" />
                    </div>
                </div>
            </div>
        </section>

        <LineHead title={"Industries served"}/>
        <section className="our-services">
            <div className="container pt-0">
                <div className="row">
                    <div className="grid-5" >
                    {serviceData && serviceData.map((item,index)=>(
                        <div className=" text-center single" key={index}>
                            <img src={item.iconImage} alt={item.serviceName} className="icon" />
                            <p>{item.serviceName}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About