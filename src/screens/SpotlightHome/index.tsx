import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAppNavigation } from '../../hooks/useAppNavigation'

export default function SpotlightHomeScreen() {
  const navigation = useAppNavigation()

  return (
    <View>
      <Text>SpotlightHome</Text>
      <Button
        title="Show film"
        onPress={() => navigation.navigate('FilmDetail', { filmId: 9 })}
      />
    </View>
  )
}
