const Historia = artifacts.require("Historia");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Historia", function (accounts) {
  it("should assert true", async function () {
    await Historia.deployed();
    return assert.isTrue(true);
  });
  it("should give the deployer all the 1M tokens", async function(){
    const instance = await Historia.deployed();
    const raw = await instance.balanceOf(accounts[0]);
    const balance = await web3.utils.fromWei(raw);
    assert.equal(balance, 1000000, "Balance should be 1M for token creator");
  }) 
});
