/** @format */

import React, { Fragment, useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import ProfileCard from './ProfileCard/ProfileCard';

const Home = ({ data }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData([...data]);
  }, []);

  return (
    <Fragment>
      <div className='cardContainer'>
        <h2 className='text-center'>Home</h2>
        <div className='buttonContainer text-right'>
          <Link to={'/profile'}>Add Profile</Link>
        </div>
        {cardData.length === 0 ? (
          <div className='noData'>
            <h3 className='text-center'>No Profile Data Present !</h3>
          </div>
        ) : (
          <Fragment>
            {cardData.map((eachCard) => {
              return (
                <div className='row' style={{ marginBottom: '10px' }} key={eachCard.id}>
                  <div className='col-6'>
                    <ProfileCard data={eachCard} />
                  </div>
                </div>
              );
            })}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
