import { TMDB_IMAGE_URL } from '@env'
import { useMemo } from 'react'
import FastImage from 'react-native-fast-image'

export const useImageSource = (path?: string) => {
  return useMemo(
    () => ({
      uri: path ? `${TMDB_IMAGE_URL}${path}` : '',
      priority: FastImage.priority.normal,
      cache: FastImage.cacheControl.immutable,
    }),
    [path],
  )
}
