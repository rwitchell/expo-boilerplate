import { render } from '@/utils/test-utils'
import TabTwoScreen from '@/app/(tabs)/two'

describe('TabTwoScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<TabTwoScreen />)
    expect(toJSON()).toMatchSnapshot()
  })
})
