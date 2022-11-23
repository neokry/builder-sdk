import { TokenABI, BuilderSDK } from "@buildersdk/builder-sdk";
import { useContractRead } from "wagmi";
import { BigNumber, getDefaultProvider, Wallet } from "ethers";
import { useIsMounted } from "../hooks/useIsMounted";
import { Fragment } from "react";
import { GetServerSidePropsResult, InferGetServerSidePropsType } from "next";

const auctionContract = "0x43790fe6bd46b210eb27F01306C1D3546AEB8C1b";
const tokenContract = "0xa45662638E9f3bbb7A6FeCb4B17853B7ba0F3a60";

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    auctionData: any;
  }>
> => {
  const mainnetProvider = getDefaultProvider("mainnet");
  const { auction } = BuilderSDK.connect({ signerOrProvider: mainnetProvider });
  const { tokenId, highestBid, highestBidder, endTime, startTime } =
    await auction({
      address: auctionContract,
    }).auction();

  return {
    props: {
      auctionData: {
        tokenId: tokenId.toHexString(),
        highestBid: highestBid.toHexString(),
        highestBidder,
        endTime,
        startTime,
      },
    },
  };
};

export default function Home({
  auctionData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isMounted = useIsMounted();

  const { data: tokenURI } = useContractRead({
    abi: TokenABI,
    address: tokenContract,
    functionName: "tokenURI",
    args: [BigNumber.from(35)],
  });

  const { data: totalSupply } = useContractRead({
    abi: TokenABI,
    address: tokenContract,
    functionName: "totalSupply",
  });

  if (!isMounted) return <Fragment />;

  return (
    <div>
      <div>Auction Data (SSR)</div>
      <div>{JSON.stringify(auctionData)}</div>

      <div>TokenURI</div>
      <div>{tokenURI}</div>

      <div>Total supply</div>
      <div>{totalSupply?.toHexString()}</div>
    </div>
  );
}
