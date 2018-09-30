var ERC20Token = artifacts.require("./ERC20Token.sol");

contract("ERC20Token", function(accounts) {
  it("should assert true", function(done) {
    var e_r_c20_token = ERC20Token.deployed();
    assert.isTrue(true);
    done();
  });

  it("sets the total supply", async () => {
    var e_r_c20_token = await ERC20Token.deployed();

    var totalSupply = await e_r_c20_token.totalSupply();

    console.log();

    assert.equal(
      totalSupply.toNumber(),
      1000000,
      "asserts that the total supply is equal"
    );
  });
});
