import {useEffect, useState} from 'react';
import {getWeatherByKey} from '../services/RequestService';

export default (cityKey: string) => {
  const [weather, setWeather] = useState<Partial<IWeatherData>>({});
  useEffect(() => {
    (async () => {
      if (cityKey) {
        const response = await getWeatherByKey(cityKey);
        setWeather(response);
      }
    })();
  }, [cityKey]);

  return weather;
};
