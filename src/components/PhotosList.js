import { useFetchPhotosQuery } from '../store';

const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);
  return <div>PhotosList</div>;
};

export default PhotosList;
