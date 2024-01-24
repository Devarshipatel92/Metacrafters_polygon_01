const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i = 0; i < 5; i++) {

  // Creates a JSON object for each NFT
  const json = {
      name: `${i}`,
      description: `Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto.`,
      image: `https://gateway.pinata.cloud/ipfs/QmZvFbQhYbcYNFqUBwCXqKajEBKebVMfcMbgV892xzdnMS/${i}.jpg`
  };

  // Writes the JSON object to a file
  fs.writeFileSync(
    path.join(__dirname, 'nftCollection', String(i)),
    JSON.stringify(json)
  );
}
