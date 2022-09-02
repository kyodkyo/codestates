import React from "react";
import QuestionView from "../../blocks/QuestionDetail";
import AnswerComment from "../../blocks/AnswerComment";
import AddAnswer from "../../blocks/AddAnswer";
import useScrollTop from "../../atoms/useScroll";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
  useScrollTop();
  return (
    <>
      <QuestionView />
      <AnswerComment />
      <AddAnswer />
    </>
  );
};

export default QuestionPage;
