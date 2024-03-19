const { ethers } = require('ethers');
const deriveWalletsFromSeed = require('./derive-wallets-from-seed');

// Generate a random wallet and then a seed phrase from it
const randomWallet = ethers.Wallet.createRandom();
const mnemonic = randomWallet.mnemonic.phrase;
console.log("Seed Phrase:", mnemonic);

// Derive the first 10 wallets and print their addresses and private keys
deriveWalletsFromSeed(mnemonic).then(wallets => {
  wallets.forEach((wallet, index) => {
    console.log(`Account ${index + 1}: Address = ${wallet.address}, Private Key = ${wallet.privateKey}`);
  });
});
