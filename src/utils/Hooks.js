import { useState, useEffect } from 'react';
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
