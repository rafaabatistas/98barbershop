import { Header } from '~organisms/Header/Header';
import { Footer } from '~organisms/Footer/Footer';
import { BannerSlider } from '~organisms/BannerSlider/BannerSlider';
import { MainServices } from '../../organisms/MainServices/MainServices';
import items from '~organisms/BannerSlider/mock';
import services from '~organisms/MainServices/mock';

const HomePage = () => {
  return (
    <>
      <Header />
      <BannerSlider items={items} />
      <MainServices items={services} />
      <Footer />
    </>
  );
};

export default HomePage;
