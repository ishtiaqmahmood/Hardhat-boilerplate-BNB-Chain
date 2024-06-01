require('@nomiclabs/hardhat-ethers');
require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { mnemonic, bscscanApiKey, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.22",
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: bscscanApiKey
  }
};
