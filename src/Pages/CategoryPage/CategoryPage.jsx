import React, { useEffect } from 'react'
import CategorySection from '../../Components/CategorySection/CategorySection'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

const CategoryPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })    
      }, [])
  return (
    <>
        <Breadcrumb title="Our Products" middle={{ url: '', text: '' }} last='Our Products' />
        <CategorySection/>
    </>
  )
}

export default CategoryPage