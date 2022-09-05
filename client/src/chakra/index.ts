import { extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        backgroundColor: 'inherit',
      },
    },
  },
});
