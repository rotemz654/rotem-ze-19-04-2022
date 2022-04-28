export const toCelsius = (f) => {
  return Math.round((5 / 9) * (f - 32));
};

export const getDayFromDate = (date) => {
  return new Date(date).toLocaleString("en-us", {
    weekday: "long",
  });
};

export const getImg = (fileName) => {
  var images = require.context("../assets/icons", false, /\.png$/);
  return images("./" + fileName + ".png");
};
