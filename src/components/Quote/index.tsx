import React from 'react';
import styled from 'styled-components';

const Quote = styled.div`
  font-size: 2.25rem;
  padding-left: 2rem;
  border-left: 4px solid #f7df94;
`;

interface IQuoteProps {
  quote: string;
}

const QuoteWrapper: React.FC<IQuoteProps> = ({ quote }) => {
  return (
    <Quote>
      <p>{quote}</p>
    </Quote>
  );
};

export default QuoteWrapper;
