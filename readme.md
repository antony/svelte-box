![box-img-sm-template](https://user-images.githubusercontent.com/218949/30648843-e3b2e176-9e16-11e7-8ecb-f2e4df8f93e3.png "Svelte")

## SvelteJS Truffle Box

A Truffle box using SvelteJS and Rollup.

### Project Goal

To provide the simplest, cleanest seed for building an Ethereum dapp using [Truffle](http://truffleframework.com/), with the minimum possible dependencies, meaning that beginners and pros a like have the most transparent possible method for developing [Ethereum](https://www.ethereum.org/) contracts.

### Truffle Box

A [truffle box](http://truffleframework.com/boxes/) is a seed project for building a truffle dapp.

### Svelte

[Svelte](https://svelte.technology) was chosen as it is a rich, state-model based, ES6, component framework with very few dependencies, which is nothing more than html, javascript, and css. Once compiled via svelte, there are no clientside dependencies at all - simply vanilla JS.

## Installation

```
truffle unbox antony/svelte-box
```

## Usage

Components are in `src/components/*.html`. Everything else is in the usual place [according to the docs](https://github.com/trufflesuite/truffle-init-default)

Run the testrpc so that you have a blockchain to work with, and deploy your contracts:

```bash
testrpc
truffle deploy
```

Log in to metamask by importing the HD Wallet that testrpc gave you, and do the same for one of the accounts by entering its private key. Then, run the watch task to have the code updated in realtime as you develop:

```bash
truffle compile
npm run watch
```

## Publishing

To produce your production dApp, run the build task:

```bash
npm run build
```

This will publish your completed dApp to the folder `./build`
