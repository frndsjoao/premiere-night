import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/api/queryClient'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './styles/theme'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import LoadingScreen from './components/layout/LoadingScreen'
import { linking } from './routes/linking'

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <SafeAreaProvider>
              <QueryClientProvider client={queryClient}>
                <NavigationContainer linking={linking}>
                  <AppNavigator />
                </NavigationContainer>
              </QueryClientProvider>
            </SafeAreaProvider>
          </PersistGate>
        </ThemeProvider>
      </GestureHandlerRootView>
    </Provider>
  )
}
