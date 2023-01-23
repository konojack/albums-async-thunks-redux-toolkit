import { useFetchAlbumsQuery } from '../store';
import ExtendablePanel from './ExtendablePanel';
import Skeleton from './Skeleton';

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

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
      <div>Albums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
