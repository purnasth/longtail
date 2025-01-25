import useFetchAPI from '../hooks/useFetchAPI';
import Title from './ui/Title';

interface PromotingPartnersType {
  id: string;
  src: string;
  title: string;
}

const PromotingPartners = () => {
  const {
    data: promotingPartners = [],
    isLoading,
    isError,
  } = useFetchAPI('promotingPartners', '/api/promotingPartners.json');

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }
  return (
    <main>
      <div className="container">
        <Title
          title="Explore the newly opened properties"
          subtitle="Partner in Promotion"
          align="center"
        />
        <ul className="relative mt-12 grid grid-cols-3 gap-0 md:grid-cols-6">
          {promotingPartners.map((partner: PromotingPartnersType) => (
            <li key={partner.id}>
              <img
                src={partner.src}
                alt={partner.title}
                className="transition-300 aspect-square border border-dashed border-dark/5 object-contain p-12 hover:border-dark/20 hover:p-5 hover:opacity-100 hover:shadow-sm hover:filter-none md:w-full"
                title={partner.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default PromotingPartners;
