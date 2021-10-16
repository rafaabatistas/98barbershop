import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';

import { Header } from '~organisms/Header/Header';
import { Footer } from '~organisms/Footer/Footer';
import { BannerSlider } from '~organisms/BannerSlider/BannerSlider';
import { SectionAbout } from '~organisms/SectionAbout/SectionAbout';
import { MainServices } from '~organisms/MainServices/MainServices';
import { Review } from '~organisms/Review/Review';

import items from '~organisms/BannerSlider/mock';
import services from '~organisms/MainServices/mock';
import reviews from '~organisms/Review/mock';
import places from '~molecules/Map/map.mock';

const Map = dynamic(() => import('~molecules/Map/Map'), { ssr: false });

const HomePage = () => {
  return (
    <>
      <Header />
      <Element name="home">
        <BannerSlider items={items} />
      </Element>
      <Element name="sobre">
        <SectionAbout />
      </Element>
      <Element name="servicos">
        <MainServices items={services} />
      </Element>
      <Element name="avaliacao">
        <Review items={reviews} />
      </Element>
      <Map places={places} />
      <Footer />
    </>
  );
};

export default HomePage;
