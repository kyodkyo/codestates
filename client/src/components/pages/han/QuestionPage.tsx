import React from 'react';
import QuestionView from '../../blocks/QuestionDetail';
import AnswerComment from '../../blocks/AnswerComment';
import AddAnswer from '../../blocks/AddAnswer';
import useScrollTop from '../../atoms/useScroll';
import { useParams } from 'react-router-dom';
import { useQuestion } from '../../../react-query/hooks/questionPage/useQuestion';

const QuestionPage = () => {
  useScrollTop();
  const param = useParams();
  const { questionData } = useQuestion(param.id);

  return (
    <>
      {questionData && (
        <QuestionView
          title={questionData[0].title}
          contents={questionData[0].contents}
        />
      )}
      {questionData && <AnswerComment comment={questionData[1]} />}
      {questionData && <AddAnswer />}
    </>
  );
};

export default QuestionPage;
