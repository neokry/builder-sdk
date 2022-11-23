import { Signer, providers } from "ethers";
import { getContract, GetContractResult } from "@wagmi/core";
import { AuctionABI, TokenABI } from "./abis";

export type SDKOptions = {
  signerOrProvider: Signer | providers.Provider;
};

export class BuilderSDK {
  static connect({ signerOrProvider }: SDKOptions) {
    return {
      token: ({
        address,
      }: {
        address: string;
      }): GetContractResult<typeof TokenABI> => {
        return getContract({
          address,
          abi: TokenABI,
          signerOrProvider: signerOrProvider,
        });
      },
      auction: ({
        address,
      }: {
        address: string;
      }): GetContractResult<typeof AuctionABI> => {
        return getContract({
          address,
          abi: AuctionABI,
          signerOrProvider: signerOrProvider,
        });
      },
    };
  }
}
