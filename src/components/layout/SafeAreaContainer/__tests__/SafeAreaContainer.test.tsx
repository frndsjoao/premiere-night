import React from 'react'
import { Text } from 'react-native'
import SafeAreaContainer from '../index'
import { renderWithTheme } from '../../../../test-utils/renderWithTheme'

describe('SafeAreaContainer Component', () => {
  it('should render children correctly', () => {
    const { getByText } = renderWithTheme(
      <SafeAreaContainer>
        <Text>Test Content</Text>
      </SafeAreaContainer>,
    )

    expect(getByText('Test Content')).toBeTruthy()
  })

  it('should match snapshot with custom edges', () => {
    const { toJSON } = renderWithTheme(
      <SafeAreaContainer edges={['top', 'bottom']}>
        <Text>Content</Text>
      </SafeAreaContainer>,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
