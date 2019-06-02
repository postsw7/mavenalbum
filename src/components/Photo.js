import React from 'react';

const Photo = () => {
  return (
    <div className='tile is-child'>
      <article className='tile is-child is-info'>
        <figure className='image is-square'>
          <img src={'src'} alt='user pic' />
        </figure>
        <p className='title is-6'>{'title'}</p>
      </article>
    </div>
  );
};

export default Photo;
