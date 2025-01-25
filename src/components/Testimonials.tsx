import useFetchAPI from '../hooks/useFetchAPI';
import LogoButton from './ui/LogoButton';
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
      <main className="px-6">
        <MasterBento contents={testimonials} />
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto h-28 w-px bg-dark/30" />
          <LogoButton value="Share your experience" router="/" />
        </div>
      </main>
    </>
  );
};

export default Testimonials;
