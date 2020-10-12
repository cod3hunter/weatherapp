import {useState, useEffect} from 'react';
import {getCitiesByName} from '../services/RequestService';

export default (cityName: string): ICityData[] => {
  const [cities, setCities] = useState<ICityData[]>([]);
  useEffect(() => {
    (async () => {
      if (cityName.length > 2) {
        const data = await getCitiesByName(cityName);
        setCities(data);
      }
    })();
  }, [cityName]);
  return cities;
};
