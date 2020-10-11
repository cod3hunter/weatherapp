import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState('');
  return (
    <Container>
      <SearchBar
        placeholder="Type the city here..."
        showLoading
        value={city}
        onChangeText={setCity}
      />
    </Container>
  );
};

export default HomeScreen;
