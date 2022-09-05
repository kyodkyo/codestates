import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import type { IQuestion } from '../../../types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../constants';
import { filterByQuestion } from '../../util';

const getQuestions = async (): Promise<IQuestion[]> => {
  const { data } = await axiosInstance.get(`post/questions`);
  return data;
};

interface UseQuestions {
  questions: IQuestion[];
  searchWord: string;
  setSearchWord: Dispatch<SetStateAction<string>>;
}

export const useQuestions = (): UseQuestions => {
  const [searchWord, setSearchWord] = useState('all');

  const selectFn = useCallback(
    (questions: IQuestion[]) => filterByQuestion(questions, searchWord),
    [searchWord]
  );

  const fallback: any[] = [];
  const { data: questions = fallback } = useQuery(
    queryKeys.questions,
    getQuestions,
    {
      select: searchWord !== 'all' ? selectFn : undefined,
    }
  );

  return { questions, searchWord, setSearchWord };
};
