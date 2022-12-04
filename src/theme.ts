import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        bg: '#401E2E',
        color: "white",
        lineHeight: 'base',
      },
    },
  },

});

export default theme;
