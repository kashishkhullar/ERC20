var ERC20Token = artifacts.require("./ERC20Token.sol");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.

  deployer.deploy(ERC20Token, 1000000);
};
