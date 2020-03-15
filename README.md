# The Coffee Supply Chain Project

## UML diagrams:

**_Activity Diagram_:**

![](./UML/Activity%20Diagram.png)

**_Sequence Diagram_:**

![](./UML/Sequence%20Diagram.png)

**_State Diagram_:**

![](./UML/State%20Diagram.png)

**_Classes (Data Model) Diagram_:**

![](./UML/Data%20Model%20Diagram.png)

### Libraries Used:

- truffle-hdwallet-provider:
  I used it to test the project with Rinkeby and Metamask

### IPFS:

I did not use IPFS.

## The deployed on the Ethereum RINKEBY test network output:

- Transaction ID: [0xf633b2143c5f46e6e761b759fc2e2ee4682d60c0211f9ae28209c8a2764c5a8c](https://rinkeby.etherscan.io/address/0x00ac3daf37c908c884fe2cb25191eec1c76ec60a)
- Contract address: [0x00AC3DAf37c908C884fE2cB25191eEc1C76EC60a](https://rinkeby.etherscan.io/tx/0xf633b2143c5f46e6e761b759fc2e2ee4682d60c0211f9ae28209c8a2764c5a8c)

### The Full Output:

```bash
Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        6133286
   > block timestamp:     1584141712
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.17582081
   > gas used:            223594
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00223594 ETH

   -------------------------------------
   > Total cost:          0.00223594 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > block number:        6133288
   > block timestamp:     1584141730
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.17255912
   > gas used:            298821
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00298821 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > block number:        6133289
   > block timestamp:     1584141744
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.16957091
   > gas used:            298821
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00298821 ETH


   Deploying 'RetailerRole'
   ------------------------
   > block number:        6133290
   > block timestamp:     1584141758
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.16658246
   > gas used:            298845
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00298845 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > block number:        6133291
   > block timestamp:     1584141772
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.16359425
   > gas used:            298821
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00298821 ETH


   Deploying 'SupplyChain'
   -----------------------
   > block number:        6133292
   > block timestamp:     1584141790
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.14760292
   > gas used:            1599133
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01599133 ETH

   -------------------------------------
   > Total cost:          0.02794441 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.03018035 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xfe6fefec96fd86cc5f466260b175ebea1b5a009c5415df49ae7b923f625d401e
   > Blocks: 0            Seconds: 9
   > contract address:    0x48CA301140a4112231b10331eD5F61407A6E0c2d
   > block number:        6133293
   > block timestamp:     1584141822
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.17567081
   > gas used:            238594
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00238594 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00238594 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x442444604d7ccd3b7a14fe8b0a0a2df0c23233fdec14526392f67ac98b991ce6
   > Blocks: 1            Seconds: 5
   > contract address:    0x4131E5C6b28cC139b6ba890E8b249ccD597c9505
   > block number:        6133295
   > block timestamp:     1584141853
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.17210912
   > gas used:            313821
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313821 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0xf472ba16a4c460191bb78aced39b655f290e31b79b68a4b85ab17fe9dfbb2851
   > Blocks: 1            Seconds: 13
   > contract address:    0xD211EA33F0402f44e0152aCdC25189FfcdD30ac2
   > block number:        6133297
   > block timestamp:     1584141883
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.16897091
   > gas used:            313821
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313821 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x64b6c525c5909088d0492069c81b8f71ac8d8059fedb78a57f269793e0174c17
   > Blocks: 1            Seconds: 17
   > contract address:    0xF86e344d2Bb152c2884797136CbDf30C04047d4c
   > block number:        6133299
   > block timestamp:     1584141913
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.16583246
   > gas used:            313845
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313845 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0xb229a2e6a1e6f0d3d6aec7ffa9720d1fa3433a0f7a1b5b25638272ccec050daf
   > Blocks: 0            Seconds: 13
   > contract address:    0x5C77225540D9C68805e65B21B809389bf5f23AC0
   > block number:        6133301
   > block timestamp:     1584141943
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.16269425
   > gas used:            313821
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00313821 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xf633b2143c5f46e6e761b759fc2e2ee4682d60c0211f9ae28209c8a2764c5a8c
   > Blocks: 1            Seconds: 14
   > contract address:    0x00AC3DAf37c908C884fE2cB25191eEc1C76EC60a
   > block number:        6133303
   > block timestamp:     1584141973
   > account:             0x0470989053748dFF261E81FaE29B7234a3607258
   > balance:             0.14625292
   > gas used:            1644133
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01644133 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02899441 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.03138035 ETH
```

## Other Info:

- Truffle v5.1.13 (core: 5.1.13)
- Solidity - 0.4.24 (solc-js)
- Node v13.2.0
- Web3.js v1.2.1
