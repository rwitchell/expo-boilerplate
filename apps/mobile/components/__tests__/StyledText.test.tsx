import { render } from '@/utils/test-utils'

import { MonoText } from '../StyledText'

it(`renders correctly`, () => {
  const tree = render(<MonoText>Snapshot test!</MonoText>).toJSON()

  expect(tree).toMatchSnapshot()
})
