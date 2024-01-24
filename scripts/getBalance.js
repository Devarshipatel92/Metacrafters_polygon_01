require('dotenv').config();
const { ethers } = require("hardhat");
const nftAddress = ""; 

const networkAddress = 'https://rpc-mumbai.maticvigil.com';
const privateKey = process.env.PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider(networkAddress);
const wallet = new ethers.Wallet(privateKey, provider);

async function main() {

  const nftContract = await ethers.getContractFactory("nft_mint");
  const nft = nftContract.attach(nftAddress);

  console.log("You now have: " + await nft.balanceOf(wallet.address) + " nfts");  
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});