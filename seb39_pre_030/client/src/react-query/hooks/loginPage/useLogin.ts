import { useMutation, useQueryClient, UseMutateFunction } from 'react-query';

import { axiosInstance } from '../../../axiosInstance';
import { useCustomToast } from '../../../chakra/useCustomToast';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../../store/ui-slice/login-slice';

interface Login {
  email: string;
  userPw: string;
}

const loginFetch = async (signupInfo: Login): Promise<void> => {
  const postData = {
    userPw: signupInfo.userPw,
    email: signupInfo.email,
  };

  await axiosInstance.post('/user/login', postData);
};

export const useLogin = (): UseMutateFunction<
  void,
  unknown,
  Login,
  unknown
> => {
  const toast = useCustomToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate } = useMutation((login: Login) => loginFetch(login), {
    onSuccess: (_, loginData) => {
      window.localStorage.setItem('email', loginData.email);
      dispatch(loginActions.login(window.localStorage.getItem('email')!));
      navigate('/');
      toast({
        title: '로그인이 완료되었습니다.',
        status: 'success',
      });
    },
    onError: () => {
      toast({
        title: '로그인 요청이 실패했습니다.',
        status: 'error',
      });
    },
  });

  return mutate;
};
