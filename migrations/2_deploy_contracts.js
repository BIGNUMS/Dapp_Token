const Dapptoken = artifacts.require("DappToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Dapptoken);
};
