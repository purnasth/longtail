import React from 'react';
import useFetchAPI from '../hooks/useFetchAPI';
import { Link } from 'react-router-dom';
// import LogoButton from './ui/LogoButton';
import icon from '../assets/icon.svg';

interface BrandsProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  website_link: string;
}

const Brands: React.FC = () => {
  const {
    data: brands,
    isLoading,
    isError,
  } = useFetchAPI('brands', `/api/brands.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <main className="bg-logo-yellow/20 size-full">
        <div className="container">
          <div
            className={`mb-28 flex flex-col items-start justify-start gap-4 text-start`}
          >
            <span className="w-fit rounded-full border border-dark/30 px-4 py-1 text-base uppercase tracking-wider">
              Our Brands
            </span>
            <h3 className="text-3xl leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
              The brands we've built offer a wide range of services and showcase
              our innovations.
            </h3>
            <p className={`max-w-lg text-start text-sm opacity-60`}>
              We have built a wide range of brands offering a wide range of
              services and storytelling the innovations we have made. As per our
              motto, let us be your partner in promotion
            </p>
          </div>
          <section className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-10">
            {brands.map((brand: BrandsProps) => (
              <div key={brand.id} className="flex flex-col items-start gap-8">
                <img
                  alt={brand.title}
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-auto select-none object-contain transition duration-500"
                  src={brand.image}
                />
                <div className="space-y-5">
                  <h2 className="text-2xl md:text-4xl">{brand.title}</h2>

                  <p className="text-pretty text-sm opacity-80">
                    {brand.description}
                  </p>
                  <ul className="flex flex-wrap items-center justify-start gap-2">
                    {brand.subtitle.split(', ').map((item, index) => (
                      <li
                        key={index}
                        className="rounded-full border border-dark/30 px-4 py-1 text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div>
                    {/* <Link
                      to={`/brands/${brand.id}`}
                      className="bg-logo-yellow mt-5 inline-block text-pretty rounded-full border border-dark/30 px-5 py-2 text-base"
                    >
                      Visit Website
                    </Link> */}

                    <Link
                      to={brand.website_link}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-300 bg-logo-yellow border-logo-yellow group mt-16 flex w-fit items-center justify-center gap-2 rounded-full border-2 px-5 py-3 text-sm font-semibold capitalize hover:bg-white hover:text-yellow-500 hover:shadow md:text-base"
                    >
                      <img
                        src={icon}
                        alt="Fire"
                        className="transition-300 filter-black size-6 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
                      />
                      Visit Website
                      <img
                        src={icon}
                        alt="Fire"
                        className="transition-300 filter-black size-6 scale-75 object-contain group-hover:scale-100 group-hover:filter-none"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Brands;
