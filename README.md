## General 

This project is a work in progress. It's a project that serves as a minimal starting point for my React apps.

[![Circle CI](https://circleci.com/gh/jvorcak/universal-react-kit.svg?style=svg)](https://circleci.com/gh/jvorcak/universal-react-kit)
[![Dependency Status](https://david-dm.org/jvorcak/universal-react-kit.svg)](https://david-dm.org/jvorcak/universal-react-kit)

## Most important features
  - Store management with Redux
  - Server rendering
  - Tests
  - Routing
  - i18n support
  - Redux dev tools
  - ~~E2E tests~~ (coming soon)
  - ~~React native support~~ (coming soon)
  
## It currently includes/supports:
  - React
  - React-router
  - Babel 6
  - Redux
  - Express with server rendering support
  - Immutable.JS (mostly used for Redux store)
  - Webpack
  - Redux devtools
  - Hot reload
  - Chai
  - React Helmet
  - Mocha
  - React-intl 2
  - Eslint

As written in a headline, it's used to understand how things fit toghether, so there are probably a lot of things that should be done differently. If you see any of those, please feel free to comment.

# Recommended setup/Prerequisities

Recommended setup is to use Node 5 with npm 3. It hasn't been properly tested with previous versions.

# Instalation

```
npm install
npm start
```

# Runtime

`http://localhost:3000/counter` shows a simple counter example with server rendering
`http://localhost:3000/event` this page does nothing usefull :) it just serves to test a different module in the app.

# Commands

 - Run `npm run tests` to execute tests.
 - Run `npm run eslint` to check a quality of a source code.
 - Run `npm run translate` to combine translated messages into one flat object.

