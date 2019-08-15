{#if connected}
<div class="alert alert-success">
  <h4>Good to Go!</h4>
  <p>Your Truffle Box is installed and ready.</p>
</div>
{:else}
<div class="alert alert-danger">
  <h4>Not connected</h4>
  <p>Could not connect to the blockchain!<p>
  <p>Check that:</p>
  <ul>
    <li>Your <a href="https://metamask.io/" target="_blank">metamask</a> settings are correct.</li>
    <li>You are running an ethereum <a href="https://www.npmjs.com/package/truffle-testrpc" target="_blank">testrpc</a>.</li>
  </ul>
</div>
{/if}

<script>
  export let connected = false
</script>