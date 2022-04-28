import { useNavigate } from "react-router-dom";
import classes from "./styles/Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const onClickTag = (path) => {
    navigate(path);
  };

  return (
    <ul className={classes.ul}>
      <li className={classes.li}>
        <a onClick={() => onClickTag("/")}>Home</a>
      </li>
      <li className={classes.li}>
        <a onClick={() => onClickTag("/favorites")}>Favorites</a>
      </li>
    </ul>
  );
};

export default Header;
