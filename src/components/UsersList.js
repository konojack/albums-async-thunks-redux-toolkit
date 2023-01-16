import { data } from 'autoprefixer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';

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

  const handleUseAdd = () => {
    dispatch(addUser());
  };

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

  const renderedUsers = users.map(user => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUseAdd} primary>
          Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
