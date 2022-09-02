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

  return (
    <StyledQuestionList>
      <div>
        <Text className="list" fontSize="xl" fontWeight="semiBold">
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
        <NavLink
          key={el.postNumber}
          to={`/question/${el.postNumber}`}
          onClick={() => linkHandler(el.postNumber)}
        >
          <Question title={el.title} user={el.user.userId} date={el.date} />
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
  }

  a:link,
  a:visited {
    text-decoration: none;
  }
`;
