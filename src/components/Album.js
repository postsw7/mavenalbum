import React from 'react';

const Album = () => {
  return (
    <div className='card'>
      <div className='card-content'>
        <p className='title is-4'>{'title'}</p>
      </div>
      <footer className='card-footer'>
        <p className='card-footer-item'>
          <span>
            User ID: <span className='has-text-primary'>{'username'}</span>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Album;
