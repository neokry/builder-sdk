# BuilderSDK

The easiest way to build on Nouns Builder.

Builder SDK is a Typescript library that provides type safe interactions and data fetching for Nouns Builder contracts.

## Getting started

```bash
yarn add @buildersdk/sdk
```

```ts
import { BuilderSDK } from "@buildersdk/sdk";

const { auction, token } = BuilderSDK.connect({
  signerOrProvider: mainnetProvider,
});

const auctionContract = auction({ address: auctionAddress });
const tokenContract = token({ address: tokenAddress });

const auctionData = await auctionContract.auction();
const tokenURI = await tokenContract.tokenURI(auctionData.tokenId);
```

## Examples

The following examples are provided in the examples folder of this repo.

- `with-next`
- `with-node`

## Running examples

To run an example locally, install dependencies.

```bash
yarn install
```

Then go into an example directory, eg: with-next.

```bash
cd examples/with-next
```

Then run the dev script.

```bash
yarn dev
```
