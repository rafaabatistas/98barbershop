export type Reviews = {
  id: number;
  nota: number;
  nome: string;
  sobrenome: string;
  feedback: string;
  atendidoPor: string;
};

export type GetReviewsProps = {
  allContacts: Reviews[];
};
