import React from 'react';
import { string, number } from 'prop-types';

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

Photo.defaultProps = {
  title: '',
  url: '',
  thumbnailUrl: '',
  albumId: 0,
  id: 0,
};

Photo.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  thumbnailUrl: string.isRequired,
  albumId: number.isRequired,
  id: number.isRequired,
};
