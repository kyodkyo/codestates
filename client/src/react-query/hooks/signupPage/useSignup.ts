import { useMutation, useQueryClient, UseMutateFunction } from 'react-query';

import { axiosInstance } from '../../../axiosInstance';
import { useCustomToast } from '../../../chakra/useCustomToast';

import { useNavigate } from 'react-router-dom';

interface Signup {
  userId: string;
  userPw: string;
  email: string;
}

const signUp = async (signupInfo: Signup): Promise<void> => {
  const postData = {
    userId: signupInfo.userId,
    userPw: signupInfo.userPw,
    email: signupInfo.email,
  };

  await axiosInstance.post('/user/signUp', postData);
};

export const useSignup = (): UseMutateFunction<
  void,
  unknown,
  Signup,
  unknown
> => {
  const toast = useCustomToast();
  const navigate = useNavigate();

  const { mutate } = useMutation((signup: Signup) => signUp(signup), {
    onSuccess: () => {
      navigate('/login');
      toast({
        title: '회원가입이 완료되었습니다.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        title: '중복된 Email이거나, 올바른 요청이 아닙니다.',
        status: 'error',
      });
    },
  });

  return mutate;
};
