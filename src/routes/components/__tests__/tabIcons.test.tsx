import React from 'react'
import { render } from '@testing-library/react-native'
import { WatchlistIcon, SpotlightIcon } from '../tabIcons'

describe('Tab Icons Components', () => {
  it('should match WatchlistIcon snapshot', () => {
    const { toJSON } = render(<WatchlistIcon color="#000000" size={20} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should match SpotlightIcon snapshot', () => {
    const { toJSON } = render(<SpotlightIcon color="#000000" size={20} />)

    expect(toJSON()).toMatchSnapshot()
  })
})
