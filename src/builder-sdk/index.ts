import { Signer, providers } from "ethers";
import { getMainnetSdk, getGoerliSdk } from ".dethcrypto/eth-sdk-client";
import { ethers } from "ethers";

export type MainnetSDKType = ReturnType<typeof getMainnetSdk>;
export type GoerliSDKType = ReturnType<typeof getGoerliSdk>;
export type SDKType = MainnetSDKType | GoerliSDKType;

export type SDKOptions = {
  signerOrProvider: Signer | providers.Provider;
  network: 1 | 5;
};

export class BuilderSDK {
  static connect({ signerOrProvider, network }: SDKOptions): SDKType {
    switch (network) {
      case 1:
        return getMainnetSdk(signerOrProvider);
      case 5:
        return getGoerliSdk(signerOrProvider);
    }
  }
}

const mainnetProvider = ethers.getDefaultProvider("mainnet");
const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider);
const { token } = BuilderSDK.connect({
  signerOrProvider: defaultSigner,
  network: 1,
});
