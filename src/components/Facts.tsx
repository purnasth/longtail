import useFetchAPI from '../hooks/useFetchAPI';

interface Fact {
  value: string;
  title: string;
}

const Facts = () => {
  const {
    data: facts = [],
    isLoading,
    isError,
  } = useFetchAPI('facts', '/api/facts.json'); // Fetch facts data

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <main className='py-0 -mt-32'>
      <div className="grid grid-cols-4 gap-5 text-center">
        {facts.map((fact: Fact, index: number) => ( // Add explicit types for fact and index
          <div key={index}>
            <h3 className="text-5xl">{fact.value}</h3>
            <p>{fact.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Facts;
