import React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms/Text';
// import { media } from '../../style/media';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>
            <Text>MyStackOverFlow</Text>
          </FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="#">
              <Text>STACK</Text>
            </FooterLink>
            <FooterLink href="#">
              <Text>PRODUCTS</Text>
            </FooterLink>
            <FooterLink href="#">
              <Text>COMPANY</Text>
            </FooterLink>
            <FooterLink href="#">
              <Text>NETWORK</Text>
            </FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>
              <Text>© MyStackOverFlow Footer</Text>
            </FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
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
  /* position: relative; */
  z-index: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  @media (max-width: 640px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
  margin-bottom: 20px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
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
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 640px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
