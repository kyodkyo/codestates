import styled from 'styled-components';
import Question from '../atoms/Question';
import React from 'react';
import { Text } from '../atoms/Text';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { questionUrlActions } from '../../store/questionUrl-slice';
import Button from '../atoms/Button';

const QuestionList = () => {
  const dispatch = useDispatch();

  const linkHandler = (url: number) => {
    dispatch(questionUrlActions.inputUrl(url));
  };

  return (
    <StyledQuestionList>
      <div>
        <Text fontSize="xl" fontWeight="semiBold">
          Question List
        </Text>
        <NavLink to="/add-question">
          <Button>Ask Question</Button>
        </NavLink>
      </div>
      {data.map((el) => (
        <NavLink
          key={el.postNumber}
          to={`/question/${el.postNumber}`}
          onClick={() => linkHandler(el.postNumber)}
        >
          <Question title={el.title} user={el.user} date={el.date} />
        </NavLink>
      ))}
    </StyledQuestionList>
  );
};

export default QuestionList;

const StyledQuestionList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.mode.divider};
  padding: 10px;
  margin: 10px;
  width: 60%;
  Button {
    float: right;
    height: 40px;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }
`;

const data = [
  {
    postNumber: 1,
    user: 'this is name',
    date: '2022-08-26T05:02:19.000+00:00',
    title: '질문입니다',
    contents:
      '<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기<내용test아주 긴 내용 축약해보기',
  },
  {
    postNumber: 2,
    user: 'jack',
    date: '2022-08-26T05:03:52.000+00:00',
    title: '백엔드는 너무 어려워요',
    contents: '완전 짱짱',
  },
  {
    postNumber: 3,
    user: 'ji yeong jun',
    date: '2022-08-26T05:04:14.000+00:00',
    title: '이게 맞나 싶어요',
    contents: '돔황챠!',
  },
  {
    postNumber: 4,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 5,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 6,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 7,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 8,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '여기가 끝',
    contents: '돔황챠!',
  },
  {
    postNumber: 9,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 10,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 11,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 12,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 13,
    user: 'test',
    date: '2022-08-26T05:06:06.000+00:00',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
];
