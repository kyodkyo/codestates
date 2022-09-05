import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../constants';

import { useCustomToast } from '../../../chakra/useCustomToast';
import { useNavigate } from 'react-router-dom';

const deleteQuestion = async (
  postNumber: string | undefined
): Promise<void> => {
  await axiosInstance.delete(`post/questions/delete/${postNumber}`);
};

export const useDeleteQuestion = (): UseMutateFunction<
  void,
  unknown,
  string | undefined,
  unknown
> => {
  const queryClient = useQueryClient();
  const toast = useCustomToast();
  const navigate = useNavigate();

  const { mutate } = useMutation(
    (postNumber: string | undefined) => deleteQuestion(postNumber),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.questions);
        navigate('/questions');
        toast({
          title: '질문 삭제가 완료되었습니다.',
          status: 'warning',
        });
      },
    }
  );

  return mutate;
};
