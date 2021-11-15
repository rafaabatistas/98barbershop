import { gql } from 'graphql-request';

export const GET_REVIEWS = gql`
  query getReviews($first: IntType) {
    allEvaluations(orderBy: createdAt_DESC, first: $first) {
      name
      surname
      feedback
      answered
      stars
    }
  }
`;
