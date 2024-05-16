import React, { useEffect, useState } from 'react'
import AllProducts from '../../Components/AllProducts/AllProducts'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const {name} = useParams()
  const [categoryProduct,setCategoryProduct] = useState([]);

  const handleFetch = async ()=>{
    const res = await axios.get("https://bci-backend.onrender.com/api/v1/get-all-product");
    console.log(res.data.data);

    const filterSingleCategory = res.data.data.filter(item => item.categoryName === name)
    setCategoryProduct(filterSingleCategory)
    console.log(categoryProduct)
  }
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    handleFetch();
  }, [])
  return (
    <>
      {console.log(categoryProduct)}
        <Breadcrumb title={name} middle={{ url: '', text: '' }} last={name} />
        {/* <AllProducts  /> */}
        
        <section className="all-product">
            <div className="container pt-1">
                <div className="product-grid">
                    {categoryProduct && categoryProduct.map((item,index)=>(
                        <Link to={`/category/${name}/${item.productName}`} key={index} className='single-pro-grid'>
                            <div className="img">
                                <img src={item.productImage[0]} alt={item.productName} />
                            </div>
                            <div className="pro-name">{item.productName}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductPage