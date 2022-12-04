import { type ThemeConfig, extendTheme, StyleFunctionProps, defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid:  (props: StyleFunctionProps) => ({
      bg: mode('purple.500', "yellow.500")(props),
      color: 'white',
    }),
  },
})

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('red.200', '#401E2E')(props),
        lineHeight: 'base',
      },
    }),
  },
  components: {
    Button,
  }
});

export default theme;
