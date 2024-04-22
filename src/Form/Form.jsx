import React, { useState } from 'react';
import './form.css'; 

const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    userType: 'student',
    availability: 'morning'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, clear the form data
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        userType: 'student',
        availability: 'morning'
      });
    } else {
      // Form is not valid, do something like showing an error message
      console.log('Form submission failed. Please fill in all required fields.');
    }
  };

  const validateForm = () => {
    // Check if required fields are filled out
    return formData.fullname !== '' && formData.email !== '' && formData.phone !== '';
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name *"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          placeholder="Phone No *"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <select
          placeholder="User Type"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="job seeker">Job Seeker</option>
          <option value="working professional">Working Professional</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <select
          placeholder="Availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        >
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="other">I'd like to have more details, before I decide.</option>
        </select>
      </div>
      <center>
        <button  className="explore-button" type="submit">Submit</button>
      </center>
    </form>
  );
};

export default FormComponent;
