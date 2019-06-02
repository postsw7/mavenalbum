import React from 'react';
import {
  useUserList,
  useAlbumList,
} from './utils/Hooks';
import './App.scss';

function App() {
  const users = useUserList();
  const allAlbums = useAlbumList();
      <div className='App container'>
      </div>
}

export default App;
