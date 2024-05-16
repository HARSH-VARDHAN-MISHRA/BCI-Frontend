import React, { useEffect, useState } from 'react'
import './CategorySection.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CategorySection = () => {
    const allcategory = [
        {
            catImg : "https://i.ibb.co/99LBTd5/Bronze-bushings-4.jpg",
            cateName : "Brass precision turned components"
        },
        {
            catImg : "https://i.ibb.co/1r123b8/Marine-bronze-fitting-Male-hose-nipple-and-male-hose-elbow-3.jpg",
            cateName : "Bronze plumbing fittings"
        },
        {
            catImg : "https://i.ibb.co/yqg0WFy/Brass-sanitary-fittings-Forged-1.jpg",
            cateName : "Stainless steel pipe fittings"
        }
    ]

    const [category,setCategory] = useState([]);

    const handleFetch = async ()=>{
        try {
            const res = await axios.get("https://bci-backend.onrender.com/api/v1/get-all-category");
            console.log(res.data.data);
            setCategory(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleFetch();
    },[])
  return (
    <>
        <section className="categories">
            <div className="container py-0">
                <div className="category-grid">
                    {category && category.map((item,index)=>(
                        <Link to={`/category/${item.categoryName}`} class="single-categ" key={index}>
                            <img src={item.categoryImage} alt={item.categoryName} />
                            <div class="category-name">{item.categoryName}</div>
                            {/* <div class="layer">
                                <p><i class="fa-solid fa-link"></i></p>
                            </div> */}
                        </Link>

                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default CategorySection