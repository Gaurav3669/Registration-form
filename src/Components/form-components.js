
import './form-components.css';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (touchedFields[name]) {
      validateField(name, value);
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = `${name} is required`;
    }
    setFormErrors({ ...formErrors, [name]: error });
  };

  const getErrorMessage = (field) => {
    return formErrors[field] ? <span className="error-text">{formErrors[field]}</span> : null;
  };

  const isFormValid = () => {
    return Object.values(formValues).every(value => value.trim() !== "") &&
           Object.values(formErrors).every(error => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsTouched = Object.keys(formValues).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouchedFields(allFieldsTouched);

    const newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key].trim()) {
        newErrors[key] = `${key} is required`;
      }
    });
    setFormErrors(newErrors);

    if (isFormValid()) {
      navigate("/userpanel", { state: { formValues } });
    } else {
      alert("Registration failed. Enter the details properly");
    }
  };

  return (
    <div className="box">
    <div className="page-container">
      
      <div className="form-wrapper">
        <h2>Google Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group half-width">
              <label>First Name {getErrorMessage("firstName")}</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={formValues.firstName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
            <div className="input-group half-width">
              <label>Last Name {getErrorMessage("lastName")}</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>Username {getErrorMessage("username")}</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                value={formValues.username}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
            <div className="input-group half-width">
              <label>Email  {getErrorMessage("email")}</label>
              <input className='email1'
                type="email"
                name="email"
                placeholder="Enter your Email Address"
                value={formValues.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
          </div>
        
            <div className="password-container">
              <label>Password  {getErrorMessage("email")}</label>
              <input 
                type={ showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your Email Address"
                value={formValues.password}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
              <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "View"}</button>
            </div>
        

         

         

          <div className="input-group">
            <label>Mobile Number  {getErrorMessage("phone")}</label>
            <input className='input1'
              type="number"
              name="phone"
              placeholder="Enter Mobile Number"
              value={formValues.phone}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              required
            />
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>Country {getErrorMessage("country")}</label>
              <select className='select1'
                name="country"
                value={formValues.country}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              >
                <option value="">Select</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="South Africa">South Africa</option>
                <option value="England">England</option>
                <option value="thailand">Thailand</option>
              </select>
            </div>
            <div className="input-group half-width">
              <label>City {getErrorMessage("city")}</label>
              <select className='select2'
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              >
                <option value="">Select</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="newyork">New York</option>
                <option value="sanfrancisco">San Francisco</option>
                <option value="jaipur">Jaipur</option>
                <option value="tokyo">Tokyo</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>PAN Car No. {getErrorMessage("pan")}</label>
              <input className='row1'
                type="text"
                name="pan"
                placeholder="Enter your PAN No."
                value={formValues.pan}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="input-group half-width">
              <label>Aadhaar No. {getErrorMessage("aadhaar")}</label>
              <input className='row1'
                type="text"
                name="aadhaar"
                placeholder="Enter your Aadhaar No."
                value={formValues.aadhaar}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                required
              />
            </div>
          </div>
          <button type="submit">Sign Up</button>
          <h4 className="login-prompt">You Have Already Registered?</h4>
          <a className="login-link" href="">Login</a>
         
        </form>
      </div>
    </div>
    </div>
  );
};

export default FormComponent;
