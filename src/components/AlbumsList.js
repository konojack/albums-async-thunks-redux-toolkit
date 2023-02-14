import { useEffect } from 'react';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import Button from './Button';
import ExtendablePanel from './ExtendablePanel';
import Skeleton from './Skeleton';

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = (e) => {
    e.preventDefault();
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExtendablePanel key={album.id} header={header}>
          List of photos in the album
        </ExtendablePanel>
      );
    });
  }

  return (
    <div>
      <div>
        Albums for {user.name}{' '}
        <Button onClick={handleAddAlbum}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
