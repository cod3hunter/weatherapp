import React from 'react';
import {Linking} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  padding-bottom: 16px;
`;

const WeatherImage = styled.Image`
  height: 48px;
  width: 56px;
`;

const TemperatureText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-left: 16px;
`;

const Title = styled(Text)`
  margin-top: 16px;
  width: 100%;
  text-align: center;
`;

const TitleDivider = styled(Divider)`
  margin-top: 8px;
`;

type Props = {
  data: IWeatherData;
};

const WeatherCard: React.FC<Props> = ({data}) => {
  return (
    <>
      <Title h4>{data.WeatherText}</Title>
      <TitleDivider />
      <Container>
        <WeatherImage
          source={{
            uri: `https://developer.accuweather.com/sites/default/files/${
              data.WeatherIcon > 9
                ? data.WeatherIcon
                : '0' + String(data.WeatherIcon)
            }-s.png`,
          }}
        />
        <TemperatureText>{data.Temperature.Metric.Value}°</TemperatureText>
      </Container>
      <Button
        title="See More"
        onPress={() => Linking.openURL(data.MobileLink)}
      />
    </>
  );
};

export default WeatherCard;
