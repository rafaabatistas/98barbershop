import { BannerProps } from '~organisms/Banner/Banner';

const items: BannerProps[] = [
  {
    img: '/assets/img/slide-1.jpg',
    title: 'Bem Vindo a BarberShop',
    subtitle: 'Ótima aparência, sinta-se confiante',
    buttonTypeOne: 'scroll',
    buttonTypeTwo: 'scroll',
    buttonLabelOne: 'Sobre Nós',
    buttonLabelTwo: 'Equipe',
    buttonLinkOne: 'sobre',
    buttonLinkTwo: 'equipe'
  },
  {
    img: '/assets/img/slide-2.jpg',
    title: 'Grande Estilo',
    subtitle: 'Barba bem feita, todo mundo respeita',
    buttonTypeTwo: 'scroll',
    buttonLabelTwo: 'Serviços',
    buttonLinkTwo: 'servicos'
  },
  {
    img: '/assets/img/slide-3.jpg',
    title: 'Cada Detalhe',
    subtitle: 'Equilíbrio entre a modernidade e tradição',
    buttonTypeTwo: 'scroll',
    buttonLabelTwo: 'Avaliações',
    buttonLinkTwo: 'avaliacao'
  },
  {
    img: '/assets/img/slide-4.jpg',
    title: 'Agendar Online',
    subtitle: 'Em Breve'
  }
];

export default items;
