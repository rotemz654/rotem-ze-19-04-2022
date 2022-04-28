import classes from "./styles/Unit.module.css";

const Unit = (props) => {
  return (
    <div className={classes.unit}>
      {props.tempUnit && (
        <sup>
          <span className={classes.bold}>°C</span>
          <span onClick={() => props.onClickTemp()} className={classes.cursor}>
            {" "}
            | °F
          </span>
        </sup>
      )}
      {!props.tempUnit && (
        <sup>
          <span onClick={() => props.onClickTemp()} className={classes.cursor}>
            {" "}
            °C{" "}
          </span>
          |<span className={classes.bold}> °F</span>
        </sup>
      )}
    </div>
  );
};

export default Unit;
