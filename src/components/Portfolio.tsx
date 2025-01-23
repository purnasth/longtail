import useFetchAPI from '../hooks/useFetchAPI';
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
      <MasterBento contents={portfolio} />
    </>
  );
};

export default Portfolio;
