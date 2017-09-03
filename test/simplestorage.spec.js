'use strict'

const SimpleStorage = artifacts.require("./SimpleStorage.sol")

contract('SimpleStorage', function(accounts) {
  let instance

  before(async () => {
    instance = await SimpleStorage.deployed()
  })

  it('stores given value', async () => {
    await instance.set(89, {
      from: accounts[0]
    })

    const data = await instance.get.call()
    assert.equal(data, 89, "The value 89 was not stored.")
  })
})
