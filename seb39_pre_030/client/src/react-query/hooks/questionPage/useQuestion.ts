import { useQuery } from 'react-query';

import type { IQuestion } from '../../../types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../constants';
import { useState } from 'react';

const getQuestions = async (
  postNumber: string | undefined
): Promise<QuestionPage> => {
  const { data } = await axiosInstance.get(
    `post/questions/detail/${postNumber}`
  );
  return data;
};

interface Question {
  title: string;
  contents: string;
}
interface Comment {
  comment: string;
  commentUser: string;
}

type QuestionPage = [Question, Comment[]];

export const useQuestion = (
  postNumber: string | undefined
): { questionData: undefined | [Question, any[]] } => {
  const [questionData, setQuestionData] = useState<QuestionPage>();

  const { data: question } = useQuery(
    queryKeys.question,
    () => getQuestions(postNumber),
    {
      onSuccess: (question) => {
        const title = question[0].title;
        const contents = question[0].contents;
        const comment = question[1].map((el: any) => ({
          id: el.commentNumber,
          comment: el.comment,
          commentUser: el.user.userId,
          date: el.date,
        }));
        setQuestionData([{ title, contents }, comment]);
      },
    }
  );

  return { questionData };
};
