import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./styles/SearchBar.module.css";

const SearchBar = (props) => {
  const cityData = useSelector((state) => state.weather.cityData);
  return (
    <div className={classes.row}>
      <TextField
        placeholder={cityData.name}
        onChange={(event) => props.onInputChange(event.target.value)}
        InputProps={{
          endAdornment: (
            <SearchIcon
              onClick={props.onClickSearchCity}
              className={classes.searchicon}
            />
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
