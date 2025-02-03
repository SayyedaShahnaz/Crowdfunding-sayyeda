// Import Hardhat Runtime Environment
const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {
  // Get the contract to deploy using the correct contract name (CrowdFunding)
  const [deployer] = await hre.ethers.getSigners(); // Get the signer (wallet)

  console.log("Deploying contracts with the account:", deployer.address);
  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");

  // Deploy the contract
  const crowdfunding = await CrowdFunding.deploy({gasLimit: 2100000 });

  // Wait for the contract to be deployed
  await crowdfunding.deployed();

  // Log the deployed contract address
  console.log("Contract deployed to:", crowdfunding.address);
}

// Execute the main function and handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
