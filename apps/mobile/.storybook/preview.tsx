import './../global.css'
import type { Preview } from '@storybook/react-native-web-vite'
import { ThemeProvider } from '@react-navigation/native'
import { NAV_THEME } from '../lib/theme'
import { useColorScheme } from 'nativewind'

// Import NativeWind's cssInterop for proper React Native Web integration
if (typeof window !== 'undefined') {
  // This ensures NativeWind's transformations work in the web environment
  require('nativewind')
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => {
      const colorScheme = useColorScheme()
      return (
        <ThemeProvider value={colorScheme === 'dark' ? NAV_THEME.dark : NAV_THEME.light}>
          <Story />
        </ThemeProvider>
      )
    },
  ],
}

export default preview
