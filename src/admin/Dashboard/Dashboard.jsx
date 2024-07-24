import React from 'react'
import AdminHeader from '../Header/Header'
import { Link, Route, Routes } from 'react-router-dom'
import AdminCategory from '../Pages/AdminCategory/AdminCategory'
import './Dashboard.css'
import AddCategory from '../AddCategory/AddCategory'
import EditCategory from '../editCategory/EditCategory'
import AdminProductPage from '../Pages/AdminProductPage/AdminProductPage'
import AddProduct from '../AddProduct/AddProduct'
import EditProduct from '../editProduct/EditProduct'
import DashPage from '../Pages/DashPage/DashPage'
import AllEnquiry from '../Pages/Enquiry/Enquiry'

const Dashboard = () => {
  return (
    <>
        <AdminHeader/>
        <div className='rightSidebar bg-admin' >
          
            <Routes>

                {/* Category Routes ---  */}
                <Route path={"/admin/dashboard"} element={<DashPage/>}/>
                
                <Route path={"/all-category"} element={<AdminCategory/>}/>
                <Route path={"/create-category"} element={<AddCategory/>}/>
                <Route path={"/edit-category/:id"} element={<EditCategory/>}/>
                
                {/* // Product Routes / */}
                <Route path={"/all-products"} element={<AdminProductPage/>}/>
                <Route path={"/create-product"} element={<AddProduct/>}/>
                <Route path={"/edit-product/:id"} element={<EditProduct/>}/>

                <Route path={"/all-enquiry"} element={<AllEnquiry/>}/>
            </Routes>
        </div>
    </>
  )
}

export default Dashboard