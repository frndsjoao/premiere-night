import React from 'react'
import Tag from '../index'
import { renderWithTheme } from '../../../../test-utils/renderWithTheme'

describe('Tag Component', () => {
  it('should render label correctly', () => {
    const { getByText } = renderWithTheme(<Tag label="Action" />)

    expect(getByText('Action')).toBeTruthy()
  })

  it('should match snapshot with the label', () => {
    const { toJSON } = renderWithTheme(<Tag label="Drama" />)

    expect(toJSON()).toMatchSnapshot()
  })
})
