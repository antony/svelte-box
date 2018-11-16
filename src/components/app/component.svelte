<svelte:window on:load="initWeb3()" />

<div class="container">
  <div class="row">
    <div class="col-8 offset-2">
      <h1 class="masthead text-center text-dark">Truffle Box</h1>
      <h4 class="text-center text-primary">Skeleton SvelteJS truffle box</h4>
    
      <Information connected="{storageValue}"></Information>
    
      <div class="alert alert-secondary">
        <h4>Smart Contract Example</h4>
        <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
        <p>Try changing the value stored on <strong>line 71</strong> of <em>src/components/app/component.html</em>.</p>
        <p>The stored value is: { storageValue }</p>
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
  import Information from '../information/component.svelte'
  import SimpleStorageContract from '../../../build/contracts/SimpleStorage.json'
  import getWeb3 from '../../utils/web3'
  import shoelace from 'shoelace-css/dist/shoelace.css'
  import contract from 'truffle-contract'

  export default {
    components: {
      Information
    },

    methods: {
      initWeb3 () {
        getWeb3.then(web3 => {
          this.set({ web3 })
          window['web3'] = web3
          this.instantiateContract()
        })
      },

      instantiateContract () {
        /*
          * SMART CONTRACT EXAMPLE
          *
          * Normally these functions would be called in the context of a
          * state management library, but for convenience I've placed them here.
          */
    
        const { web3 } = this.get()
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
            return this.set({ connected: true, storageValue: result.c[0] })
          })
        })
      }
    }
  }
</script>