import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Text } from '../atoms/Text';

import Comment from '../atoms/Comment';

const AnswerComment = ({ comment }: any) => {
  return (
    <StyledContainer>
      <StyledCommentList>
        <div>
          <Text>{comment.length} Answer</Text>
        </div>
        {comment.map((el: any) => (
          <Comment
            key={el.id}
            title={el.comment}
            user={el.commentUser}
            date={el.date}
          />
        ))}
      </StyledCommentList>
    </StyledContainer>
  );
};

export default AnswerComment;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCommentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.mode.divider};
  padding: 10px;
  margin: 10px;
  width: 60%;
`;

const data = [
  {
    postNumber: 1,
    user: 'this is name',
    date: '2022-08-26 18:55:02',
    title: '질문입니다',
    contents:
      '<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기',
  },
  {
    postNumber: 2,
    user: 'jack',
    date: '2022-08-26 18:55:02',
    title: '백엔드는 너무 어려워요',
    contents: '완전 짱짱',
  },
  {
    postNumber: 3,
    user: 'ji yeong jun',
    date: '2022-08-26 18:55:02',
    title: '이게 맞나 싶어요',
    contents: '돔황챠!',
  },
];
