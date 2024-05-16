import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
  const { id } = useParams()
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    categoryName: '',
    productName: '',
    productDesc: '',
    productImage: Array.from({ length: 4 }, () => ''),
    sizes:'',
    material:'',
    application:''
  })

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFetch = async () => {
    try {
      const res = await axios.get('https://bci-backend.onrender.com/api/v1/get-all-product');
      // console.log(res.data.data)
      const product = res.data.data
      const fillterProduct = product.filter((item) => item._id === id)
      // console.log(fillterProduct)

      setFormData({
        categoryName: fillterProduct[0].categoryName,
        productName: fillterProduct[0].productName,
        productImage: fillterProduct[0].productImage, // Initialize with existing image URLs
        productDesc: fillterProduct[0].productDesc,
        sizes: fillterProduct[0].sizes,
        material: fillterProduct[0].material,
        application: fillterProduct[0].application,
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Formdata", formData)
      const submitResponse = await axios.post(`https://bci-backend.onrender.com/api/v1/update-product/${id}`, formData);
      console.log(submitResponse)
      toast.success("Product Updated Successfully")
      window.location.href = '/all-products'
    } catch (error) {
      toast.error(error.response.data.msg)
      console.log(error)
    }
  }

  useEffect(() => {
    // Fetch categories, subcategories, and inner subcategories
    const fetchData = async () => {
      try {
        const [categoriesRes] = await Promise.all([
          axios.get('https://bci-backend.onrender.com/api/v1/get-all-category')
        ]);
        setCategories(categoriesRes.data.data.map(item => item.categoryName));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    handleFetch();
  }, []);
  const handleImageChange = (e, index) => {
    const newValue = e.target.value; // Get the new value of the input field
    const updatedFormData = [...formData.productImage]; // Create a copy of the formData array
    updatedFormData[index] = newValue; // Update the value at the specified index
    setFormData({ ...formData, productImage: updatedFormData }); // Update the state with the new formData array
  };
  return (
    <>
      <ToastContainer />
      <section className="breadCmb">
        <div>
          <h2>Edit Products</h2>
          <ul>
            <li><Link to="/admin/dashboard">Home / </Link></li>
            <li><a href="/all-products">Our Products / </a></li>
            <li>Edit Product</li>
          </ul>
        </div>
        <div className="btn1">

        </div>
      </section>

      <section className="forms">
        <div className="container">
          <form className="row" onSubmit={handleSubmit}>

            <div className="col-md-4">
              <label htmlFor="categoryName" className="form-label">Select Category</label>
              <select id="categoryName" onChange={handleChange} value={formData.categoryName} name='categoryName' className="form-select">
                <option value={formData.categoryName}>{formData.categoryName}</option>
                {categories && categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="col-md-12">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input type="text" className="form-control" value={formData.productName} name='productName' onChange={handleChange} id='productName' placeholder="Product Name" aria-label="Product Name" />
            </div>

            {formData.productImage.map((item, index) => (
  <div className="col-md-3" key={index}>
    <label htmlFor={`productImage${index}`} className="form-label">Product Image</label>
    <input 
      type="text" 
      className="form-control" 
      value={formData.productImage[index]} 
      name={`productImage${index}`}  
      placeholder={`Product Image URL ${index + 1}`} 
      aria-label="Product Image"
      onChange={(e) => handleImageChange(e, index)} // Assuming handleImageChange is your onChange handler
    />
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
              <input type="reset" className='btn btn-warning text-white' /> &nbsp;
              <input type="submit" className='btn btn-success' value="Update Product" />
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default EditProduct