const { ethers } = require('ethers');

// Generate a random wallet and then a seed phrase from it
const randomWallet = ethers.Wallet.createRandom();
const mnemonic = randomWallet.mnemonic.phrase;
console.log("Seed Phrase:", mnemonic);

// Function to derive wallets from the seed phrase
async function deriveWalletsFromSeed(seedPhrase) {
  const wallets = [];

  for (let i = 0; i < 10; i++) {
    // HD Wallet path. The index i changes for each account.
    const path = `m/44'/60'/0'/0/${i}`;
    const wallet = ethers.Wallet.fromMnemonic(seedPhrase, path);

    // Store each wallet's address and private key
    wallets.push({
      address: wallet.address,
      privateKey: wallet.privateKey
    });
  }

  return wallets;
}

// Derive the first 10 wallets and print their addresses and private keys
deriveWalletsFromSeed(mnemonic).then(wallets => {
  wallets.forEach((wallet, index) => {
    console.log(`Account ${index + 1}: Address = ${wallet.address}, Private Key = ${wallet.privateKey}`);
  });
});
