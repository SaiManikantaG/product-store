
# Product Store

An AngularJS application that I've built to use an API endpoint resource that is running locally. This is built using boilerplate code and has lot of extra features that can be integrated and implemented easily with fewer changes.

- Uses AngularJs 5

## Getting Started

- The App can be cloned or downloaded.
- If downloaded, extract the folder and then go into the folder where project is residing and run 
```
npm install
```
and to start the application run
```
npm start
```
BOOM!! Magic happens, you can now see the app up and running

# Points to remember to use this app

As stated earlier this app is built to showcase how we can communicate with GET API endpoint that has product list of items as below for example:

```
[
    {
      "name": "shirt",
      "price": 15,
      "inventory": 12
    },
```

- with above data provided at the endpoint, the angular app read the data and displays it in a table
- A filter is also available to search / filter the product among the given product list and it dyamic and responsive


------- Boilter Plate details and resources for learning are below ----------

# ProductStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 5.X.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
