import { Text } from '../atoms/Text';
import React from 'react';
import styled from 'styled-components';

import Card from '../atoms/Card';
import { media } from '../../style/media';

const Home = () => {
  return (
    <StyledHomeCard>
      <Text className="big" fontSize="xxl" fontWeight="extraBold">
        {'😁'} ---- Welcome to my StackOverFlow ---- {'😁'}
      </Text>
      <Text className="small" fontSize="xxl" fontWeight="extraBold">
        {'😁'} Mobile Version {'😁'}
      </Text>
    </StyledHomeCard>
  );
};

export default Home;

const StyledHomeCard = styled(Card)`
  text-align: center;

  .big {
    display: block;
    ${media.custom('992px')} {
      display: none;
    }
  }

  .small {
    display: none;
    ${media.custom('992px')} {
      display: block;
    }
  }
`;
