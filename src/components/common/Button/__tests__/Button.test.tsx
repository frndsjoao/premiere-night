import React from 'react'
import Button from '../index'
import { renderWithTheme } from '../../../../test-utils/renderWithTheme'

describe('Button Component', () => {
  it('should render correctly with title', () => {
    const { getByText } = renderWithTheme(<Button title="Click Me" />)

    expect(getByText('Click Me')).toBeTruthy()
  })

  it('should match snapshot with icon', () => {
    const MockIcon = () => <></>
    const { toJSON } = renderWithTheme(
      <Button title="Button with Icon" icon={MockIcon} />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
