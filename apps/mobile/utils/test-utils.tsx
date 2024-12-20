import { render, RenderOptions } from '@testing-library/react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { PortalHost } from '@rn-primitives/portal'

const AllTheProviders = ({ children }) => {
  return (
    <>
      <ThemeProvider value={DefaultTheme}>
        <StatusBar style={'light'} />
        {children}
        <PortalHost />
      </ThemeProvider>
    </>
  )
}

const customRender = (ui: React.ReactElement, options?: RenderOptions | undefined) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react-native'

export { customRender as render }
