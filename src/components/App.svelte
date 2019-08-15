<div class="container">
  <div class="row">
    <div class="col-8 offset-2">
      <h1 class="masthead text-center text-dark">Truffle Box</h1>
      <h4 class="text-center text-primary">Skeleton SvelteJS truffle box</h4>
    
      <Information connected={connected}></Information>
    
      <div class="alert alert-secondary">
        <h4>Smart Contract Example</h4>
        <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
        <p>Try changing the value stored on <strong>line 71</strong> of <em>src/components/App.html</em>.</p>
        <p>The stored value is: {storageValue}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .masthead {
    margin-top: 3em;
  }
</style>

<script>
  import Information from './Information.svelte'
  import SimpleStorageContract from '../../build/contracts/SimpleStorage.json'
  import loadWeb3 from '../utils/web3'
  import shoelace from 'shoelace-css/dist/shoelace.css'
  import contract from 'truffle-contract'
  import { onMount } from 'svelte'

  let storageValue
  let connected = false
  let web3

  onMount(async () => {
    const instance = await loadWeb3()
    window['web3'] = web3 = instance
    instantiateContract()
  })

  function instantiateContract () {
    /*
      * SMART CONTRACT EXAMPLE
      *
      * Normally these functions would be called in the context of a
      * state management library, but for convenience I've placed them here.
      */

    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    let simpleStorageInstance

    // Get accounts.
    web3.eth.getAccounts((error, accounts) => {
      if (error) { throw error }

      simpleStorage.deployed().then(instance => {
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, { from: accounts[0] })
      }).then(result => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call({ from: accounts[0] })
      }).then(result => {
        // Update state with the result.
        connected = true
        storageValue = result.c[0]
      })
    })
  }
</script>