import React from 'react';
import {ThemeProvider, Text} from 'react-native-elements';
import styled from 'styled-components/native';
import HomeScreen from './modules/Home/HomeScreen';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SafeAreaContainer>
        <HomeScreen />
      </SafeAreaContainer>
    </ThemeProvider>
  );
};

export default App;
