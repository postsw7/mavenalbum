/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = ({ users }) => {
  return (
    <nav className='level u-p-25'>
      <div className='level-left'>
        <div className='level-item'>
          <p className='subtitle is-5'>
            <strong>{'100'}</strong> {'albums'}
          </p>
        </div>
        <div className='level-item'>
          <div className='field has-addons'>
            <div className='control'>
              <div className='select'>
                <select defaultValue={'Select User'}>
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
        <p className='level-item' onClick={() => {}}>
          <a className='button is-primary'>
            <strong>Albums</strong>
          </a>
        </p>
        <p className='level-item' onClick={() => {}}>
          <a className='button is-success'>
            <strong>Photos</strong>
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
