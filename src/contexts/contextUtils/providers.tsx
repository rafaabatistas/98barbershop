import ReviewContextProvider, { ReviewContextProviderProps } from '../ReviewContext';

const Providers = ({ children }: ReviewContextProviderProps) => (
  <ReviewContextProvider>{children}</ReviewContextProvider>
);

export default Providers;
