/** @format */

import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const UpdateProfile = ({ data, save }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [experience, setExperience] = useState('');
  const [dob, setDob] = useState('');
  const [designation, setDesignation] = useState('');

  useEffect(() => {
    // setProfileData(data);
  }, []);

  const handleValueChange = (type, event) => {
    switch (type) {
      case 1:
        setFirstName(event.target.value);
        break;
      case 2:
        setLastName(event.target.value);
        break;
      case 3:
        setDob(event.target.value);
        break;
      case 4:
        setDesignation(event.target.value);
        break;
      case 5:
        setExperience(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    let emptyProfile = {
      profileImg: 'https://source.unsplash.com/random',
      firstName: '',
      lastName: '',
      dob: '',
      designation: '',
      exp: 0,
      id: '',
    };
    emptyProfile.firstName = firstName;
    emptyProfile.lastName = lastName;
    emptyProfile.designation = designation;
    emptyProfile.exp = experience;
    emptyProfile.dob = dob;
    save(emptyProfile);
  };

  return (
    <Fragment>
      <div className='eachCardContainer'>
        <div className='row'>
          <div className='col-6'>
            <label>First Name: </label>
            <input type='text' value={firstName} onChange={(e) => handleValueChange(1, e)} />
          </div>
          <div className='col-6'>
            <label>Last Name: </label>
            <input type='text' value={lastName} onChange={(e) => handleValueChange(2, e)} />
          </div>
          <div className='col-12'>
            <label>DOB: </label>
            <input type='text' value={dob} onChange={(e) => handleValueChange(3, e)} />
          </div>
          <div className='col-12'>
            <label>Designation: </label>
            <input type='text' value={designation} onChange={(e) => handleValueChange(4, e)} />
          </div>
          <div className='col-12'>
            <label>Experience: </label>
            <input type='text' value={experience} onChange={(e) => handleValueChange(5, e)} />
          </div>
        </div>
        <div className='buttonContainer'>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProfile;
