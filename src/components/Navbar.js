/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';

const Navbar = ({
  users,
  albumsLen,
  photosLen,
  allAlbumsLen,
  isPhotoView,
  isUserSelected,
  handleClickOnAlbumView,
  handleClickOnPhotoView,
  getAlbumsOfUser,
}) => {
  const selectEl = useRef(null);
  return (
    <nav className='level u-p-25'>
      <div className='level-left'>
        <div className='level-item'>
          <p className='subtitle is-5'>
            <strong>
              {isPhotoView
                ? photosLen
                : isUserSelected
                ? albumsLen
                : allAlbumsLen}
            </strong>{' '}
            {isPhotoView ? 'photos' : 'albums'}
          </p>
        </div>
        <div className='level-item'>
          <div className='field has-addons'>
            <div className='control'>
              <div className='select'>
                <select
                  ref={selectEl}
                  defaultValue={'Select User'}
                  onChange={({ target: { value } }) => {
                    getAlbumsOfUser(value);
                  }}
                >
                  <option disabled hidden>
                    Select User
                  </option>
                  {users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className='control'>
              <button className='button is-info' onClick={() => {}}>
                <strong>Go</strong>
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className='level-right'>
        <p className='level-item' onClick={handleClickOnAlbumView}>
          <a className='button is-primary'>
            <strong>Albums</strong>
          </a>
        </p>
        <p className='level-item' onClick={handleClickOnPhotoView}>
          <a className='button is-success'>
            <strong>Photos</strong>
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
