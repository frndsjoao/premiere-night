import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAppNavigation } from '../../hooks/useAppNavigation'
import { RootStackParamList } from '../../routes/types'
import { StackScreenProps } from '@react-navigation/stack'

type Props = StackScreenProps<RootStackParamList, 'FilmDetail'>

export default function FilmDetailScreen({ route }: Props) {
  const { filmId } = route.params
  const navigation = useAppNavigation()

  function navigateToWatchlist() {
    navigation.goBack()
    navigation.navigate('MainTabs', { screen: 'Watchlist' })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FilmDetailScreen</Text>
      <Text>ID: {filmId}</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to watchlist" onPress={navigateToWatchlist} />
    </View>
  )
}
