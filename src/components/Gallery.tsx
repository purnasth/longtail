import React, { useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import useFetchAPI from '../hooks/useFetchApi';

interface ImageData {
  id: number;
  url: string;
  alt: string;
  category?: string;
}

interface GalleryProps {
  limit?: number;
  galleryClassName?: string;
}

const Gallery: React.FC<GalleryProps> = ({ limit, galleryClassName }) => {
  const {
    data: galleryImages = [],
    isLoading,
    isError,
  } = useFetchAPI('gallery', '/api/gallery.json');

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filteredImages: ImageData[] =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (image: ImageData) => image.category === activeCategory,
        );

  // const categories: string[] = [
  //   'All',
  //   ...new Set(galleryImages.map((image: ImageData) => image.category)),
  // ];

  const categories: string[] = [
    'All',
    ...Array.from(
      new Set(
        (galleryImages as ImageData[])
          .map((image) => image.category)
          .filter((category): category is string => !!category),
      ),
    ),
  ];

  const handleCategoryClick = (category: string) => {
    setIsTransitioning(true);
    setActiveCategory(category);

    setTimeout(() => {
      setIsTransitioning(false);
      if (galleryRef.current) {
        galleryRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 200);
  };

  const limitGalleryImages: ImageData[] = limit
    ? filteredImages.slice(0, limit)
    : filteredImages;

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.error(isError);
    return <div>Error loading gallery.</div>;
  }

  return (
    <>
      <div
        id="gallery"
        className="sticky top-16 z-30 mb-4 mt-8 flex flex-wrap justify-center gap-2 bg-white p-2 md:gap-4"
      >
        {categories.map((category: string) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? 'bg-primary/5 text-primary font-semibold'
                : 'font-medium text-dark/60'
            } transition-linear hover:bg-primary/5 hover:text-primary rounded-md px-4 py-1 text-sm capitalize md:text-lg`}
          >
            {category}
          </button>
        ))}
      </div>

      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`${galleryClassName} w-full columns-1 md:columns-2 lg:columns-3 gap-2 transition-linear ${
          isTransitioning ? 'translate-y-1/2' : 'translate-y-0'
        }`}
      >
        {limitGalleryImages.map((image: ImageData) => (
          <div
            key={image.id}
            className={`gallery-item group mb-2 overflow-hidden transition-all duration-300 ease-linear ${
              isTransitioning ? 'scale-0' : 'scale-100'
            }`}
            data-src={image.url}
          >
            <img
              className="h-full w-full cursor-pointer object-cover shadow-lg transition duration-700 ease-in-out group-hover:scale-125"
              src={image.url}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default Gallery;
