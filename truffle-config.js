const HDWallet = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => {
        return new HDWallet(
          "rate team mammal oppose expire beef limit glide flame dust gauge envelope",
          "https://rinkeby.infura.io/v3/90eab3ab1162490bb3bc75de9643c995"
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};
