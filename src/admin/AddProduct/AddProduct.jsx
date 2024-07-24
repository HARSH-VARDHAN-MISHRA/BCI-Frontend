import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    categoryName: '',
    productImage: Array.from({ length: 4 }, () => ''),
    productName: '',
    material:'',
    application:'',
    productDesc:''
  });

  useEffect(() => {
    // Fetch categories, subcategories, and inner subcategories
    const fetchData = async () => {
      try {
        const [categoriesRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-category`)
        ]);
        setCategories(categoriesRes.data.data.map(item => item.categoryName));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    if (index !== undefined) {
      const images = [...formData.productImage];
      images[index] = value;
      setFormData({ ...formData, productImage: images });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-product`, formData);
      // console.log(response.data);
      toast.success('Product Added Successfully !!');
      window.location.href = '/all-products';
    } catch (error) {
      console.error('Error : ', error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Add Products</h2>
          <ul>
            <li><Link to="/admin/dashboard">Home / </Link></li>
            <li><Link to="/all-products">Our Products / </Link></li>
            <li>Create Product</li>
          </ul>
        </div>
      </section>

      <section className="forms">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>

            <div className="col-md-3">
              <label htmlFor="categoryName" className="form-label">Select Category</label>
              <select id="categoryName" onChange={handleChange} value={formData.categoryName} name='categoryName' className="form-select">
                <option>Select the Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" value={formData.productName} name='productName' onChange={handleChange} id='productName' placeholder="Product Name" aria-label="Product Name" />
            </div>
            
            {formData.productImage.map((item, index) => (
              <div className="col-md-3" key={index}>
                <label htmlFor={`productImage${index}`} className="form-label">Product Image</label>
                <input type="text" className="form-control" value={formData.productImage[index]} name={`productImage${index}`} onChange={(e) => handleChange(e, index)} placeholder={`Product Image URL ${index + 1}`} aria-label="Product Image" />
              </div>
            ))}

            <div className="col-md-3">
              <label htmlFor="sizes" className="form-label">Size</label>
              <input type="text" className="form-control" value={formData.sizes} name='sizes' onChange={handleChange} id='sizes' placeholder="sizes" aria-label="sizes" />
            </div>
            <div className="col-md-3">
              <label htmlFor="material" className="form-label">Material</label>
              <input type="text" className="form-control" value={formData.material} name='material' onChange={handleChange} id='material' placeholder="Material" aria-label="Material" />
            </div>
            <div className="col-md-3">
              <label htmlFor="application" className="form-label">Application</label>
              <input type="text" className="form-control" value={formData.application} name='application' onChange={handleChange} id='application' placeholder="Application" aria-label="Application" />
            </div>

            <div className="col-md-12">
              <label htmlFor="productDesc" className="form-label">Product Description</label>
              <textarea className="form-control" value={formData.productDesc} name='productDesc' onChange={handleChange} id="productDesc" placeholder="Product Description"></textarea>
            </div>

            <div className="col-md-12 text-center">
              <input type="reset" className="btn btn-warning text-white" /> &nbsp;
              <input type="submit" className="btn btn-success" value="Add Product" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default AddProduct;
