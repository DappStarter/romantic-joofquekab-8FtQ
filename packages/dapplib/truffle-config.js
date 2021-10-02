require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember evil hunt crime front sketch'; 
let testAccounts = [
"0x599d9cd71cecad0e6c444de130280200842268e515ddebf234741b675c4715db",
"0x0d8949b3fc5754b4034bb29482e61209806d90618e510a909077f8b477276d82",
"0xc5c532a7e4ebb9fc75e131924b24f053b69da1efd17ba2b87e98893e5160fed2",
"0xca43b066540fce6f219df9f8726f9fc6b528d6fd6f2af806e996aa86d163d006",
"0x1ff67036bc766b2c6cfb3515ace7b8100c7607ddd7231eb110faec37c45ca1ae",
"0xe8e390774ba23dd603a378a56f9156ca18906d7c1b13a3f0602a26b532c44726",
"0x7a616493bc90f3856b5213ea34f1517a6f3e22e57d50c91caf377608e16ce8d1",
"0x507affe274d47d050505fe05aed15ecb38de4a32b4643f54e7107befb8ae180f",
"0x226a4e5f6378cb80d45a580a814354d50cf8f7762ccd55308a0a3537cb8b94f7",
"0x39fccda061ac5bf3c522fb547e4651e80b44e0bd96b4c9cf182cd9ed424cab17"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

