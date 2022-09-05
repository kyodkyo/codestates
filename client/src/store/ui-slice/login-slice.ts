import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createStandaloneToast } from '@chakra-ui/react';
import { theme } from '../../chakra';

const { toast } = createStandaloneToast({ theme });

function queryErrorHandler(): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const id = 'react-query-logout';
  const title = '로그아웃이 완료되었습니다.';

  // prevent duplicate toasts
  toast.closeAll();
  toast({
    id,
    title,
    status: 'warning',
    variant: 'subtle',
    isClosable: true,
    position: 'top',
  });
}

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: window.localStorage.getItem('email') || '',
  },
  reducers: {
    login(state, action: PayloadAction<string>) {
      window.localStorage.setItem('email', action.payload);
      state.email = window.localStorage.getItem('email')!;
    },
    logout(state) {
      window.localStorage.setItem('email', '');
      state.email = '';
      queryErrorHandler();
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
