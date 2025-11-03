import { tmdbService } from '../tmdb.service'
import { api } from '../api/client'

jest.mock('../api/client')

const mockedApi = api as jest.Mocked<typeof api>

describe('tmdbService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch film by id', async () => {
    const mockFilm = { id: 123, title: 'Test Movie' }
    mockedApi.get.mockResolvedValueOnce({ data: mockFilm })

    const result = await tmdbService.fetchFilmById(123)

    expect(mockedApi.get).toHaveBeenCalledWith('/movie/123')
    expect(result).toEqual(mockFilm)
  })

  it('should fetch popular movies', async () => {
    const mockResponse = { results: [], page: 1 }
    mockedApi.get.mockResolvedValueOnce({ data: mockResponse })

    const result = await tmdbService.fetchPopular()

    expect(mockedApi.get).toHaveBeenCalledWith('/movie/popular')
    expect(result).toEqual(mockResponse)
  })

  it('should fetch top rated movies', async () => {
    const mockResponse = { results: [], page: 1 }
    mockedApi.get.mockResolvedValueOnce({ data: mockResponse })

    const result = await tmdbService.fetchTopRated()

    expect(mockedApi.get).toHaveBeenCalledWith('/movie/top_rated')
    expect(result).toEqual(mockResponse)
  })

  it('should fetch upcoming movies', async () => {
    const mockResponse = { results: [], page: 1, dates: {} }
    mockedApi.get.mockResolvedValueOnce({ data: mockResponse })

    const result = await tmdbService.fetchUpcoming()

    expect(mockedApi.get).toHaveBeenCalledWith('/movie/upcoming')
    expect(result).toEqual(mockResponse)
  })
})
