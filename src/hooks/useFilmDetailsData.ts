import { useMemo } from 'react'
import { IFilm } from '../@types/Film'
import { useImageSource } from './useImageSource'
import { formatDate, getYear } from '../utils/formatDate'
import { getLanguageName } from '../utils/getLanguageName'

export const useFilmDetailData = (film?: IFilm) => {
  const imageSource = useImageSource(film?.poster_path)
  const releaseYear = useMemo(
    () => (film?.release_date ? getYear(film.release_date) : ''),
    [film?.release_date],
  )

  const filmDetails = useMemo(() => {
    return [
      { label: 'Release date', value: formatDate(film?.release_date ?? '') },
      { label: 'Status', value: film?.status ?? '' },
      {
        label: 'Main production',
        value: film?.production_companies?.[0]?.name ?? 'N/A',
      },
      {
        label: 'Language',
        value: getLanguageName(film?.original_language ?? ''),
      },
    ]
  }, [
    film?.original_language,
    film?.production_companies,
    film?.release_date,
    film?.status,
  ])

  return { imageSource, releaseYear, filmDetails }
}
