import React, {useState, useEffect} from 'react';
import {SearchBar} from 'react-native-elements';
import styled from 'styled-components/native';
import useSearchCities from '../../hooks/useSearchCities';
import useFetchWeather from '../../hooks/useFetchWeather';
import {CitiesList, WeatherCard} from '../../library';

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  padding: 16px;
`;

const HomeScreen: React.FC = () => {
  const [citySearch, setCitySearch] = useState('');
  const [selectedCityKey, setSelectedCityKey] = useState('');

  const onSelectedCity = (cityKey: string) => {
    setSelectedCityKey(cityKey);
  };

  const cities = useSearchCities(citySearch);
  const weather = useFetchWeather(selectedCityKey);

  return (
    <Container>
      <SearchBar
        placeholder="Type the city here..."
        showLoading
        value={citySearch}
        onChangeText={setCitySearch}
      />
      <ContentContainer>
        <CitiesList data={cities} onSelectedCity={onSelectedCity} />
        {weather.WeatherIcon && <WeatherCard data={weather} />}
      </ContentContainer>
    </Container>
  );
};

export default HomeScreen;
