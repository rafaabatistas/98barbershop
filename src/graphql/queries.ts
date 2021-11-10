import { gql } from 'graphql-request';

export const GET_VIEWS = gql`
  query getReviews($first: IntType) {
    allContacts(first: $first) {
      id
      nota
      nome
      sobrenome
      feedback
      atendidoPor
    }
  }
`;
