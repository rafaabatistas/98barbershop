import { Header } from '~organisms/Header/Header';
import { Footer } from '~organisms/Footer/Footer';
import { BannerSlider } from '../../organisms/BannerSlider/BannerSlider';
import items from '~organisms/BannerSlider/mock';

const HomePage = () => {
  return (
    <>
      <Header />
      <BannerSlider items={items} />
      <Footer />
    </>
  );
};

export default HomePage;
