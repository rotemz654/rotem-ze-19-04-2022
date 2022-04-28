import {
  SET_ADD_FAVORITES,
  SET_DELETE_FAVORITES,
  SET_CITY_DATA,
  SET_CURRENT_WEATHER,
  SET_FIVE_DAY_FORECASTS,
} from "../actions/weatherActions";

const initialState = {
  favorites: [],
  cityData: [],
  currentWeather: [],
  fiveDayForecasts: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_FAVORITES:
      return { ...state, favorites: state.favorites.concat(action.favorites) };
    case SET_DELETE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.name !== action.name),
      };
    case SET_CITY_DATA:
      return { ...state, cityData: action.cityData };
    case SET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.currentWeather };
    case SET_FIVE_DAY_FORECASTS:
      return { ...state, fiveDayForecasts: action.fiveDayForecasts };
    default:
      return state;
  }
};

export default weatherReducer;
