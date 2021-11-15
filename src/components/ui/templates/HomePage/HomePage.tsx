import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';
import { useContext } from 'react';

import { ReviewContext } from '~contexts/ReviewContext';

import { Header } from '~organisms/Header/Header';
import { Footer } from '~organisms/Footer/Footer';
import { BannerSlider } from '~organisms/BannerSlider/BannerSlider';
import { SectionAbout } from '~organisms/SectionAbout/SectionAbout';
import { MainServices } from '~organisms/MainServices/MainServices';
import { Review } from '~organisms/Review/Review';
import { SectionContributors } from '~organisms/SectionContributors/SectionContributors';
import { SectionContact } from '~organisms/SectionContact/SectionContact';

import items from '~organisms/BannerSlider/mock';
import services from '~organisms/MainServices/mock';
import places from '~molecules/Map/map.mock';
import contributors from '~organisms/SectionContributors/contributors.mock';

const Map = dynamic(() => import('~molecules/Map/Map'), { ssr: false });

const HomePage = () => {
  const { reviews } = useContext(ReviewContext);

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
      <Element name="equipe">
        <SectionContributors contributors={contributors} />
      </Element>
      <Element name="avaliacao">
        <Review reviews={reviews} />
      </Element>
      <Element name="feedback">
        <SectionContact />
      </Element>
      <Map places={places} />
      <Footer />
    </>
  );
};

export default HomePage;
