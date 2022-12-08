import { BuilderSDK } from "@buildersdk/sdk";
import { ethers } from "ethers";

const main = async () => {
  const mainnetProvider = ethers.getDefaultProvider("mainnet");

  const { auction, token, manager, governor } = BuilderSDK.connect({
    signerOrProvider: mainnetProvider,
  });

  const managerAddress = "0xd310a3041dfcf14def5ccbc508668974b5da7174";
  const auctionAddress = "0x43790fe6bd46b210eb27F01306C1D3546AEB8C1b";
  const tokenAddress = "0xa45662638E9f3bbb7A6FeCb4B17853B7ba0F3a60";

  const managerContract = manager({ address: managerAddress });
  const auctionContract = auction({ address: auctionAddress });
  const tokenContract = token({ address: tokenAddress });

  const auctionData = await auctionContract.auction();

  console.log("auction data", auctionData);

  const tokenURI = await tokenContract.tokenURI(auctionData.tokenId);

  console.log("tokenURI", tokenURI);

  const totalSupply = await tokenContract.totalSupply();

  console.log("totalSupply", totalSupply);

  const addresses = await managerContract.getAddresses(tokenAddress);

  console.log("token addresses", addresses);

  const governorContract = await governor({ address: addresses.governor });

  const proposal = await governorContract.getProposal(
    "0x2c6cc20b528a09122d8e242fc05c94883c80d76a870b244162d50da6a9763e86"
  );

  console.log("proposal", proposal);
};

main().then(() => process.exit());
