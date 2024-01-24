
The FxPortal Bridge is the newest method of transferring assets between Polygon and Ethereum. FxPortal allows bridging for any ERC standard token without the need for mapping prior. The FxPortal contracts are flexible and allow for custom implementation of bridges using the Fx Base contracts.

The two contracts that FxPortal uses are the FxRoot and the FxChild, deployed on respective chains. These contracts facilitate communication via the data tunnel mechanism.

FxChild and FxRoot are the main contracts on which FxPortal works. It calls and passes data to user-defined methods on the other chain without any mapping using the state sync mechanism. To use the deployed main contracts, you can implement FxPortal's base contracts in the smart contracts you deploy - FxBaseRootTunnel and FxBaseChildTunne. By building on these contracts, your deployed contracts will be able to communicate with each other using the data tunnel mechanism.


### From Ethereum → Polygon[​](https://wiki.polygon.technology/docs/pos/design/bridge/l1-l2-communication/fx-portal/#from-ethereum--polygon-1 "Direct link to from-ethereum--polygon-1")

1. Deploy your own ERC721 token on the root chain. You will need this address later.
2. Approve the tokens for transfer by calling the `approve()` function of the root token with the address of the root tunnel and the token ID as the arguments.
3. Proceed to call `deposit()` with the address of the receiver and token ID on the root chain to receive the equivalent child token on the child chain. This will also map the token automatically. Alternatively, you can call `mapToken()` first before depositing.