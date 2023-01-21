import { GoTrashcan } from 'react-icons/go';
import useThunk from '../hooks/useThunk';
import { deleteUser } from '../store';
import AlbumsList from './AlbumsList';
import Button from './Button';
import ExtendablePanel from './ExtendablePanel';

const UsersListItem = ({ user }) => {
  const [removeUser, isLoading, deletingUserError] = useThunk(deleteUser);

  const handleDeleteUser = (userId) => {
    removeUser(userId);
  };

  const header = (
    <>
      <Button
        loading={isLoading}
        className="mr-3"
        onClick={() => handleDeleteUser(user.id)}
      >
        <GoTrashcan />
      </Button>
      {deletingUserError && <div>Error deleting user...</div>}
      {user.name}
    </>
  );
  return (
    <ExtendablePanel header={header}>
      <AlbumsList user={user} />
    </ExtendablePanel>
  );
};

export default UsersListItem;
