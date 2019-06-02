import React from 'react';
import { useAppContext, useUserName } from '../utils/Hooks';

const Album = ({ album: { id, title, userId }, getPhotosOfAlbum }) => {
  const { isUserSelected } = useAppContext();
  return (
    <div
      className='card'
      onClick={() => {
        if (!isUserSelected) {
          alert(
            'You are not allowed to see photos of this album!\nPlease choose user of the album.'
          );
          return;
        }
        getPhotosOfAlbum(id);
      }}
    >
      <div className='card-content'>
        <p className='title is-4'>{title}</p>
      </div>
      <footer className='card-footer'>
        <p className='card-footer-item'>
          <span>
            User ID:{' '}
            <span className='has-text-primary'>{useUserName(userId)}</span>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Album;
