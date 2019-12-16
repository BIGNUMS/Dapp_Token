// Mocha - testing framework
// chai - social library 

/* because, smart contract should be immutable - it should be bug free 
   before upload on the blockchain, if itsn't we have to redeploy new one.
   so that TEST file is used before the actual deployment */

var DappToken = artifacts.require("./Dapptoken.sol");

contract('DappToken', function(accounts) {

	it('set the total supply upon deployment', function(){

		return DappToken.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(), 10000, 'sets the total supply to 10,000'); //chai social library
		});
	});
})
