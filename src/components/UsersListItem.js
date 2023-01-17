import { GoTrashcan } from 'react-icons/go';
import useThunk from '../hooks/useThunk';
import { deleteUser } from '../store';
import Button from './Button';

const UsersListItem = ({ user }) => {
  const [removeUser, isLoading, deletingUserError] = useThunk(deleteUser);

  const handleDeleteUser = (userId) => {
    removeUser(userId);
  };

  return (
    <div className="mb-2 border rounded">
      <div
        className="flex p-2 justify-between items-center cursor-pointer"
        onClick={() => handleDeleteUser(user.id)}
      >
        <div className="flex justify-between items-center">
          <Button
            loading={isLoading}
            className="mr-3"
            onClick={() => handleDeleteUser(user.id)}
          >
            <GoTrashcan />
          </Button>
          {deletingUserError && <div>Error deleting user...</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
