/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-toolbox');
require("@nomicfoundation/hardhat-verify");
require('dotenv').config(); // Ensure dotenv is required to access environment variables

module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'sepolia', // Change default network to Sepolia
  networks: {
    hardhat: {}, // Local testing environment
    sepolia: {
      url: 'https://sepolia.infura.io/v3/f8ee28a40853409fb70bdad7f393d80d', // RPC URL for Sepolia network
      accounts: [`0xa8a9663df3995eab85c12d0274020153b659964bcf06ce9512d8d2e3ba6b5dfb`], // Private key from your environment variable
      chainId: 11155111, // Chain ID for Sepolia
     
    },
  },
};
