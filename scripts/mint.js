// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");
const nftContractJSON = require("../artifacts/contracts/nft_mint.sol/nft_mint.json");
const {nftAddress} = require("../nft_db/contractAddress.js");
require('dotenv').config();

const nftABI = nftContractJSON.abi;

async function main() {

  const nft = await hre.ethers.getContractAt(nftABI, nftAddress);

  const tx = await nft.mint(5);
  await tx.wait();

  console.log("Minted 5 NFTs");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});