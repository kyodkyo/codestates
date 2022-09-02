import { useMutation, useQueryClient, UseMutateFunction } from "react-query";

import { axiosInstance } from "../../../axiosInstance";
import { queryKeys } from "../../constants";
import { useCustomToast } from "../../../chakra/useCustomToast";

import { useNavigate } from "react-router-dom";

interface TempAddQuestion {
  userNumber: number;
  title: string;
  contents: string;
}

const addQuestion = async (question: TempAddQuestion): Promise<void> => {
  const postData = {
    title: question.title,
    userNumber: question.userNumber,
    contents: question.contents,
  };

  await axiosInstance.post("/post", postData);
};

export const useAddQuestion = (): UseMutateFunction<
  void,
  unknown,
  TempAddQuestion,
  unknown
> => {
  const toast = useCustomToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation(
    (question: TempAddQuestion) => addQuestion(question),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.questions);
        navigate(-1);
        toast({
          title: "질문 등록이 완료되었습니다.",
          status: "success",
        });
      },
    }
  );

  return mutate;
};
