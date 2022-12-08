import { Signer, providers } from "ethers";
import { getContract, GetContractResult } from "@wagmi/core";
import { AuctionABI, GovernorABI, ManagerABI, TokenABI } from "./abis";

export type SDKOptions = {
  signerOrProvider: Signer | providers.Provider;
};

export class BuilderSDK {
  static connect({ signerOrProvider }: SDKOptions) {
    const token = ({
      address,
    }: {
      address: string;
    }): GetContractResult<typeof TokenABI> => {
      return getContract({
        address,
        abi: TokenABI,
        signerOrProvider: signerOrProvider,
      });
    };

    const auction = ({
      address,
    }: {
      address: string;
    }): GetContractResult<typeof AuctionABI> => {
      return getContract({
        address,
        abi: AuctionABI,
        signerOrProvider: signerOrProvider,
      });
    };

    const manager = ({
      address,
    }: {
      address: string;
    }): GetContractResult<typeof ManagerABI> => {
      return getContract({
        address,
        abi: ManagerABI,
        signerOrProvider: signerOrProvider,
      });
    };

    const governor = ({
      address,
    }: {
      address: string;
    }): GetContractResult<typeof GovernorABI> => {
      return getContract({
        address,
        abi: GovernorABI,
        signerOrProvider: signerOrProvider,
      });
    };

    return {
      token,
      auction,
      manager,
      governor,
    };
  }
}
