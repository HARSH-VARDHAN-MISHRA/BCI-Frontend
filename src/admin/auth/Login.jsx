import React, { useState } from 'react';
import './Login.css'; // Import a CSS file for custom styles

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const Email = process.env.REACT_APP_ADMIN_ID;
      const Password = process.env.REACT_APP_ADMIN_PASSWORD;
      console.log(Email, Password);
      if (formData.email === Email && formData.password === Password) {
        alert("Login Success");
        setIsAdmin(true);
        sessionStorage.setItem('admin', true); // Storing login status
        window.location.href = "/admin/dashboard";
      } else {
        setErrors({ password: "Invalid email or password" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  return (
    <>
      <div className="login-container">
        <div className="row">
          <div className="container">
            <div className="col-md-6 px-2 text-center mx-auto">
              <form onSubmit={handleSubmit} className="login-form">
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  className={`form-input form-control mb-2 ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter Email"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                <input
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  name="password"
                  className={`form-input form-control mb-2 ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Enter Password"
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}

                <div className="buttons">
                  <button className="btn btn-success px-4 py-2" type="submit">LOGIN</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
