import React from 'react';
// import Intro from '../components/Intro';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
  return (
    <>
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
