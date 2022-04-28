import axios from "axios";
import { BACKEND_URL, API_KEY } from "../types/env";
import { getCurrentLocation } from "./geoPosition";
export const getLocationAutoComplete = async (text) => {
  const response = await axios.get(
    `${BACKEND_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`
  );
  return response.data;
};

export const getCurrentWeather = async (locationKey) => {
  const response = await axios.get(
    `${BACKEND_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
  );
  return response.data;
};

export const getFiveDayDailyForecast = async (locationKey) => {
  const response = await axios.get(
    `${BACKEND_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
  );
  return response.data;
};

export const getGeoPosition = async () => {
  const geoPosition = await getCurrentLocation();
  const lat = geoPosition.coords.latitude;
  const long = geoPosition.coords.longitude;
  const response = await axios.get(
    `${BACKEND_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%2C${long}`
  );
  return response.data;
};
