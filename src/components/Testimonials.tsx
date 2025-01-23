import useFetchAPI from '../hooks/useFetchAPI';
import MasterBento from './ui/MasterBento';

const Testimonials = () => {
  const {
    data: testimonials = [],
    isLoading,
    isError,
  } = useFetchAPI('testimonials', '/api/testimonials.json');

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <MasterBento contents={testimonials} />
    </>
  );
};

export default Testimonials;
