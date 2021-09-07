import { Header } from '~organisms/Header/Header';
import { Banner } from '~organisms/Banner/Banner';
import { Footer } from '~organisms/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner image="/assets/img/image-banner-1.jpg" />
      <Footer />
    </>
  );
};

export default HomePage;
