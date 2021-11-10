/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';

import reviews from '~organisms/Review/mock';
import { ReviewBoxProps } from '~molecules/ReviewBox/ReviewBox';

export type ReviewContextProps = {
  reviews: ReviewBoxProps[];
  setReviews: (reviews: ReviewBoxProps[]) => void;
};

export type ReviewContextProviderProps = {
  children: JSX.Element;
};

export const ReviewContext = createContext<any | null | ReviewContextProps>([reviews, () => null]);

const ReviewContextProvider = ({ children }: ReviewContextProviderProps) => {
  const [reviews, setReviews] = useState([]);

  return <ReviewContext.Provider value={{ reviews, setReviews }}>{children}</ReviewContext.Provider>;
};

export default ReviewContextProvider;
