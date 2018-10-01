var ERC20Token = artifacts.require("./ERC20Token.sol");

contract("ERC20Token", async function(accounts) {
  var instance;
  it("sets initial supply", function() {
    return ERC20Token.deployed()
      .then(function(instanceOfToken) {
        instance = instanceOfToken;
        return instance.totalSupply();
      })
      .then(function(totalSupply) {
        assert.equal(
          totalSupply.toNumber(),
          1000000,
          "sets the total supply to 1000000"
        );
        return instance.balanceOf(accounts[0]);
      })
      .then(function(adminBalance) {
        assert.equal(
          adminBalance.toNumber(),
          1000000,
          "sets admin balance as total supply"
        );
      });
  });

  it("Sets the name,symbol and standard", () => {
    return ERC20Token.deployed()
      .then(function(instanceOfToken) {
        instance = instanceOfToken;
        return instance.name();
      })
      .then(function(name) {
        assert.equal(name, "ERC Token");
        return instance.symbol();
      })
      .then(function(symbol) {
        assert.equal(symbol, "ERC");
        return instance.standard();
      })
      .then(function(standard) {
        assert.equal(standard, "ERC Dapp v1.0");
      });
  });

  it("should fail to transfer tokens", () => {
    return ERC20Token.deployed()
      .then(function(instanceOfToken) {
        instance = instanceOfToken;
        return instance.transfer;
      })
      .then(() => {
        instance.transfer(accounts[1], 99999999999);
      })
      .then(() => assert.fail)
      .catch(function(error) {
        assert(error.message.indexOf("revert") >= -1);
      });
  });
});
