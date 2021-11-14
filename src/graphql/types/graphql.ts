export type Reviews = {
  name: string;
  surname: string;
  feedback: string;
  answered: string;
  stars: 1 | 2 | 3 | 4 | 5;
};

export type GetReviewsProps = {
  allEvaluations: Reviews[];
};
