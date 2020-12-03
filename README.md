# Prime-Numbers-API-client

This is a front-end web application made by using webpack. The application gives results about prime numbers. It is connected to a front-end api made by express.

## About this project
Making a front-end application using webpack, react, react-dom, react-router-dom, babel to show some results about prime numbers using an api which made by
myself using express.

## Future works on this project.
* Making more components to have plots of prime numbers.
* Making more information about the prime pattern that i used.
* Making some components which use simple algorithms about prime numbers and define a timer to compare the speed with the used pattern.
* Making better css using Bootstrap.

## Link to this app
#### [https://prime-numbers-api-client.surge.sh/#/](https://prime-numbers-api-client.surge.sh/#/)



## Link to a back-end application
#### [https://prime-numbers-api-server.herokuapp.com/](https://prime-numbers-api-server.herokuapp.com/)

## Steps to make the server

### installing
* `npm init -y` : to have node.js
* ```npm install --save-dev webpack webpack-dev-server webpack-cli @webpack-cli/serve```: to have webpack
* ```npm install --save-dev @babel/core babel-loader @babel/preset-env babel-plugin-transform-react-jsx babel-plugin-transform-object-rest-spread```: to have babel
* ```npm install react react-dom react-router-dom```: to have react
* ```npm install axios```: to have axios for AJAX

### making src directory
* a directory named `src` is made.
* inside that a directory named components is made, as all the components will go inside this directory.
* a directory for images is made.
* `index.html` is made which has a full html and inside the body, a `<div>` that gonna take the result (here it has `app` id), and below that a `<script>` which has the source from `/bundle.js` are made.
* `index.js` is made and inside it the Routes using `ReactDom` are made and all the components which made are imported
* `style.css` is made.

### making a webpack.config.js file
* in the main folder, a file named `webpack.config.js` is made and the follow commands has been written inside it:
```
const path = require("path");module.exports = {
  mode: "development",
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            ["transform-react-jsx"]
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    historyApiFallback: true
  }
};
```

## Deploying on surge
* for deploying on surge, as we use webpack, there are some steps to make the surge website works:

    1. `npm run build`: to build `bundle.js`.

    2. copy and paste `index.html`, `index.js`, `style.css` and image directory into the build folder which has been made by first step.

    3. `surge build`: to build a website for you. you can change the offered name bu surge


## Techs and libraries
* javascript
* Node.js
* webpack
* babel
* axios
* react
* react-dom
* react-router-dom
* surge
