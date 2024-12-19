import { Text } from 'react-native'
import { render, userEvent } from '@/utils/test-utils'
import TabOneScreen from '@/app/(tabs)/index'
import { renderRouter, screen } from '@/utils/test-utils-router'
import { Href, Redirect } from 'expo-router'

describe('TabOneScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<TabOneScreen />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders tab one title', () => {
    const { getByText } = render(<TabOneScreen />)
    expect(getByText('Tab One')).toBeOnTheScreen()
  })

  it('can render a route', async () => {
    // see: https://github.com/expo/router/blob/main/packages/expo-router/src/__tests__/smoke.test.tsx
    renderRouter({
      index: () => <Text>Hello</Text>,
    })

    expect(await screen.findByText('Hello')).toBeOnTheScreen()
    expect(screen).toHavePathname('/')
    expect(screen).toHaveSegments([])
    expect(screen).toHaveSearchParams({})
  })

  it.skip('changes from tab one to tab two', async () => {
    const { getByText } = renderRouter({ index: () => <TabOneScreen /> })
    expect(getByText('Tab One')).toBeOnTheScreen()

    const user = userEvent.setup()
    // navigating to the blogs screen via tab bar
    await user.press(screen.getByText(/Tab Two/i))

    expect(getByText('Tab One')).not.toBeOnTheScreen()
    expect(getByText('Tab Two')).toBeOnTheScreen()
  })

  it.skip('404', async () => {
    // see: https://github.com/expo/router/blob/main/packages/expo-router/src/__tests__/smoke.test.tsx
    const Index = jest.fn(() => <Redirect href={'/404' as Href} />)

    renderRouter({
      index: Index,
    })

    expect(await screen.findByText("This screen doesn't exist.")).toBeOnTheScreen()
    expect(screen).toHavePathname('/404')
    expect(screen).toHaveSegments(['[...404]'])
    expect(screen).toHaveSearchParams({ '404': '404' })
  })
})
