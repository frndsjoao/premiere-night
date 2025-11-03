import React from 'react'
import DetailCard from '../index'
import { renderWithTheme } from '../../../../test-utils/renderWithTheme'

describe('DetailCard Component', () => {
  it('should render label and value correctly', () => {
    const { getByText } = renderWithTheme(
      <DetailCard label="Duration" value="120 min" />,
    )

    expect(getByText('Duration')).toBeTruthy()
    expect(getByText('120 min')).toBeTruthy()
  })

  it('should match snapshot with number value', () => {
    const { toJSON } = renderWithTheme(
      <DetailCard label="Rating" value={8.5} />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
