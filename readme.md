![box-img-sm-template](https://user-images.githubusercontent.com/218949/30648843-e3b2e176-9e16-11e7-8ecb-f2e4df8f93e3.png "Svelte")

## SvelteJS Truffle Box

A Truffle box using SvelteJS and Rollup.

This box contains everything you need to start building a smart-contract app.

### Project Goal

To provide the simplest, cleanest seed for building an Ethereum dapp using [Truffle](http://truffleframework.com/), with the minimum possible dependencies, meaning that beginners and pros a like have the most transparent possible method for developing [Ethereum](https://www.ethereum.org/) contracts.

### Truffle Box

A [truffle box](http://truffleframework.com/boxes/) is a seed project for building a truffle dapp.

### Why Svelte?

[Svelte](https://svelte.technology) was chosen as it is a rich, state-model based, ES6, component framework with very few dependencies, which is nothing more than html, javascript, and css. Once compiled via svelte, there are no clientside dependencies at all - simply vanilla JS.

[Svelte](https://svelte.technology) is basically a simple DSL (domain specific language) for building a reactive, stateful, dependency-free web-application in pure javascript.

Additionally, the [Svelte](https://svelte.technology) API is so simple and well-designed, you can learn the whole thing from scratch in less than an hour!

## Setting up

1. Install truffle and an ethereum client. For local development, try Ethereum TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Download box.
    ```javascript
    truffle unbox antony/svelte-box
    ```

4. Run an Ethereum RPC. For simplicity and development we will be using Ethereum TestRPC.
    ```javascript
    testrpc
    ```

7. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

You're ready to go!

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

## Testing

Testing works much the same way as it does in any web-application, with an additional `truffle test` command for testing smart contracts.

Be sure you've compiled your contracts before running the tests, or you'll get file not found errors.

    ```javascript
    npm run test // for dApp tests
    truffle test // for contract tests
    ```

## Releasing

To build the application for production, use the build command. A production build will be in the build folder.

    ```javascript
    npm run build
    ```

## FAQ

* __Why is there both a truffle.js file and a truffle-config.js file?__

    Truffle requires the truffle.js file be named truffle-config on Windows machines. Feel free to delete the file that doesn't correspond to your platform.