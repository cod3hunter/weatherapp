import axios from 'axios';
import _ from 'lodash';
import {API_KEY} from '@env';

const BASE_URL = 'http://dataservice.accuweather.com';

export const getCitiesByName = async (
  cityName: string,
): Promise<ICityData[]> => {
  try {
    const url = `${BASE_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${encodeURI(
      cityName,
    )}`;
    const response = await axios.get(url);
    const dataFiltered = _.uniqBy<ICityData>(
      response.data,
      (item) => item.Rank,
    ).filter((item) => item.Country.ID === 'BR');
    return dataFiltered || [];
  } catch (err) {
    return [];
  }
};

export const getWeatherByKey = async (key: string) => {
  try {
    const url = `${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`;
    const response = await axios.get<IWeatherData[]>(url);
    if (response.data?.length > 0) {
      return response.data[0];
    }
    return {};
  } catch (err) {
    return {};
  }
};
