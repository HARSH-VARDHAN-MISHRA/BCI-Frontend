import React from 'react'
import { Link } from 'react-router-dom'
import './AllProducts.css'

const AllProducts = () => {
    const allProducts = [
        {
            proName : "Male hose elbow",
            proImage : "https://i.ibb.co/Fw771c8/Marine-bronze-fitting-Male-hose-elbow-1.jpg",
        },
        {
            proName : "Reducing bush",
            proImage : "https://i.ibb.co/Cb9ByD9/Marine-bronze-fitting-Reducing-bush-3.jpg",
        },
        {
            proName : "Male hose nipple and male hose elbow",
            proImage : "https://i.ibb.co/vHnTvC6/Marine-bronze-fitting-Male-hose-nipple-and-male-hose-elbow-1.jpg",
        },
        {
            proName : "Reducing bush",
            proImage : "https://i.ibb.co/Cb9ByD9/Marine-bronze-fitting-Reducing-bush-3.jpg",
        },
        {
            proName : "Male hose nipple and male hose elbow",
            proImage : "https://i.ibb.co/vHnTvC6/Marine-bronze-fitting-Male-hose-nipple-and-male-hose-elbow-1.jpg",
        },{
            proName : "Male hose elbow",
            proImage : "https://i.ibb.co/Fw771c8/Marine-bronze-fitting-Male-hose-elbow-1.jpg",
        },
        {
            proName : "Reducing bush",
            proImage : "https://i.ibb.co/Cb9ByD9/Marine-bronze-fitting-Reducing-bush-3.jpg",
        },{
            proName : "Male hose elbow",
            proImage : "https://i.ibb.co/Fw771c8/Marine-bronze-fitting-Male-hose-elbow-1.jpg",
        },
        {
            proName : "Reducing bush",
            proImage : "https://i.ibb.co/Cb9ByD9/Marine-bronze-fitting-Reducing-bush-3.jpg",
        },
    ]
  return (
    <>
        
        <section className="all-product">
            <div className="container pt-1">
                <div className="product-grid">
                    {allProducts && allProducts.map((item,index)=>(
                        <Link to="/product-page" key={index} className='single-pro-grid'>
                            <div className="img">
                                <img src={item.proImage} alt={item.proName} />
                            </div>
                            <div className="pro-name">{item.proName}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default AllProducts