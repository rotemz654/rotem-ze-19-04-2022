######### Created By Rotem Zelig DATE 27-04-2022 #########
Herolo Home Assignment - Frontend developer

OVERVIEW
write a simple, responsive, web app in angular/react that shows the weather of some city. The user should be able to search for a city and save it to favorites (locally, a server is not required).
We expect to see 2 pages in this app. (weather page and favorites page).
We recommend you to use a 3rd party UI library (material, prime, bootstrap, etc)

API
The API that you’ll use for this app is ​AccuWeather API​. Please signup and create a new app in order to get an API key.
You will use 3 endpoints: ​location autocomplete​ for the search field, ​get current weather​ and 5-day daily forecast​. Please read those API docs.
NOTE: this API is limited to 50 requests per day. our recommendation is to save the responses and use them locally during development.

GOALS

1. Show us your coding skills - We want to see your strengths, don’t be afraid to go wild, add features and customize the design.
2. Readability - Your code should be readable and self-explanatory with minimum comments. Remove any unused code, console logs, and files. Use logical project structure and code separation.

HOW TO SUBMIT 3. Push your code to your git repository and make it public (we recommend ​GitHub​ in order to use GitHub Pages with ease), ​name the repo as firstName-lastName-dateOfStart (John-Doe-01-12-2018)​. 4. Deploy the compiled app to your server or ​GitHub pages​/​Heroku​/etc - ​MUST
Send us the git repository link and a link to the deployed app (2 links)

SPECS

1. Create a header with navigation icons/links/buttons for main and favorites screen.
2. The main screen (weather details) will be composed of a search field to search a
   location’s weather by city name. And below it, the current weather and a 5-day forecast of the searched location. A location should have an indication if it’s already saved in favorites, and a button to add/remove from favorites (it can be the same button).
3. Display Tel Aviv weather by default.
4. Favorites screen will be composed of a list of favorite locations. Each location should
   have an ID, name and current weather. Clicking on a favorite will navigate to the main
   screen showing the details of that location.
5. Searching should be done in English letters only
6. State management is a must!
7. Responsive design is a must! (flexbox/grid will give you extra points ).
8. Error handling is a must! (can be done with toast, modal).

BONUSES 9. Set the default location by using the ​Geolocation API​. you will need another API endpoint for this: ​get location key by lat/lon​. 10. Add dark/light theme support (add toggle button in the header). 11. Add Celsius/Fahrenheit toggle button. 12. Add animations (with good taste).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
