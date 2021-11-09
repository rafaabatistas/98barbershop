import { ServiceBoxProps } from '~molecules/ServiceBox/ServiceBox';

const services: ServiceBoxProps[] = [
  {
    infos: [
      {
        title: 'Corte de Cabelo Masculino',
        price: 'R$ 20,00',
        description: 'Realizado em qualquer tecnica de corte de cabelo, incluindo tesouras.'
      }
    ],
    type: 'hair'
  },
  {
    infos: [
      {
        title: 'Barba',
        price: 'R$ 20,00',
        description: 'Aparar o volume ou cortá-la, manutenção do desenho, da hidratação e esfoliação.'
      }
    ],
    type: 'baber'
  },
  {
    infos: [
      {
        title: 'Corte de Cabelo Masculino',
        price: 'R$ 17,50',
        description: 'Realizado em qualquer tecnica de corte de cabelo, incluindo tesouras.'
      },
      {
        title: 'Barba',
        price: 'R$ 17,50',
        description: 'Aparar o volume ou cortá-la, manutenção do desenho, da hidratação e esfoliação.'
      }
    ],
    type: 'full'
  }
];

export default services;
