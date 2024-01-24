const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../FXRootContractAbi.js");

require('dotenv').config();
const {nftAddress} = require("../nft_db/contractAddress.js");

const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';

const networkAddress = 'https://ethereum-goerli.publicnode.com';
const privateKey = process.env.PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider(networkAddress);
const wallet = new ethers.Wallet(privateKey, provider);

async function main() {

  // const nftContract = await hre.ethers.getContractAt(nftABI, nftAddress);
  const nftContract = await ethers.getContractFactory("nft_mint");
  const nft = nftContract.attach(nftAddress);
  const fxContract = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // Get the signer instance
  const [signer] = await ethers.getSigners();

  // const approveTx = await nftContract.approve(fxRootAddress, 5);
  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();

  console.log('Approval confirmed');

  const nftIds = [0, 1, 2, 3, 4];


  for (let i = 0; i < nftIds; i++) {
    const depositTx = await fxContract.connect(signer).deposit(
      nft.address,
      wallet.address,
      nftIds[i],
      '0x6566'
    );

    await depositTx.wait();
  }

  console.log("NFTs deposited");

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});