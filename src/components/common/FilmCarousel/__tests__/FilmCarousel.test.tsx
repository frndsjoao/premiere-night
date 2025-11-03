import React from 'react'
import FilmCarousel from '../index'
import { ITMDBMovieList } from '../../../../@types/TMDBResponses'
import { renderWithTheme } from '../../../../test-utils/renderWithTheme'

jest.mock('../../FilmCard', () => {
  const { Text } = require('react-native')
  return function MockFilmCard({ film }: { film: ITMDBMovieList }) {
    return <Text>{film.title}</Text>
  }
})

jest.mock('../../../../hooks/useAppNavigation', () => ({
  useAppNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}))

const mockFilms: ITMDBMovieList[] = [
  {
    id: 1,
    title: 'Test Movie 1',
    poster_path: '/poster1.jpg',
    release_date: '2024-03-15',
    overview: 'Test overview 1',
    vote_average: 8.5,
    backdrop_path: '/backdrop1.jpg',
    genre_ids: [28, 12],
    original_language: 'en',
    original_title: 'Test Movie 1 Original',
    popularity: 100.5,
    video: false,
    vote_count: 1000,
    adult: false,
  },
  {
    id: 2,
    title: 'Test Movie 2',
    poster_path: '/poster2.jpg',
    release_date: '2024-04-20',
    overview: 'Test overview 2',
    vote_average: 7.8,
    backdrop_path: '/backdrop2.jpg',
    genre_ids: [18, 36],
    original_language: 'en',
    original_title: 'Test Movie 2 Original',
    popularity: 85.3,
    video: false,
    vote_count: 850,
    adult: false,
  },
  {
    id: 3,
    title: 'Test Movie 3',
    poster_path: '/poster3.jpg',
    release_date: '2024-05-10',
    overview: 'Test overview 3',
    vote_average: 9.2,
    backdrop_path: '/backdrop3.jpg',
    genre_ids: [878, 28],
    original_language: 'en',
    original_title: 'Test Movie 3 Original',
    popularity: 120.7,
    video: false,
    vote_count: 1500,
    adult: false,
  },
]

describe('FilmCarousel Component', () => {
  it('should render the component correctly', () => {
    const { queryByText } = renderWithTheme(
      <FilmCarousel films={mockFilms} title="Popular Movies" />,
    )

    expect(queryByText('Popular Movies')).toBeTruthy()
    expect(queryByText('Test Movie 1')).toBeTruthy()
    expect(queryByText('Test Movie 2')).toBeTruthy()
  })

  it('should match snapshot with title', () => {
    const { toJSON } = renderWithTheme(
      <FilmCarousel films={mockFilms} title="Trending Now" />,
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
