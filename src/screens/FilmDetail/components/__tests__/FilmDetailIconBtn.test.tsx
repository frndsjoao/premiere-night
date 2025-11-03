import React from 'react'
import { AddIcon, AddedIcon } from '../FilmDetailIconBtn'
import { renderWithTheme } from '../../../../test-utils/renderWithTheme'

describe('FilmDetailIconBtn', () => {
  it('should render AddIcon', () => {
    const { toJSON } = renderWithTheme(<AddIcon />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render AddedIcon', () => {
    const { toJSON } = renderWithTheme(<AddedIcon />)
    expect(toJSON()).toMatchSnapshot()
  })
})
