import { BuilderSDK } from "builder-sdk";
import { ethers } from "ethers";

const main = async () => {
  const mainnetProvider = ethers.getDefaultProvider("mainnet");
  const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider);

  const { auction, token } = BuilderSDK.connect({
    signerOrProvider: defaultSigner,
    network: 1,
  });

  const auctionContract = "0x43790fe6bd46b210eb27F01306C1D3546AEB8C1b";
  const tokenContract = "0xa45662638E9f3bbb7A6FeCb4B17853B7ba0F3a60";

  const auctionData = await auction.attach(auctionContract).auction();

  console.log("auction data", auctionData);

  const tokenURI = await token
    .attach(tokenContract)
    .tokenURI(auctionData.tokenId);

  console.log("tokenURI", tokenURI);

  const totalSupply = await token.attach(tokenContract).totalSupply();

  console.log("totalSupply", totalSupply);
};

main();
