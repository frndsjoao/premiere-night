jest.mock('react-native-fast-image', () => 'FastImage')

jest.mock('react-native-linear-gradient', () => 'LinearGradient')

jest.mock('lucide-react-native', () => ({
  Trash2: 'Trash2',
  Play: 'Play',
  Plus: 'Plus',
  Clapperboard: 'Clapperboard',
  X: 'X',
  Check: 'Check',
}))

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
    dispatch: jest.fn(),
  }),
}))
