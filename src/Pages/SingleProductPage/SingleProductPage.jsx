import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import './SingleProductPage.css'
import LineHead from '../../Components/LineHead/LineHead'
import AllProducts from '../../Components/AllProducts/AllProducts'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CategorySection from '../../Components/CategorySection/CategorySection'

const SingleProductPage = () => {
    const { categoryNaam, name } = useParams();
    const [productMa, setProduct] = useState([]);

    const handleFetch = async () => {
        const res = await axios.get("https://bci-backend.onrender.com/api/v1/get-all-product");
        console.log(res.data.data);

        const filterSingleProduct = res.data.data.filter(item => item.categoryName === categoryNaam && item.productName === name);
        setProduct(filterSingleProduct);
        console.log(productMa);
    }
    const [mainImage, setMainImage] = useState(productMa && productMa.length > 0 ? productMa.map((item) => item.productImage[0]) : productMa.map((items) => items.productImage[1]));

    const handleImageClick = (imgSrc) => {
        setMainImage(imgSrc);
    };


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        handleFetch();
    }, [])

    return (
        <>
            {console.log(productMa)}
            <Breadcrumb title={name} middle={{ url: '/our-products', text: 'Our Products' }} last={name} />

            {productMa && productMa.map((productItem, productIndex) => (
                <section className="product-page" key={productIndex}>
                    <div className="container py-0">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="images">
                                    <div className="main-img">
                                        <img
                                            src={mainImage}
                                            onError={(e) => {
                                                e.target.src = productItem.productImage && productItem.productImage.length > 0
                                                    ? productItem.productImage[0]
                                                    : 'fallback_image_url_here'; // Provide a fallback image URL here
                                            }}
                                            alt={productItem.productName}
                                        />
                                    </div>

                                    <div className="row">
                                        {productItem.productImage && productItem.productImage.map((imgItem, imgIndex) => (
                                            <div className="col-3" key={imgIndex}>
                                                <img
                                                    className='small-img'
                                                    src={imgItem}
                                                    alt={productItem.productName}
                                                    onClick={() => { handleImageClick(imgItem) }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h2>{productItem.productName}</h2>
                                <h4>{productItem.categoryName}</h4>
                                <p className='desc'>{productItem.productDesc}</p>

                                <table class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th scope="col">Sizes</th>
                                            <td>{productItem.sizes}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Material</th>
                                            <td>{productItem.material}</td>
                                        </tr>
                                        <tr>
                                            <th scope="col">Application</th>
                                            <td>{productItem.application}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

            ))}

            <LineHead title={"Related Products"} />
            <CategorySection/>
        </>
    )
}

export default SingleProductPage