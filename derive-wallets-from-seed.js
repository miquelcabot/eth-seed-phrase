const { ethers } = require('ethers');

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

// Export the function
module.exports = deriveWalletsFromSeed;