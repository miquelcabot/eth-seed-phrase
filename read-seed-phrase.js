const readline = require('readline');
const deriveWalletsFromSeed = require('./derive-wallets-from-seed');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to read input using a promise
function question(query) {
  return new Promise((resolve) => {
    rl.question(query, (input) => {
      resolve(input);
      rl.close();
    });
  });
}

// Main function to generate and print the addresses and private keys
async function main() {
  // Read seed phrase from console
  const seedPhrase = await question('Enter the seed phrase: ');

  const wallets = await deriveWalletsFromSeed(seedPhrase);

  wallets.forEach((wallet, index) => {
    console.log(`Account ${index + 1}: Address = ${wallet.address}, Private Key = ${wallet.privateKey}`);
  });
}

// Run the main function
main().catch(console.error);