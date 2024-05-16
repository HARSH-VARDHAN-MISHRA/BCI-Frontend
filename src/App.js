import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

import { useLocation } from 'react-router-dom'

import Dashboard from './admin/Dashboard/Dashboard';
import Login from "./admin/auth/Login";
import HomeHeader from "./Components/HomeHeader/HomeHeader";

function App() {
  const getAdminStatus = sessionStorage.getItem('admin') || false
  // console.log(getAdminStatus)
  const [adminLogin, setAdminLogin] = useState(false)
  useEffect(() => {
    setAdminLogin(getAdminStatus)
  }, [getAdminStatus])

  const location = useLocation();
      const isHomePage = location.pathname === '/'; // Assuming '/' is the home page route


  return (
    <>
      {getAdminStatus ? (
        <>
          <Dashboard/>
        </>
      ) : (
        <>
          {/* <Header /> */}
        {isHomePage ? <HomeHeader/> : <Header />}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/our-products' element={<CategoryPage />} />
            {/* <Route path='/category-product-page' element={<ProductPage />} /> */}
            {/* <Route path='/product-page' element={<SingleProductPage />} /> */}
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/contact-us' element={<ContactPage />} />

            <Route path="/category/:name" element={<ProductPage/>} />
            <Route path="/category/:categoryNaam/:name" element={<SingleProductPage/>} />
            
            <Route path='/admin' element={<Login />} />

          </Routes>
          <Footer />
        </>
      )}


    </>
  );
}

export default App;
