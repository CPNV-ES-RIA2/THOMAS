# Getting Started with Create React App
This project is part from a bigger project [RIA2](https://github.com/ThomasGrossmann/RIA2/tree/Sprint-%234). It is the graphical interface built with ReactJS and following the most caracteristics possible from a RIA (Rich Internet Application) app.

## How to run the app

### Install dependencies
- `cd frontend`
- `npm install`

### Run the app
- `cd frontend`
- `npm start`
- Go to `localhost:3000` in your prefered browser
- Refer to the [Backend README](https://github.com/ThomasGrossmann/RIA2/blob/Sprint-%234/README.md) to know how to launch each Backend services to make the app work fully.

### Run the app with Docker
- Build the image (development stage)
  - `cd frontend`
  - `docker build -t ria-frontend --target=development .`
- Run the image
  - `docker run -p 3000:3000 ria-frontend`
- Go to `localhost:3000` in your prefered browser to see the Frontend running from Docker.
- Refer to the [Backend README](https://github.com/ThomasGrossmann/RIA2/blob/Sprint-%234/README.md) to know how to launch each Backend services to make the app work fully.

## How to run the tests
- `npx cypress open`
- Click on E2E Testing
- Chose the browser you want to run the tests on and click on Start E2E Testing in [SELECTED BROWSER]
- Click on the test file you want to run
- The tests will now run

If for some reason you have an error when doing `npx cypress open` (like "No version of Cypress is installed in: [...]")
- Run `npx cypress install` and retry `npx cypress open`

```
Note : During development, Electron was used to run the tests.
```
