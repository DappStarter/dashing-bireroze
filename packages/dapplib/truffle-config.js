require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note meadow comic grace nature teach slogan'; 
let testAccounts = [
"0x0a64e61f57584b62ef9dcd18e29fcc23a17e59fa1dff6304656f2d7f0017df2e",
"0x7934b4e00f39573a701657da10a7223aefe750286ff89b09b37ca794bf18f7c8",
"0x1e2d77ee785689dfd71dcde824b49b945e20d1f16fdf869318b4dce3d4ae4bf6",
"0xddf366dac915947fbe8f2b9e617f84c84fcc0830fff36f527d87d53205a955ef",
"0xb15af4ffe889f73b47f20c6c0050b4def1a7c688eb6bb8a5e0c0b3e5dd37f04e",
"0x83631d8d323df9c1f6eba39403f4eef1341a8d16646c3cd425db8e806ac8b7f9",
"0x836d23a5bc372a7845851ec489b2719c217cfa4a74d6574ebcbee58d229b3db3",
"0x460774359e457dcdd01a9cab5b22f07ca1c99d08515dc9d2a02f0235e95726e4",
"0xcc5a7585ca81f483c13763950690ad6eea0f6e3f1dea76809d22826a8294edde",
"0x6e39a47461db5e33b7ea6ed68c0feeb1e9ce05910056f13d2cc99cc7d7db3bb1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
