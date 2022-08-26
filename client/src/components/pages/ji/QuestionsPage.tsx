import styled from 'styled-components';
import Card from '../../atoms/Card';
import { media } from '../../../style/media';
import { Text } from '../../atoms/Text';
import React from 'react';

const QuestionPages = () => {
  return (
    <StyledQuestionCard>
      <Text className="big" fontSize="xxl" fontWeight="extraBold">
        {'📄'} ---- This is Questions!!! ---- {'📄'}
      </Text>
      <Text className="small" fontSize="xxl" fontWeight="extraBold">
        {'📄'} M Version!!! {'📄'}
      </Text>
    </StyledQuestionCard>
  );
};

export default QuestionPages;

const StyledQuestionCard = styled(Card)`
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
