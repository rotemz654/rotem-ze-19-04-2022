import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Header from "../components/Header";
import * as helpers from "../helpers/helper";
import ErrorModal from "../components/ErrorModal";
import { getCurrentWeather, getFiveDayDailyForecast } from "../api/weather";
import * as weatherAction from "../store/actions/weatherActions";
import Unit from "../components/Unit";
import classes from "./styles/Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const favoritesList = useSelector((state) => state.weather.favorites);
  const [tempUnit, setTempUnit] = useState(true); // true for Celsius
  const [favoritesWeatherData, setFavoritesWeatherData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let data = [];
      await Promise.all(
        favoritesList.map(async (city) => {
          const response = await getCurrentWeather(city.code);
          data.push({
            name: city.name,
            code: city.code,
            weatherData: response["0"],
          });
        })
      ).catch((err) => {
        setError(true);
        setShowToast(true);
      });
      setFavoritesWeatherData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const onClickTemp = () => {
    setTempUnit((prevUnit) => !prevUnit);
  };

  const onCloseModel = () => {
    setShowToast(false);
  };

  const onClickFavoriteItem = async (city) => {
    const response = await getFiveDayDailyForecast(city.code);
    // save new data in the store
    dispatch(weatherAction.setFiveDayForecasts(response.DailyForecasts));
    const data = {
      name: city.name,
      code: city.code,
    };
    dispatch(weatherAction.setCityData(data));
    dispatch(weatherAction.setCurrentWeather(city.weatherData));
    //navigate to home page
    navigate("/");
  };
  const renderFavoriteForecast = () => {
    return favoritesWeatherData.map((city) => {
      return (
        <div
          className={classes.box}
          key={city.code}
          onClick={() => onClickFavoriteItem(city)}
        >
          <div className={classes.boxdata}>
            {city.name}
            <img
              src={helpers.getImg(city.weatherData.WeatherIcon)}
              alt="avatar"
              className={classes.icon}
            />
            <div>
              {tempUnit &&
                Math.round(city.weatherData.Temperature.Metric.Value)}
              {!tempUnit &&
                Math.round(city.weatherData.Temperature.Imperial.Value)}{" "}
              <Unit tempUnit={tempUnit} />
            </div>
            {city.weatherData.WeatherText}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Header />
      {isLoading && (
        <CircularProgress
          size="150px"
          className={classes.loading}
          color="inherit"
        />
      )}
      <ErrorModal onCloseModel={onCloseModel} showToast={showToast} />
      {!isLoading && !error && (
        <div className={classes.main}>
          <div className={classes.data}>
            <button className={classes.button} onClick={() => onClickTemp()}>
              change unit
            </button>
            {renderFavoriteForecast()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
