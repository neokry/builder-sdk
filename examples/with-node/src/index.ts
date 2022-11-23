import { BuilderSDK } from "@buildersdk/builder-sdk";
import { ethers } from "ethers";

const main = async () => {
  const mainnetProvider = ethers.getDefaultProvider("mainnet");

  const { auction, token } = BuilderSDK.connect({
    signerOrProvider: mainnetProvider,
  });

  const auctionAddress = "0x43790fe6bd46b210eb27F01306C1D3546AEB8C1b";
  const tokenAddress = "0xa45662638E9f3bbb7A6FeCb4B17853B7ba0F3a60";

  const auctionContract = auction({ address: auctionAddress });
  const tokenContract = token({ address: tokenAddress });

  const auctionData = await auctionContract.auction();

  console.log("auction data", auctionData);

  const tokenURI = await tokenContract.tokenURI(auctionData.tokenId);

  console.log("tokenURI", tokenURI);

  const totalSupply = await tokenContract.totalSupply();

  console.log("totalSupply", totalSupply);
};

main().then(() => process.exit());
