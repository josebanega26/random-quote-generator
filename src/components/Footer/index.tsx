import React from 'react';
import styled from 'styled-components';
const date = new Date().getFullYear();

const FooterWrapper = styled.footer`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  * {
    color: #a9a9a9;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Jose Banega - {date} @ <a href='https://devchallenges.io'> devchallenges.io</a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
