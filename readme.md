## SvelteJS Truffle Box

A Truffle box using SvelteJS and Rollup.

### Project Status

Working, but a work in progress still.

### Project Goal

To provide the simplest, cleanest seed for building an Ethereum dapp using [Truffle](http://truffleframework.com/), with the minimum possible dependencies, meaning that beginners and pros a like have the most transparent possible method for developing [Ethereum](https://www.ethereum.org/) contracts.

### Truffle Box

A [truffle box](http://truffleframework.com/boxes/) is a seed project for building a truffle dapp.

### Svelte

[Svelte](https://svelte.technology) was chosen as it is a rich, state-model based, ES6, component framework with very few dependencies, which is nothing more than html, javascript, and css. Once compiled via svelte, there are no clientside dependencies at all - simply vanilla JS.

## Installation

```
truffle unbox svelte-box
```

## Usage

Components are in `src/components/*.html`. Everything else is in the usual place [according to the docs](https://github.com/trufflesuite/truffle-init-default)

Run the watch task to have the code updated in realtime as you develop:

```javascript
npm run watch
```

## Publishing

To produce your production dApp, run the build task:

```javascript
npm run build
```

This will publish your completed dApp to the folder `./build`