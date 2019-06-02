import React from 'react';
import {
  useUserList,
  useAlbumList,
  AppContext,
  useAppState,
} from './utils/Hooks';
import Navbar from './components/Navbar';
import Album from './components/Album';
import Photo from './components/Photo';
import './App.scss';

function App() {
  const {
    state: {
      selectedAlbumPhotos,
      selectedUserAlbums,
      isPhotoView,
      isUserSelected,
    },
    actions,
  } = useAppState();
  const users = useUserList();
  const allAlbums = useAlbumList();
  const albums = selectedUserAlbums;
  const photos = selectedAlbumPhotos;

  return (
    <AppContext.Provider value={{ users, albums, isUserSelected }}>
      <div className='App container'>
        <Navbar
          users={users}
          albumsLen={albums.length}
          photosLen={photos.length}
          allAlbumsLen={allAlbums.length}
          isPhotoView={isPhotoView}
          isUserSelected={isUserSelected}
          {...actions}
        />
        <div className='columns is-multiline is-mobile'>
          {!isUserSelected &&
            allAlbums.map(album => {
              return (
                <div className='column is-one-quarter is-narrow' key={album.id}>
                  <Album
                    album={album}
                    getPhotosOfAlbum={actions.getPhotosOfAlbum}
                  />
                </div>
              );
            })}
          {!isPhotoView || photos.length === 0
            ? albums.map((album, i) => {
                return (
                  <div className='column is-one-quarter' key={i}>
                    <Album
                      album={album}
                      getPhotosOfAlbum={actions.getPhotosOfAlbum}
                    />
                  </div>
                );
              })
            : photos.map((photo, i) => {
                return (
                  <div className='column is-one-quarter' key={i}>
                    <Photo photo={photo} />
                  </div>
                );
              })}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
