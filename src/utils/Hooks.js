import React, { useState, useEffect, useContext, useMemo } from 'react';
import API from './API';

export function useUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUserList() {
      const { data } = await API.get('/users');
      setUsers(users => [...users, ...data]);
    }
    getUserList();
  }, []);

  return users;
}

export function useAlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbumList() {
      const { data } = await API.get('/albums');
      setAlbums(albums => [...albums, ...data]);
    }
    getAlbumList();
  }, []);

  return albums;
}

export const useUserName = userId => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function getUserName() {
      const { data } = await API.get(`/users/${userId}`);
      setUsername(data.username);
    }
    getUserName();
  }, [userId]);

  return username;
};

export const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const useAppState = () => {
  const initialState = {
    isPhotoView: null,
    isUserSelected: null,
    selectedAlbumPhotos: [],
    selectedUserAlbums: [],
  };

  const [state, setState] = useState(initialState);

  const actions = useMemo(() => getActions(setState), [setState]);

  return { state, actions };
};

const getActions = (setState, initialState) => ({
  handleClickOnPhotoView: () => {
    setState(prevState => {
      if (!prevState.isPhotoView) {
        return {
          ...prevState,
          isPhotoView: true,
        };
      }
      return prevState;
    });
  },
  handleClickOnAlbumView: () => {
    setState(prevState => {
      if (prevState.isPhotoView) {
        return {
          ...prevState,
          isPhotoView: false,
        };
      }
      return prevState;
    });
  },
  getPhotosOfAlbum: async albumId => {
    const { data } = await API.get(`/photos?albumId=${albumId}`);
    setState(prevState => ({
      ...prevState,
      isPhotoView: true,
      selectedAlbumPhotos: data,
    }));
  },
  getAlbumsOfUser: async userId => {
    const { data } = await API.get(`/albums?userId=${userId}`);
    setState(prevState => ({
      ...prevState,
      isPhotoView: false,
      isUserSelected: true,
      selectedUserAlbums: data,
    }));
  },
});
