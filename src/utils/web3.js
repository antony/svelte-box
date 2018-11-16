import { default as Web3 } from 'web3'

export default new Promise((resolve) => {
  let web3 = window.web3

  if (typeof web3 !== 'undefined') {
    console.warn(
      'Using web3 detected from external source.' +
      ' If using MetaMask, see the following link.' +
      ' Feel free to delete this warning. :)' +
      ' http://truffleframework.com/tutorials/truffle-and-metamask'
    )

    resolve(new Web3(web3.currentProvider))
  } else {
    console.warn(
      'No web3 detected. Falling back to http://127.0.0.1:8545.' +
      ' You should remove this fallback when you deploy live, as it\'s inherently insecure.' +
      ' Consider switching to Metamask for development.' +
      ' More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
    )
    resolve(new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545')))
  }
})
