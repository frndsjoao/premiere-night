/**
 * Sample React Native App with Styled Components
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import styled from 'styled-components/native';

interface ThemeProps {
  isDarkMode: boolean;
}

const Container = styled.View<ThemeProps>`
  flex: 1;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text<ThemeProps>`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
  margin-bottom: 20px;
`;

const Subtitle = styled.Text<ThemeProps>`
  font-size: 18px;
  color: ${props => props.isDarkMode ? '#cccccc' : '#333333'};
  margin-bottom: 10px;
`;

const Card = styled.View<ThemeProps>`
  background-color: ${props => props.isDarkMode ? '#2a2a2a' : '#f5f5f5'};
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  shadowColor: #000;
  shadowOffset: 0px 2px;
  shadowOpacity: 0.25;
  shadowRadius: 3.84px;
  elevation: 5;
`;

const Button = styled.TouchableOpacity<ThemeProps>`
  background-color: ${props => props.isDarkMode ? '#4a90e2' : '#007AFF'};
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Container isDarkMode={isDarkMode}>
        <Card isDarkMode={isDarkMode}>
          <Title isDarkMode={isDarkMode}>Welcome to React Native!</Title>
          <Subtitle isDarkMode={isDarkMode}>
            Built with TypeScript
          </Subtitle>
          <Subtitle isDarkMode={isDarkMode}>
            Styled with styled-components
          </Subtitle>
          <Button isDarkMode={isDarkMode} onPress={handlePress}>
            <ButtonText>Get Started</ButtonText>
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default App;
