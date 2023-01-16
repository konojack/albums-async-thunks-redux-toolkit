import { data } from 'autoprefixer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import Skeleton from './Skeleton';

const UsersList = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    data: users,
    error,
  } = useSelector(state => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <Skeleton times={6} className="h-10 w-full" />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return <div>{users.length}</div>;
};

export default UsersList;
