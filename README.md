# MIN

This is my attempt at building a Single Page Application (SPA).

> :warning: This is just using old-school vanilla JS with no JS framework.

It's been a while since I built any web frontend or UI.

This should be fun! :tumbler_glass:

## Prerequisites

- [nvm, for installing specific Node runtime version](https://github.com/nvm-sh/nvm)
- [Node, see `.nvmrc` for version details](.nvmrc)

```sh
# install dev dependencies
$ npm install -D
```

## Local setup

Many of the commands here are essentially set up on package.json under the `scripts` section.

### Spinning up the web server

You can spin up the web server to view the web app.

```sh
# remove the `&` at the end if you prefer not to run the command in the background.
$ npm run server&

$ open localhost:5000
```


### Lint

We use [Prettier](https://prettier.io/) for linting and formatting checks.

```sh

$ npm run lint
```

### Testing

This is currently a headless browser test with [Puppeteer]().

The test assumes the web server is up at http://localhost:5000

```sh
$ npm run test
```
