# React Webpack Skeleton

[![CircleCI](https://circleci.com/gh/fokye/react-webpack-skeleton.svg?style=svg)](https://circleci.com/gh/fokye/react-webpack-skeleton)

This project is a reference implementation for a modern React app.
It is intended to be a starting point for a *production* application
with reasonable defaults.

## Features

 * ESLint configuration suitable for production use.

 * CSS modules.

 * Modern JavaScript using Babel with Stage 2 features active.

 * Version-locked dependencies with lockfiles for predictability.

   * `.nvmrc` for [`nvm`](https://github.com/creationix/nvm) to indicate the Node version desired for this project.
   * `yarn.lock` for dependencies installed via [`yarn`](https://yarnpkg.com/).

 * Integrated vulnerability scanning via [snyk](https://snyk.io/).

 * CircleCI 2.0 integration for lightning-fast builds.

 * Testing with Mocha/Chai/Enzyme/Sinon.

## Getting Started

 * You first need to run `yarn install` to install dependencies.

 * You can run `yarn start` to launch a development server for the app, accessible via `http://localhost:8080`.

 * You can run `yarn build` to trigger a one-off build.

   * If `NODE_ENV=production` is set, then the build will be minified.

 * Run `yarn run security` to scan dependencies for vulnerabilities.

   * Requires [Snyk authentication](https://snyk.io/docs/using-snyk) and Internet access.

## Core Concepts

The **index.html** and **index.css** files in the root of this project are considered static.
Core application code lives within the **src** directory. Within:

 * The app's entry point is **index.js**.

 * Core test setup code lives in **spec.setup.js**.

 * React components live within the **components** directory.

   * Individual React components live within their own directory, containing:

     * **index.js** The component itself.

     * **styles.css** The CSS module responsible for styling the component.

     * **spec.js** The tests for the component.

     * **strings.js** I18n strings for the component.

     * …and any other incidental files needed by the component.

### I18n

A **strings.js** file should export a function with the signature `t(key: string, ...more): string`.

Components should not contain text directly. Instead, components should use this I18n helper to request
text. For example:

    // Bad. The string "Submit" is hard-coded.
    <button>Submit</button>
    
    // Good. The string comes from an I18n helper.
    <button>{t('submit')}</Button>

