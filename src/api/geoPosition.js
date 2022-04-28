export const getCurrentLocation = async () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  } else {
    return new Promise((reject) => reject("not supported"));
  }
};
