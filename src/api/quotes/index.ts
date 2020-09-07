const basePath = 'https://quote-garden.herokuapp.com/api/v2/';
const randomPath = 'quotes/random';
const authorPath = 'authors/';

export const fetchRandomQuote = async () => {
  try {
    const data = await fetch(`${basePath}${randomPath}`);
    const { quote } = await data.json();
    return quote;
  } catch (err) {
    throw Error(err);
  }
};

export const fetchQuotesByAuthor = async (author: string) => {
  try {
    const data = await fetch(`${basePath}${authorPath}${author}`);
    const { quotes } = await data.json();
    return quotes;
  } catch (err) {
    throw Error(err);
  }
};
