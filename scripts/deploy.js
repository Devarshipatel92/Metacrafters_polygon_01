const hre = require("hardhat");
const fs = require('fs');

async function main() {

  const NFT = await hre.ethers.getContractFactory("nft_mint");
  const nft = await NFT.deploy();
  await nft.deployed();

  console.log("NFT Deploy Contract Address:- ", nft.address);

  fs.writeFileSync('nft_db/contractAddress.js', `
    module.exports = {nftAddress : "${nft.address}"}
  `)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
