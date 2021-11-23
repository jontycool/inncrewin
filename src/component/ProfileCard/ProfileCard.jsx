/** @format */

import React, { Fragment, useState, useEffect } from 'react';
import './ProfileCard.css';

const ProfileCard = ({ data }) => {
  const [cardProfileData, setProfileData] = useState({});

  useEffect(() => {
    setProfileData(data);
  }, []);

  return (
    <Fragment>
      <div className='eachCardContainer'>
        <div className='row'>
          <div className='col-6 profileImg'>
            <img src={cardProfileData.profileImg} alt='Profile' className='img-fluid' />
          </div>
          <div className='col-6'>
            <div className='employeeFirstName'>
              <b>First Name:</b>
              <span className='ml-1'>{cardProfileData.firstName}</span>
            </div>
            <div className='employeeLastName'>
              <b>Last Name:</b>
              <span className='ml-1'>{cardProfileData.lastName}</span>
            </div>
            <div className='employeeDOB'>
              <b>DOB:</b>
              <span className='ml-1'>{cardProfileData.dob}</span>
            </div>
            <div className='employeeDesignation'>
              <b>Designation:</b>
              <span className='ml-1'>{cardProfileData.designation}</span>
            </div>
            <div className='employeeExp'>
              <b>Experience:</b>
              <span className='ml-1'>
                {cardProfileData.exp} {cardProfileData > 1 ? 'yrs' : 'yr'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileCard;
