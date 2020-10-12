export {};

declare global {
  type ICityData = {
    Key: string;
    EnglishName: string;
    Country: {
      ID: string;
    };
    AdministrativeArea: {
      ID: string;
      EnglishName: string;
    };
    Rank: number;
  };
  type IWeatherData = {
    IsDayTime: boolean;
    Temperature: {
      Metric: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    WeatherText: string;
    WeatherIcon: number;
    MobileLink: string;
  };
}
