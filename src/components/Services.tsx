import React from 'react';
import useFetchAPI from '../hooks/useFetchAPI';

interface ServiceProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const {
    data: servicesContent,
    isLoading,
    isError,
  } = useFetchAPI('servicesContent', `/api/services.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <main className="size-full bg-logo-green/20">
        <div className="container">
          {/* <Title
            subtitle="Our Services"
            title="From Design to Development, Branding to Marketing and an idea to a successful business."
            description="We offer a wide range of services that help you grow your business. Our team of experts ensures that your project is delivered on time and within budget."
            align="left"
          /> */}
          <div
            className={`mb-40 flex flex-col items-start justify-start gap-4 text-start`}
          >
            <span className="w-fit rounded-full border border-dark/30 px-4 py-1 text-base uppercase tracking-wider">
              Our Services
            </span>
            <h3 className="text-3xl leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
              From Design to Development, Branding to Marketing and an Idea to a
              Successful business.
            </h3>
            <p className={`max-w-lg text-start text-sm opacity-60`}>
              We offer a wide range of services that help you grow your
              business. Our team of experts ensures that your project is
              delivered on time and within budget. As per our motto, let us be
              your partner in promotion.
            </p>
          </div>
          <section className="pt-0">
            {servicesContent.map((service: ServiceProps, index: number) => (
              <div
                key={service.id}
                className="relative mt-10 flex md:mt-16 lg:space-x-10"
              >
                <div className="h-full w-0 lg:w-[4%]" />
                <div className="w-full">
                  <div className="absolute left-0 hidden h-full w-[4%] lg:flex gap-0">
                    <div className="bg-gradient sticky top-20 z-10 hidden size-8 items-center justify-center rounded-full border border-dark/10 lg:flex">
                      {/* <img
                        src="https://softbenz.com/static/final.svg"
                        alt="globe"
                        className="aspect-square size-9 rounded-full object-cover"
                      /> */}

                      <span className="text-pretty text-base">
                        {service.id < 10 ? `0${service.id}` : service.id}
                      </span>
                    </div>
                    <div className="absolute left-0 hidden h-full w-px items-center bg-gradient-to-t from-transparent via-[#989AA6] to-transparent transition duration-100 lg:flex" />
                  </div>
                  {index % 2 === 0 ? (
                    <div className="w-full">
                      <div className="">
                        <p className="mb-3">{service.subtitle}</p>
                        <h2 className="mb-4 text-2xl md:mb-8 md:text-4xl lg:text-6xl">
                          {service.title}
                        </h2>
                        <div className="relative grid grid-cols-1 gap-0 gap-y-12 md:grid-cols-3 md:gap-12">
                          <div>
                            <p className="text-pretty text-sm opacity-80">
                              {service.description}
                            </p>
                          </div>
                          <div className="relative transform-none opacity-100 md:col-span-2">
                            <img
                              alt={service.title}
                              draggable="false"
                              loading="lazy"
                              decoding="async"
                              className="size-full select-none object-cover transition duration-500 md:-mt-24"
                              src={service.image}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="pb-16 md:pb-40">
                        <p className="mb-3">{service.subtitle}</p>
                        <h2 className="text-2xl md:mb-8 md:text-4xl lg:text-6xl">
                          {service.title}
                        </h2>
                        <div className="relative mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-20">
                          <div className="relative transform-none opacity-100 md:col-span-2">
                            <img
                              alt={service.title}
                              draggable="false"
                              loading="lazy"
                              decoding="async"
                              className="size-full object-contain transition duration-500"
                              src={service.image}
                            />
                          </div>
                          <div>
                            <p className="text-pretty text-sm opacity-80">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Services;
