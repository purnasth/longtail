import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';

interface Slide {
  image: string;
  title?: string;
  description?: string;
}

interface MasterSliderProps {
  slides: Slide[];
  hasContent?: boolean;
  autoplay?: boolean;
  speed?: number;
  delay?: number;
  sizeClassName?: string;
  navigation?: boolean;
  effect?: 'fade' | 'slide' | 'cube' | 'coverflow' | 'flip';
}
const MasterSlider: React.FC<MasterSliderProps> = ({
  slides = [],
  autoplay = true,
  effect = 'fade',
  speed = 2000,
  delay = 5000,
  navigation = true,
  sizeClassName = 'relative flex h-auto items-center justify-center',
}) => (
  <>
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      navigation={
        navigation && {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
      autoplay={autoplay ? { delay } : false}
      effect={effect}
      fadeEffect={{ crossFade: true }}
      loop={true}
      speed={speed}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={`${sizeClassName}`}>
          <img
            src={slide.image}
            alt={slide.title || `Slide ${index + 1}`}
            className="absolute inset-0 bottom-0 -z-10 size-full object-cover opacity-5 mix-blend-multiply"
          />
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <div className="pointer-events-auto z-10 flex h-fit flex-col items-center justify-center gap-3">
              {slide.title && (
                <>
                  <span>Longtail e-Media</span>
                  <h2 className="sc12 text-shadow-dark-glow mx-8 max-w-4xl 2xl:max-w-5xl text-center text-xl leading-relaxed text-dark md:mx-0 md:text-5xl 2xl:text-6xl md:leading-snug 2xl:leading-snug">
                    {slide.title}
                  </h2>
                  <p className="my-4 max-w-md px-4 text-center text-sm md:my-6 md:text-base">
                    {slide.description}
                  </p>
                </>
              )}
              {/* <img
                src={fire}
                alt="Fire Icon"
                className="size-12 rounded-full border border-orange-500 object-contain p-1"
              /> */}
            </div>
          </div>
        </SwiperSlide>
      ))}

      {navigation && (
        <>
          <button
            aria-label="Next"
            title="Next"
            className="swiper-button-next transition-300 absolute right-4 top-1/2 z-10 flex size-11 translate-y-1/2 transform items-center justify-center rounded-full border border-light/50 bg-light/20 p-2 text-light shadow-lg backdrop-blur-sm hover:bg-light/50"
          >
            <TbArrowNarrowRight />
          </button>
          <button
            aria-label="Previous"
            title="Previous"
            className="swiper-button-prev transition-300 absolute left-4 top-1/2 z-10 flex size-11 translate-y-1/2 transform items-center justify-center rounded-full border border-light/50 bg-light/20 p-2 text-light shadow-lg backdrop-blur-sm hover:bg-light/50"
          >
            <TbArrowNarrowLeft />
          </button>
        </>
      )}
    </Swiper>
    {/* <style>{`
      .swiper-button-next::after,
      .swiper-button-prev::after {
        display: none !important;
      }
    `}</style> */}
  </>
);

export default MasterSlider;
