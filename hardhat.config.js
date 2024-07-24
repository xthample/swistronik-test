require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: ["0x54C9056a02e6806ecc63ec97f8b0345573FB3Ce1 + {a0ec6f940918552fc694019e5c5a8cf1406a0b5e50251f3b05b22db5e8d20db8}"], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};
