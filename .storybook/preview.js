import { ChakraProvider, Box } from '@chakra-ui/react'

export const decorators = [
  Story => (
    <ChakraProvider>
      <Box m="4">
        <Story />
      </Box>
    </ChakraProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}
