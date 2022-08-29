import styled from 'styled-components';
import Card from '../../atoms/Card';
import { media } from '../../../style/media';
import { Text } from '../../atoms/Text';
import React from 'react';

const QuestionPages = () => {
  // 제목 컴포넌트
  // 내용 컴포넌트
  // 댓글 컴포넌트

  // useEffect []  redux로 현재 클릭된 페이지 확인
  // 확인한 페이지를 api요청
  // 요청한 데이터를 상태에 저장 작성자, 제목, 아이디, 작성일  // 작성자 댓글  작성일

  //
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
