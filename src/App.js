/** @format */

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router';
import { useHistory } from 'react-router';
import Home from './component/Home';
import UpdateProfile from './component/UpdateProfile/UpdateProfile';

function App() {
  const [profileData, setProfileData] = useState(initialProfileData);

  //   let history = useHistory();

  const addProfile = (data) => {
    let tempProfileData = profileData;
    let tempData = data;

    //Adding Empty Data to the list
    if (tempProfileData.length === 0) {
      tempProfileData = [...tempData];
    } else {
      tempProfileData.unshift({ ...tempData });
    }

    if (tempData.id === '') {
      tempData.id = String(new Date().getTime());
    }

    //updating state
    setProfileData(tempProfileData);
    window.history.pushState('/home', {});
  };

  const saveProfileData = (data) => {
    let tempData = data;
    let tempPorfileList = profileData;
    let index = profileData.findIndex((eachData) => eachData.id === data.id);
    if (tempData.id === '') {
      tempData.id = String(new Date().getTime());
    }
    tempPorfileList[index] = tempData;
    setProfileData([...tempPorfileList]);
  };

  return (
    <div className='container'>
      <Router>
        <div className='col-md-12'>
          <h1 className='text-center' style={style}></h1>
          <Switch>
            <Route path='/' exact>
              <Home
                data={profileData}
                addProfile={() => addProfile()}
                saveProfile={(props) => saveProfileData(props)}
              />
            </Route>
            <Route path='/home'>
              <Home
                data={profileData}
                addProfile={() => addProfile()}
                saveProfile={(props) => saveProfileData(props)}
              />
            </Route>
            <Route path='/profile'>
              <UpdateProfile save={(props) => addProfile(props)} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: 'red',
  margin: '10px',
};

const initialProfileData = [
  {
    id: '12345',
    profileImg: 'https://source.unsplash.com/random',
    firstName: 'Tathagat',
    lastName: 'Mohanty',
    dob: '10-10-2000',
    designation: 'Software Engineer',
    exp: 5,
  },
  {
    id: '12354',
    profileImg: 'https://source.unsplash.com/random',
    firstName: 'Anand',
    lastName: 'Tiwari',
    dob: '10-11-2000',
    designation: 'Software Engineer',
    exp: 5,
  },
  {
    id: '13245',
    profileImg: 'https://source.unsplash.com/random',
    firstName: 'Shivji',
    lastName: 'Bhagat',
    dob: '10-12-2000',
    designation: 'Software Engineer',
    exp: 5,
  },
];

export default App;
