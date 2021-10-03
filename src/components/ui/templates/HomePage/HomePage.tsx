import { Element } from 'react-scroll';

import { Header } from '~organisms/Header/Header';
import { Footer } from '~organisms/Footer/Footer';
import { BannerSlider } from '~organisms/BannerSlider/BannerSlider';
import { MainServices } from '~organisms/MainServices/MainServices';
import items from '~organisms/BannerSlider/mock';
import services from '~organisms/MainServices/mock';

const HomePage = () => {
  return (
    <>
      <Header />
      <Element name="home">
        <BannerSlider items={items} />
      </Element>
      <Element name="servicos">
        <MainServices items={services} />
      </Element>
      <Footer />
    </>
  );
};

export default HomePage;
