import { IQuote } from './quote';

export interface IQuoteByAuthor {
  totalPages: number;
  currentPage: number;
  quotes: IQuote[];
}
