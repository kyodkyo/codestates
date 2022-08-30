import { Text } from '../../atoms/Text';
import Button from '../../atoms/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { testActions } from '../../../store/test-slice';

const QuestionPage = () => {
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
    </>
  );
};

export default QuestionPage;
