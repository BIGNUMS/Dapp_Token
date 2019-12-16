pragma solidity ^0.5.0;

contract DappToken{
	// Constructor
	// Set the total number od tokens
	// Read the total number of tokens

	uint256 public totalSupply;

	constructor()  public{
		totalSupply = 10000; 	// totalSupply is a state variable means we can access from any where in the contract
	}
}
