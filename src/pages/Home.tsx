import React from 'react';
// import Intro from '../components/Intro';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import MasterSlider from '../components/ui/MasterSlider';
import useFetchAPI from '../hooks/useFetchAPI';
import Facts from '../components/Facts';

const Home: React.FC = () => {
  // const apiUrl = import.meta.env.VITE_API_URL;

  const {
    data: slideshow = [],
    isLoading,
    isError,
  } = useFetchAPI('slideshow', `/api/slideshow.json`);

  if (isLoading) return null;
  if (isError) {
    console.error(isError);
    return null;
  }

  return (
    <>
      <MasterSlider
        slides={slideshow}
        speed={1000}
        navigation={false}
        sizeClassName="min-h-[32rem] w-full object-cover object-center sm:h-[50vh] md:h-[65vh] xl:h-screen"
      />
      <Facts />
      <Portfolio />
      <Services />
      <Testimonials />
      {/* <Intro /> */}
      <Gallery
        limit={6}
        galleryClassName="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6"
      />
    </>
  );
};

export default Home;
