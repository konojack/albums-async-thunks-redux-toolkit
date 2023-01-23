import { useFetchAlbumsQuery } from '../store';

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  console.log(
    '🚀 ~ file: AlbumsList.js:5 ~ AlbumsList ~ data, error, isLoading',
    data,
    error,
    isLoading
  );

  return <div>Albums for {user.name}</div>;
};

export default AlbumsList;
