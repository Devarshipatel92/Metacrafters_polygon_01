## Introduction to NFT Transfer 

Welcome to the README file for our groundbreaking NFT project, where I are set to revolutionize the NFT collection contract by deploying a unique collection on the Ethereum blockchain. Our primary goal is to enhance accessibility, boost demand, and reduce gas fees by migrating the project to Polygon, a layer 2 scaling solution for Ethereum.

This readme will guide you through the deployment of the NFT collection on Ethereum, the seamless mapping to Polygon, and the secure transfer of assets using the Polygon Bridge. Additionally, I'll introduce an exciting twist to the project by incorporating an image generation tool, adding a dynamic and creative element to our NFT collection.


## Contract Introduction 
```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "erc721a/contracts/ERC721A.sol";

contract nft_mint is ERC721A{

    // Maximum number of tokens that can be minted

    uint256 public maxQuantity = 5;

    constructor() ERC721A("Metacrafters", "NTB") {}

    // Function to mint NFT which only owner can perform

    function mint(uint256 quantity) external payable {
        require(totalSupply() + quantity <= maxQuantity ,"Hi! You can not mint more than 5");
        _mint(msg.sender, quantity);
    }

    // Override the baseURI function to return the base URL for the NFTs

    function _baseURI() internal pure override returns (string memory){
        return "https://gateway.pinata.cloud/ipfs/QmZvFbQhYbcYNFqUBwCXqKajEBKebVMfcMbgV892xzdnMS/";
    }

    // Return the URL for the prompt description
    
    function promptDescription() external pure returns (string memory) {
        return "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto.";
    }
}
```

A Smart contract, titled "nft_mint," is designed to facilitate the creation and management of a non-fungible token (NFT) collection on the Ethereum blockchain. The contract inherits from the ERC721A standard, providing the necessary functionalities for creating unique and tradable tokens.

The contract includes a constructor that sets the name and symbol of the NFT collection to "Metacrafters" and "NTB," respectively. Additionally, it specifies a maximum quantity of tokens that can be minted, limiting it to 5 tokens.

The primary minting function, accessible only to the owner, allows the creation of new NFTs by specifying the desired quantity. This function checks whether the total supply after minting does not exceed the maximum quantity, and if the condition is met, it mints the requested number of tokens to the address of the caller.

To enhance the user experience, the contract overrides the _baseURI function from the ERC721A standard. This function defines the base URL for the NFTs, providing a consistent starting point for the token metadata.


Furthermore, the contract includes an additional function, promptDescription, which returns a string describing a prompt related to Naruto, a popular Japanese manga series. This demonstrates the flexibility of incorporating extra functionalities beyond the standard ERC721 features.

## Why I use Pinata Cloud?

Pinata Cloud, like other IPFS pinning services, leverages the decentralized nature of IPFS. This means that the metadata associated with the NFTs is not stored on a single server but is distributed across a network of nodes, enhancing resilience and reducing the risk of a single point of failure.

## Installation & Deployment Guidance

```
2. Deploying a Contract

# Deploy the contract using the Deployed.js script on the Goerli network
npx hardhat run scripts/Deployed.js --network goerli

2. Running the Minted.js Script

# Run the Minted.js script with the updated contract address on the Goerli network
npx hardhat run scripts/Minted.js --network goerli

3. Establishing FxPortal Bridge
Follow the documentation or instructions for setting up the FxPortal Bridge between Ethereum and Polygon.

4. Executing the Deposited.js Script

# Run the Deposited.js script with the updated information on the Goerli network
npx hardhat run scripts/Deposited.js --network goerli
```

