import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import WeatherCard from "./WeatherCard";
import classes from "./styles/Favorites.module.css";
import SearchBar from "../components/SearchBar";
import { CircularProgress } from "@material-ui/core";
import Header from "../components/Header";
import * as weatherAction from "../store/actions/weatherActions";
import ErrorModal from "../components/ErrorModal";
import {
  getLocationAutoComplete,
  getCurrentWeather,
  getFiveDayDailyForecast,
  geoPosition,
} from "../api/weather";

const Weather = () => {
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.weather.cityData);
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState(cityData.name);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(false);
    const responseCityCode = await getWeatherData1();
    await getWeatherData2(responseCityCode);
    await getWeatherData3(responseCityCode);
    setIsLoading(false);
  };

  const onInputChange = (value) => {
    setInputText(value);
  };

  const getWeatherData1 = async () => {
    let newCode = "";
    let newCityName = "";
    if (inputText) {
      newCityName = inputText;
    }
    if (!inputText) {
      newCityName = "Tel Aviv";
    }
    await getLocationAutoComplete(newCityName)
      .then((response) => {
        const data = {
          name: response["0"].LocalizedName,
          code: response["0"].Key,
        };
        newCode = response["0"].Key;
        dispatch(weatherAction.setCityData(data));
      })
      .catch((err) => {
        setError(true);
        setShowToast(true);
      });
    return newCode;
  };

  const getWeatherData2 = async (code) => {
    await getCurrentWeather(code)
      .then((response) => {
        dispatch(weatherAction.setCurrentWeather(response["0"]));
      })
      .catch((err) => {
        setError(true);
        setShowToast(true);
      });
  };

  const getWeatherData3 = async (code) => {
    await getFiveDayDailyForecast(code)
      .then((response) => {
        dispatch(weatherAction.setFiveDayForecasts(response.DailyForecasts));
      })
      .catch((err) => {
        setError(true);
        setShowToast(true);
      });
  };

  const onCloseModel = () => {
    setShowToast(false);
  };
  const onClickSearchCity = async () => {
    if (!inputText) {
      setError(true);
      setShowToast(true);
    } else {
      fetchData();
    }
  };

  return (
    <main>
      <Header />
      <SearchBar
        onInputChange={onInputChange}
        onClickSearchCity={onClickSearchCity}
      />
      {isLoading && (
        <CircularProgress
          size="150px"
          className={classes.loading}
          color="inherit"
        />
      )}
      <ErrorModal onCloseModel={onCloseModel} showToast={showToast} />
      {!isLoading && !error && (
        <section>
          <WeatherCard />
        </section>
      )}
    </main>
  );
};

export default Weather;
