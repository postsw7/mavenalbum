import React from 'react';

const Photo = ({ photo: { title, url, thumbnailUrl, albumId, id } }) => {
  return (
    <div className='tile is-child'>
      <article className='tile is-child is-info'>
        <figure className='image is-square'>
          <img src={thumbnailUrl} alt='user pic' />
        </figure>
        <p className='title is-6'>{title}</p>
      </article>
    </div>
  );
};

export default Photo;
