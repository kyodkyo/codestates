import React from "react";
import QuestionView from "../../blocks/QuestionDetail";
import AnswerComment from "../../blocks/AnswerComment";
import AddAnswer from "../../blocks/AddAnswer";
import useScrollTop from "../../atoms/useScroll";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
<<<<<<< HEAD
  useScrollTop();
  return (
    <>
      <QuestionView />
      <AnswerComment />
      <AddAnswer />
=======
  const dispatch = useDispatch();
  const testMessage = useSelector((state: RootState) => state.test.text);

  const 현재클릭된페이지 = useSelector(
    (state: RootState) => state.questionUrl.url
  );

  const testHandler1 = () => {
    dispatch(testActions.test('1'));
  };

  const testHandler2 = () => {
    dispatch(testActions.test('2'));
  };
  return (
    <>
      <div>
        {' '}
        <Text fontSize="xxl"> {현재클릭된페이지}</Text>
      </div>
      <div>
        {' '}
        <Text fontSize="xxl"> {현재클릭된페이지}</Text>
      </div>
      <div>
        {' '}
        <Text fontSize="xxl"> {현재클릭된페이지}</Text>
      </div>
      <div>
        {' '}
        <Text fontSize="xxl"> {현재클릭된페이지}</Text>
      </div>
      <div>
        {' '}
        <Text fontSize="xxl"> {현재클릭된페이지}</Text>
      </div>

      <div>
        <Text fontSize="xxl">{testMessage}</Text>
        <Button onClick={testHandler1}>1</Button>
        <Button onClick={testHandler2}>2</Button>
      </div>
>>>>>>> dev
    </>
  );
};

export default QuestionPage;
