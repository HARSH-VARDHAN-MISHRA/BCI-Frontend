import React, { useState } from 'react'
import './Contact.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sended, setSended] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        email_id: '',
        address: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/apply-enquiry`, formData);
            toast.success(res.data.message);
            setFormData({
                firstName: '',
                email_id: '',
                address: ''
            })
            setSended(true);
        } catch (error) {
            console.error("Error while submitting the form", error.response.data);
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

  return (
    <>
        <section id="contact" className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <p><i>Have questions or feedback? Feel free to reach out to us.</i></p>
                                <ul className="list-unstyled">
                                    <li> Email: <a href="mailto:Dinesh@Bharatcontrolindia.com" target="_blank">Dinesh@Bharatcontrolindia.com</a></li>
                                    <li> Phone: <a href="tel:+919810450739">+91-9810450739</a> , <a href="tel:+919999193470">+91-9999193470</a></li>
                                    <li> Address: <a href="javascript:void(0)">G 738/739 A, RIICO Industrial Area Bhiwadi, Distt-Alwar, Rajasthan-301019</a></li>
                                </ul>
                                <div className="social-icons mb-3">
                                    <a href="#" ><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" ><i className="fab fa-twitter"></i></a>
                                    <a href="#" ><i className="fab fa-instagram"></i></a>
                                    <a href="https://api.whatsapp.com/send?phone=919999193470" target="_blank" ><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form className='row' onSubmit={handleSubmit}>
                                {sended ? (
                                    <div className="col-md-12 row">
                                        <div className="col-md-12 mx-auto">
                                            <div className="alert alert-info text-center" role="alert">
                                                Inquiry Send Successfully !!
                                            </div>
                                        </div>

                                    </div>
                                )
                                    : ""
                                }
                                    <div className="form-group">
                                        <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name='email_id' value={formData.email_id} onChange={handleChange} placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea  name='address' value={formData.address} onChange={handleChange} rows="5" placeholder="Your Message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">{loading ? "Please Wait" : "Send Message"}</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-12 mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.02135069518!2d76.86115077494111!3d28.206663903293318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d37f3fe5d80d7%3A0x50778badd1236eec!2sBHARAT%20CONTROL%20INDIA!5e0!3m2!1sen!2sin!4v1715234995610!5m2!1sen!2sin" width="100%" height="450" style={{border:"none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Contact