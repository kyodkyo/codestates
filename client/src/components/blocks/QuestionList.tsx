<<<<<<< HEAD
import styled from "styled-components";
import Question from "../atoms/Question";
import React, { useEffect, useState } from "react";
import { Text } from "../atoms/Text";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { questionUrlActions } from "../../store/url-slice";
import Button from "../atoms/Button";
import { RootState } from "../../store";
import { useQuestions } from "../../react-query/hooks/questionsPage/useQuestions";
import { media } from "../../style/media";

const QuestionList = () => {
  const dispatch = useDispatch();
  const { questions, searchWord, setSearchWord } = useQuestions();
  const searchSignal = useSelector(
    (state: RootState) => state.url.searchSignal
  );
  const params = useParams();

  const linkHandler = (url: number) => {
    dispatch(questionUrlActions.setQuestionId(url));
  };

  useEffect(() => {
    setSearchWord((params.searchWord as string) || "");
  }, [searchSignal, params.searchWord]);

=======
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

>>>>>>> dev
  return (
    <StyledQuestionList>
      <div>
        <Text className="list" fontSize="xl" fontWeight="semiBold">
<<<<<<< HEAD
          Question List&nbsp;&nbsp;
          {searchWord && (
            <Text fontSize="sm" fontWeight="semiBold">
              "{params.searchWord}"에 대해 총 {questions.length}건이
              검색되었습니다.
            </Text>
          )}
        </Text>
        <NavLink to="/add-question">
          <Button bold="bold" paddingSize="0px 10px">
            Ask Question
          </Button>
        </NavLink>
      </div>
      <div className="search-result"></div>
      {questions.map((el) => (
=======
          Question List
        </Text>
        <NavLink to="/add-question">
          <Button>Ask Question</Button>
        </NavLink>
      </div>
      {data.map((el) => (
>>>>>>> dev
        <NavLink
          key={el.postNumber}
          to={`/question/${el.postNumber}`}
          onClick={() => linkHandler(el.postNumber)}
        >
<<<<<<< HEAD
          <Question title={el.title} user={el.user.userId} date={el.date} />
=======
          <Question title={el.title} user={el.user} date={el.date} />
>>>>>>> dev
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

<<<<<<< HEAD
  ${media.custom("768px")} {
    width: 100%;
  }

  .search-result {
    margin-left: 3rem;
  }

  .list {
    margin: 10px;
  }

  Button {
    float: right;
    height: 35px;
=======
  .list {
    margin: 10px;
  }
  Button {
    float: right;
    height: 40px;
>>>>>>> dev
  }

  a:link,
  a:visited {
    text-decoration: none;
  }
`;
<<<<<<< HEAD
=======

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
  {
    postNumber: 4,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 5,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 6,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 7,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 8,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '여기가 끝',
    contents: '돔황챠!',
  },
  {
    postNumber: 9,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 10,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 11,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 12,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
  {
    postNumber: 13,
    user: 'test',
    date: '2022-08-26 18:55:02',
    title: '다시봐도 어려워요',
    contents: '돔황챠!',
  },
];
>>>>>>> dev
