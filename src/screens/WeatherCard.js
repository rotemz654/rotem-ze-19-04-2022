import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as weatherAction from "../store/actions/weatherActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as helpers from "../helpers/helper";
import classes from "./styles/WeatherCard.module.css";
import Unit from "../components/Unit";

const WeatherCard = (props) => {
  const dispatch = useDispatch();

  const favoritesList = useSelector((state) => state.weather.favorites);
  const weatherIcon = useSelector(
    (state) => state.weather.currentWeather.WeatherIcon
  );
  const currentWeather = useSelector((state) => state.weather.currentWeather);
  const temp = useSelector((state) => state.weather.currentWeather.Temperature);
  const cityData = useSelector((state) => state.weather.cityData);
  const fiveDayForecasts = useSelector(
    (state) => state.weather.fiveDayForecasts
  );
  const [tempUnit, setTempUnit] = useState(true); // true for Celsius
  const [favoriteIcon, setFavoriteIcon] = useState(false); // if true - current city is in the favorite list

  useEffect(() => {
    const value = checkFavoriteList(cityData.name);
    setFavoriteIcon(value);
  }, [favoritesList]);

  const checkFavoriteList = (name) => {
    let response = false;
    favoritesList.forEach((favorite) => {
      if (favorite.name === name) {
        response = true;
      }
    });
    return response;
  };

  const onClickAddFav = async () => {
    await dispatch(weatherAction.setAddFavorites(cityData));
  };

  const onClickDeleteFav = async () => {
    await dispatch(weatherAction.setDeleteFavorites(cityData.name));
  };

  const onClickTemp = () => {
    setTempUnit((prevUnit) => !prevUnit);
  };

  const renderWeatherDays = () => {
    return fiveDayForecasts.map((dailyForecast) => {
      const day = helpers.getDayFromDate(dailyForecast.Date);
      const CMin = helpers.toCelsius(dailyForecast.Temperature.Minimum.Value);
      const CMax = helpers.toCelsius(dailyForecast.Temperature.Maximum.Value);
      return (
        <div className={classes.box} key={dailyForecast.Date}>
          <div className={classes.boxdata}>
            {day}
            <img
              src={helpers.getImg(dailyForecast.Day.Icon)}
              className={classes.icon}
              alt="avatar"
            />
            {tempUnit && (
              <div >
                {CMin}
                <sup>°C </sup>- {CMax}
                <sup>°C</sup>
              </div>
            )}
            {!tempUnit && (
              <div >
                {dailyForecast.Temperature.Minimum.Value}
                <sup>°F</sup> - {dailyForecast.Temperature.Maximum.Value}
                <sup>°F</sup>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.row}>
        <div className={classes.favgroup}>
          {!favoriteIcon && (
            <div className={classes.fav}>
              <FavoriteBorderIcon
                onClick={() => onClickAddFav()}
                className={classes.favicon}
              />
              <div className={classes.text}>Add to favorite</div>
            </div>
          )}
          {favoriteIcon && (
            <div className={classes.fav}>
              <FavoriteIcon
                onClick={() => onClickDeleteFav()}
                className={classes.favicon}
              />
              <div className={classes.text}>Remove from favorite</div>
            </div>
          )}
        </div>
        <div className={classes.currentweather}>
          <img
            src={helpers.getImg(weatherIcon)}
            className={classes.icon}
            alt="avatar"
          />
          <div>{cityData.name}</div>
          <div className={classes.temp}>
            {tempUnit && Math.round(temp.Metric.Value)}
            {!tempUnit && Math.round(temp.Imperial.Value)}
            <Unit tempUnit={tempUnit} onClickTemp={onClickTemp} />
          </div>
        </div>
      </div>
      <div className={classes.weathersummary}> {currentWeather.WeatherText}</div>
      <div className={classes.list}>{renderWeatherDays()}</div>
    </div>
  );
};
export default WeatherCard;
