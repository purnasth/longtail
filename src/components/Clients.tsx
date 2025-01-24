import useFetchAPI from '../hooks/useFetchAPI';
import Title from './ui/Title';

interface ClientsType {
  id: string;
  src: string;
  title: string;
}

const Clients = () => {
  const {
    data: clients = [],
    isLoading,
    isError,
  } = useFetchAPI('clients', '/api/clients.json');

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }
  return (
    <main className="py-0">
      <div className="container">
        <ul className="relative mt-12 grid grid-cols-3 gap-0 md:grid-cols-6">
          {clients.map((client: ClientsType) => (
            <li key={client.id}>
              <img
                src={client.src}
                alt={client.title}
                className="transition-300 aspect-square size-28 border border-dashed border-dark/5 object-contain p-7 hover:border-dark/20 hover:p-5 hover:opacity-100 hover:shadow-sm hover:filter-none md:size-40 md:w-full"
                title={client.title}
              />
            </li>
          ))}
        </ul>
        <div className="mx-auto h-32 w-px bg-dark/5"></div>
        <Title
          title="We have worked with some amazing clients"
          subtitle="Our Clients"
          align="center"
        />
      </div>
    </main>
  );
};

export default Clients;
