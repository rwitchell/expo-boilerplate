import '@testing-library/react-native/extend-expect'
import '@testing-library/jest-native/extend-expect'

// Mock native modules first
// jest.mock('react-native', () => {
//   const ReactNative = jest.requireActual('react-native')
//   return Object.defineProperty(ReactNative, 'Settings', {
//     get: jest.fn(() => {
//       return { get: jest.fn(), set: jest.fn(), watchKeys: jest.fn() }
//     }),
//   })
// })

// const mockedUseColorScheme = jest.fn()
// jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
//   default: mockedUseColorScheme,
// }))

// // Mock expo-router
// jest.mock('expo-router', () => {
//   const Tabs = ({ children }) => children
//   Tabs.Screen = (a, b) => {
//     console.log(a, b)
//     return null
//   }
//   return {
//     Link: () => 'Link',
//     Tabs,
//   }
// })

// jest.mock('expo-web-browser', () => jest.fn())

// Mock FontAwesome
// jest.mock('@expo/vector-icons/FontAwesome', () => 'FontAwesome')
