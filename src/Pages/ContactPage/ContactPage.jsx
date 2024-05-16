import React, { useEffect } from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Contact from '../../Components/Contact/Contact'

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })    
      }, [])
  return (
    <>
        <Breadcrumb title="Contact Us" middle={{ url: '', text: '' }} last='Contact Us' />
        <Contact/>
    </>
  )
}

export default ContactPage