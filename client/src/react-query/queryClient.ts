import { createStandaloneToast } from '@chakra-ui/react';
import { QueryClient } from 'react-query';

import { theme } from '../chakra';

const { toast } = createStandaloneToast({ theme });

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const id = 'react-query-error';
  const title = '서버가 응답하지 않습니다 :)';

  // prevent duplicate toasts
  toast.closeAll();
  toast({
    id,
    title,
    status: 'error',
    variant: 'subtle',
    isClosable: true,
    position: 'top',
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
