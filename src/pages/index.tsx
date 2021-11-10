import { useContext } from 'react';
import { GetStaticProps } from 'next';

import client from '~graphql/client';
import { GET_VIEWS } from '~graphql/queries';
import { GetReviewsProps } from '~graphql/types/graphql';
import { ReviewContext } from '~contexts/ReviewContext';
import { ReviewProps } from '~organisms/Review/Review';

import HomePage from '~templates/HomePage/HomePage';

export default function Home({ reviews }: ReviewProps) {
  const { setReviews } = useContext(ReviewContext);
  setReviews(reviews);

  return <HomePage />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { allContacts } = await client.request<GetReviewsProps>(GET_VIEWS, { first: 6 });

  const reviews = allContacts.map((review) => {
    return {
      atendidoPor: review.atendidoPor,
      nota: review.nota,
      feedback: review.feedback,
      nome: review.nome,
      sobrenome: review.sobrenome
    };
  });

  return {
    props: {
      reviews
    }
  };
};
