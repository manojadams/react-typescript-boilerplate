# React Typescript Boilerplate
This project demonstrates the minimum number of packages required to transpile and run a react typescript project.

## Major components
- React & react-dom
- Typescript
- Babel
- Webpack

### React, react-dom
These are react depdendencies. Other react depdendencies required apart from this:
- @types/react
- @types/react-dom

### Babel
Babel converts react tsx to javascript. Following dependencies are required as part of this:
- @babel/core
- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript
- babel-loader

### Webpack
This is the bundling software that bundles all code into different files. Dependencies are:
- webpack
- webpack-cli
- webpack-dev-server
- HtmlWebpackPlugin
