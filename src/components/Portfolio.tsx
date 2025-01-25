import useFetchAPI from '../hooks/useFetchAPI';
import LogoButton from './ui/LogoButton';
import MasterBento from './ui/MasterBento';

const Portfolio = () => {
  const {
    data: portfolio = [],
    isLoading,
    isError,
  } = useFetchAPI('portfolio', '/api/portfolio.json');

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <main className="px-6">
        <MasterBento contents={portfolio} />
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto h-28 w-px bg-dark/30" />
          <LogoButton value="Explore portfolio" router="/" />
        </div>
      </main>
    </>
  );
};

export default Portfolio;
