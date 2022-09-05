import styled from 'styled-components';
import React, { useEffect } from 'react';
import QuestionList from '../../blocks/QuestionList';

const QuestionsPages = () => {
  return (
    <StyledQuestionsPage>
      <QuestionList />
    </StyledQuestionsPage>
  );
};

const StyledQuestionsPage = styled.div`
  display: flex;
  justify-content: center;

  Button {
    margin: 10px;
  }
`;
export default QuestionsPages;
