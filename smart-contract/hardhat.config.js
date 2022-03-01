// https://eth-ropsten.alchemyapi.io/v2/rd_97rAA9PQXr-UKwzogz_qxlg--Paic
// 0x539f938D03589cE85Feb8879dA2B9Bc68955d6cD 
// the deployed rinkeby smart contract ^^


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/rd_97rAA9PQXr-UKwzogz_qxlg--Paic', // Alchemy HTTP (API)
      accounts: ['74d3a1154e4312f621e13a0e13094b82565c949423574458461dae95f29ef92b'] // private key from account contract will be deploying from
    }
  }
}
