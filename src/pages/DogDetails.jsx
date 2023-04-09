import { useParams } from 'react-router-dom';

const DogDetails = () => {
  const { id } = useParams();

  return <div>DogDetails: {id}</div>;
};

export default DogDetails;
