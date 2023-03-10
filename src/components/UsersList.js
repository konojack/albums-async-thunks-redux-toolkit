import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addUser, deleteUser, fetchUsers } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import useThunk from '../hooks/useThunk';
import { GoSync } from 'react-icons/go';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [createUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data: users } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    createUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = users.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd} loading={isCreatingUser} primary>
          + Add User
        </Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
