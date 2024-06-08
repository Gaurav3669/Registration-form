import React from 'react'
import { useLocation } from "react-router-dom";
import "./UserPanel.css"

const UserPanel = () => {

    const location = useLocation();
    const formValues = location.state?.formValues;

  return (
    <div className="container">
      <h2 className='userh2'>User Details</h2>
      <div className="detailsSection">
        {Object.keys(formValues).map((key) => (
          <p key={key}>
            <strong>{key}:</strong> {formValues[key]}
          </p>
        ))}
      </div>
    </div>
  )
}

export default UserPanel