import React, { useEffect, useState } from 'react'
import './CategorySection.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CategorySection = () => {
    const [category,setCategory] = useState([]);

    const handleFetch = async ()=>{
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-category`);
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
                    {category && category.map((item, index) => (
                        <Link to={`/category/${item.categoryName}`} className="single-categ" key={index}>
                            <div className="image-wrapper">
                                <img src={item.categoryImage} alt={item.categoryName} />
                                <div className="category-name">{item.categoryName}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default CategorySection