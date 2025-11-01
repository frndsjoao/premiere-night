import { IFilm } from './Film'

export interface ITMDBResponse {
  page: number
  total_pages: number
  total_results: number
  results: IFilm[]
}

export interface ITMDBUpcomingResponse extends ITMDBResponse {
  dates: {
    maximum: string
    minimum: string
  }
}
