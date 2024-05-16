import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container p-0">
          <div className="row mx-0">
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="logo">
                <h1>Bharat <span>Control India</span></h1>
              </div>
              <p>BCI, founded in 2010 by Mr. Dinesh Mahajan, excels in non-ferrous metal components, specializing in casting, forging, and machining. Leader in brass and bronze products.</p>
              <div className="social-links">
                <a href="" ><i className="fa-brands fa-instagram"></i></a>
                <a href="" ><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://api.whatsapp.com/send?phone=919999193470" target="_blank" ><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-3">
              <div className="foot-head">Our Products</div>
              <ul>
                <li><Link to={'/product-page'}>Brass precision turned</Link></li>
                <li><Link to={'/product-page'}>Bronze plumbing</Link></li>
                <li><Link to={'/product-page'}>Stainless steel pipe</Link></li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-6 mb-3">
              <div className="foot-head">Quick Links</div>
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/our-products'}>Our Products</Link></li>
                <li><Link to={'/about-us'}>About Us</Link></li>
                <li><Link to={'/contact-us'}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="foot-head">Contact Us</div>
              <ul>
                <li>
                  <a href="tel:+919810450739">
                    <i className="fa-solid fa-phone-volume"></i>
                    +91-9810450739
                  </a>
                </li>
                <li>
                  <a href="mailto:dinesh@bharatcontrolindia.com" target='_blank'>
                    <i className="fa-solid fa-envelope-open-text"></i>
                      dinesh@bharatcontrolindia.com
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/hU5xayZsGJxu3TPC6" target="_blank">
                    <i className="fa-solid fa-location-dot"></i>
                    G 738/739 A, RIICO Industrial Area Bhiwadi, Distt-Alwar, Rajasthan-301019
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3 copyright">
            <div className="col-12 text-center">
              © BHARAT CONTROL INDIA , All Right Reserved. Designed By <a href="https://www.digiindiasolutions.com/" target='_blank'>DIGI INDIA SOLUTIONS</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer