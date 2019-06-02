/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import {
  bool,
  string,
  number,
  func,
  object,
  arrayOf,
  objectOf,
  oneOfType,
  shape,
} from 'prop-types';
import mavennetLogo from 'assets/mavennet_logo.png';

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
  resetState,
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
                      {user.username}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className='control'>
              <button
                className='button is-info'
                onClick={() => {
                  selectEl.current.selectedIndex = 0;
                  resetState();
                }}
              >
                <strong>Reset</strong>
              </button>
            </p>
          </div>
        </div>
      </div>
      <p className='level-item has-text-centered'>
        <img className='logo' src={mavennetLogo} alt='logo' />
      </p>
      <div className='level-right'>
        <p className='level-item' onClick={handleClickOnAlbumView}>
          <a className='button is-primary'>
            <strong>Albums</strong>
          </a>
        </p>
        <p
          className='level-item'
          onClick={() => {
            if (photosLen === 0) {
              alert('There is no photos!');
              return;
            }
            handleClickOnPhotoView();
          }}
        >
          <a className='button is-success'>
            <strong>Photos</strong>
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  users: arrayOf(
    shape({
      address: objectOf(oneOfType([string, object])),
      company: objectOf(oneOfType([string])),
      email: string,
      id: number.isRequired,
      name: string.isRequired,
      phone: string,
      username: string.isRequired,
      website: string,
    })
  ),
  albumsLen: number.isRequired,
  photosLen: number.isRequired,
  allAlbumsLen: number.isRequired,
  isPhotoView: bool,
  isUserSelected: bool,
  handleClickOnAlbumView: func.isRequired,
  handleClickOnPhotoView: func.isRequired,
  getAlbumsOfUser: func.isRequired,
  resetState: func.isRequired,
};
