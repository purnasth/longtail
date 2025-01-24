import React from 'react';
import Title from './ui/Title';
// import purna from '../assets/img/hero.avif';
// import design from '../assets/img/nav/services.svg';
// import develop from '../assets/img/svg/develop.svg';
// import app from '../assets/img/svg/app.svg';
// import earth from '../assets/img/svg/earth.gif';

const servicesContent = [
  {
    id: 1,
    title: 'Web & App Design',
    subtitle: 'UI/UX',
    description:
      "Design goes beyond aesthetics; it's about functionality. We offer comprehensive UI/UX design services that rival the best globally.",
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 2,
    title: 'Web Development',
    subtitle: 'React.js + PHP',
    description:
      'We build high-performance, scalable, and secure web applications. Our team ensures that your web app is fast, reliable, and user-friendly.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 3,
    title: 'App Development',
    subtitle: 'Flutter, React Native',
    description:
      'We develop cross-platform mobile applications that are fast, reliable, and user-friendly. Our team ensures that your app is scalable and secure.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 4,
    title: 'Branding & Identity',
    subtitle: 'Logo Design, Product Design',
    description:
      'We create unique and memorable brand identities that resonate with your target audience. Our team ensures that your brand stands out.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 5,
    title: 'Digital Marketing',
    subtitle: 'SEO, SEM, SMM',
    description:
      'We offer comprehensive digital marketing services that help you reach your target audience and grow your business. Our team ensures that your brand gets the visibility it deserves.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 6,
    title: 'Domain & Hosting Server',
    subtitle: 'Domain Registration, Hosting',
    description:
      'We offer domain registration and hosting services that are fast, reliable, and secure. Our team ensures that your website is always up and running.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 7,
    title: 'Photography',
    subtitle: 'Product, Portrait, Event',
    description:
      'We offer professional photography services that capture the essence of your brand. Our team ensures that your photos are high-quality and visually appealing.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 8,
    title: 'Videography',
    subtitle: 'Product, Portrait, Event',
    description:
      'We offer professional videography services that bring your brand to life. Our team ensures that your videos are high-quality and engaging.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 9,
    title: 'OTA management',
    subtitle: 'Booking.com, Airbnb, Expedia',
    description:
      'We offer comprehensive OTA management services that help you maximize your revenue. Our team ensures that your property is listed on all major OTAs and is optimized for maximum visibility.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 10,
    title: 'Email Marketing',
    subtitle: 'Mailchimp, Sendinblue',
    description:
      'We offer comprehensive email marketing services that help you reach your target audience and grow your business. Our team ensures that your emails are engaging and personalized.',
    image: 'https://softbenz.com/static/final.svg',
  },
  {
    id: 11,
    title: 'Booking Engine',
    subtitle: 'Hospitality, Restaurant',
    description:
      'We offer comprehensive booking engine services that help you maximize your revenue. Our team ensures that your booking engine is fast, reliable, and user-friendly.',
    image: 'https://softbenz.com/static/final.svg',
  },
];

const Services: React.FC = () => {
  return (
    <>
      <main className="size-full bg-light">
        <div className="container">
          <Title
            title="Our Services"
            subtitle="What We Do"
            description="We offer a wide range of services that help you grow your business. Our team of experts ensures that your project is delivered on time and within budget."
            align="left"
          />
          <section className="pt-0">
            {servicesContent.map((service, index) => (
              <div
                key={service.id}
                className="relative mt-10 flex md:mt-16 lg:space-x-10"
              >
                <div className="h-full w-0 lg:w-[4%]" />
                <div className="w-full">
                  <div className="absolute left-0 hidden h-full w-[4%] justify-center lg:flex">
                    <div className="bg-gradient sticky top-20 z-10 hidden size-8 -translate-x-2 items-center justify-center rounded-full border border-dark/10 lg:flex">
                      {/* <img
                        src="https://softbenz.com/static/final.svg"
                        alt="globe"
                        className="aspect-square size-9 rounded-full object-cover"
                      /> */}

                      <span className="text-pretty text-base">
                        {service.id < 10 ? `0${service.id}` : service.id}
                      </span>
                    </div>
                    <div className="to-trnnsp absolute left-0 hidden h-full w-px items-center bg-gradient-to-t from-transparent via-[#989AA6] transition duration-100 lg:flex" />
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
                              className="size-full select-none object-cover transition duration-500 md:-translate-y-24"
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
