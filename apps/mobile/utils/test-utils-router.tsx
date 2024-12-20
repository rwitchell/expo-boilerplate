import { StatusBar } from 'expo-status-bar'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { PortalHost } from '@rn-primitives/portal'
import { renderRouter } from 'expo-router/testing-library'

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

const customRenderRouter = (
  context?: Parameters<typeof renderRouter>[0],
  options?: Parameters<typeof renderRouter>[1],
) => {
  return renderRouter(context, {
    wrapper: AllTheProviders,
    ...options,
  })
}

export * from 'expo-router/testing-library'

export { customRenderRouter as renderRouter }
