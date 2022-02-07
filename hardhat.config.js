require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    testnet: {
      url: "https://rpc.api.moonbase.moonbeam.network",
      // url: "https://moonbeam-alpha.api.onfinality.io/public",
      chainId: 1287,
      accounts: [process.env.PK],
    },
    // moonriver: {
    //   url: "https://rpc.moonriver.moonbeam.network",
    //   chainId: 1285,
    //   accounts: [process.env.PK],
    // },
    // moonbeam: {
    //   url: "https://rpc.api.moonbeam.network",
    //   chainId: 1284,
    //   accounts: [process.env.PK],
    // },
  },
  etherscan: {
    apiKey: {
      moonbaseAlpha: process.env.MOONSCAN_API_KEY,
      // moonriver: process.env.MOONSCAN_API_KEY,
      // moonbeam: process.env.MOONSCAN_API_KEY,
    }
  }
};
