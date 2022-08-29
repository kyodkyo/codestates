import React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
// import { media } from '../../style/media';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footerContent">
        <div className="footer--link--container">
          <h1>
            <Text>MyStackOverFlow</Text>
          </h1>
          <div className="footer--link--content">
            <a href="#">
              <Text>STACK</Text>
            </a>
            <a href="#">
              <Text>PRODUCTS</Text>
            </a>
            <a href="#">
              <Text>COMPANY</Text>
            </a>
            <a href="#">
              <Text>NETWORK</Text>
            </a>
          </div>
          <div className="footer--desc--container">
            <h2>
              <Text>© MyStackOverFlow Footer</Text>
            </h2>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: ${({ theme }) => `1px solid ${theme.mode.divider}`};
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  @media (max-width: 640px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
  .footer--link--container {
    width: 500px;
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  h1 {
    color: gray;
    font-size: 17px;
    margin-bottom: 20px;
  }
  .footer--link--content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      margin-top: 26px;
    }
  }
  a {
    color: gray;
    font-size: 14px;
    width: 110px;
    margin-bottom: 21px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 640px) {
      margin-bottom: 16px;
    }
  }
  .footer--desc--container {
    margin-top: 30px;
    @media (max-width: 640px) {
      margin-top: 20px;
    }
  }
  h2 {
    color: white;
    font-size: 14px;
    text-align: center;
  }
`;
