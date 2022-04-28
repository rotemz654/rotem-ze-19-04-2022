export const SET_ADD_FAVORITES = "SET_ADD_FAVORITES";
export const SET_DELETE_FAVORITES = "SET_DELETE_FAVORITES";
export const SET_CITY_DATA = "SET_CITY_DATA";
export const SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER";
export const SET_FIVE_DAY_FORECASTS = "SET_FIVE_DAY_FORECASTS";

export const setAddFavorites = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_ADD_FAVORITES, favorites: data });
  };
};

export const setDeleteFavorites = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_DELETE_FAVORITES, name: data });
  };
};

export const setCityData = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_CITY_DATA, cityData: data });
  };
};

export const setCurrentWeather = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_WEATHER, currentWeather: data });
  };
};

export const setFiveDayForecasts = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_FIVE_DAY_FORECASTS, fiveDayForecasts: data });
  };
};
