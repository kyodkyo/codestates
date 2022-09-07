import type { IQuestion } from '../types';

// 검색어에 맞는 결과를 필터링 해주는 함수
export const filterByQuestion = (question: IQuestion[], searchWord: string) =>
  question.filter(
    (q) => q.title.includes(searchWord) || q.contents.includes(searchWord)
  );
