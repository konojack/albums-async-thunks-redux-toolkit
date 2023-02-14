import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import ExtendablePanel from './ExtendablePanel';
import PhotosList from './PhotosList';

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        loading={results.isLoading}
        className="mr-3"
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExtendablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExtendablePanel>
  );
};

export default AlbumsListItem;
