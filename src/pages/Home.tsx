import React from 'react';
// import Intro from '../components/Intro';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';

const Home: React.FC = () => {
  return (
    <>
      <Portfolio />
      <Testimonials />
      <Services />
      {/* <Intro /> */}
      <Gallery
        limit={6}
        galleryClassName="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6"
      />
    </>
  );
};

export default Home;
