<div align="center">
  <img width="150px" height="150px" src="https://github.com/rafaabatistas/98barbershop/blob/master/public/assets/svg/logo-readme.svg">
  <h1>98Barbershop</h1>
</div>

<div align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=CC0 1.0 Universal&color=3abcbf&labelColor=333333">
  <img src="https://img.shields.io/static/v1?label=Deploy&message=Vercel&color=3abcbf&labelColor=333333" />
  <img src="https://img.shields.io/static/v1?label=NextJS&message=v11.0.1&color=3abcbf&labelColor=333333" />
  <img src="https://img.shields.io/static/v1?label=React&message=v17.0.2&color=3abcbf&labelColor=333333" />
  <img src="https://img.shields.io/static/v1?label=Styled Components&message=v5.3.0&color=3abcbf&labelColor=333333" />
</div>

## :fire: Acesso ao Projeto

[Clique aqui](https://98barbershop.vercel.app) para acessar o projeto.

[Clique aqui](https://98barbershop-storybook.netlify.app/) para acessar a nossa documentação da UI.

## :dart: Objetivo

Com a proposta de criar um projeto para a barbearia 98Barbershop, a gente se propôs a criação de um website que vai trazer uma nova forma de comunicação com seus clientes. Foi feita em primeira instância um estudo de caso, como, entender as necessidades do público alvo da empresa para assim poder de forma correta escolher todas as fontes, formas e cores capazes de estabelecer uma comunicação eficiente com os clientes dentro do projeto. Entretando é preciso ter também uma boa performance e boa indexação no Google, e nada melhor do que utilizar o NextJS com boas práticas para obter esse resultado.

## :hammer_and_wrench: Ferramentas

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Axios](https://axios-http.com/docs/intro)
- [GraphQL](https://graphql.org)

## :construction: Variáveis de Ambiente

Chave | Descrição |
---------|--------|
`GRAPHQL_HOST` | URL da API que utiliza comunicação GraphQL. |
`GRAPHQL_TOKEN` | Token para o acesso da API ser aceito. |
`MODEL_ID` | Caso utilize o Dato CMS insira o ID da model em que se armazenará os dados, caso contrário adapte da forma da qual será usada. |
`NEXT_PUBLIC_MAPBOX_API_KEY` | Token de acesso ao mapbox. |
`NEXT_PUBLIC_MAPBOX_USERID` | Nome do usuário da conta do mapbox |
`NEXT_PUBLIC_MAPBOX_STYLEID` | ID para acesso a estilização do mapbox. |

## :rocket: Como iniciar a aplicação localmente
 
 ### Faça um clone desse repositório
 
 ```bash
 git clone https://github.com/rafaabatistas/98barbershop
 ```
 
### Instale as dependências

```bash
 yarn install
 ```
 
 ### Dê start ao projeto
 
 ```bash
 yarn build
 yarn start
 ```
 
