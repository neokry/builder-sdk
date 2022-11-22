import { defineConfig } from "@dethcrypto/eth-sdk";

export default defineConfig({
  contracts: {
    mainnet: {
      manager: "0xd310a3041dfcf14def5ccbc508668974b5da7174",
      token: "0x3e8c48b46c5752f40c6772520f03a4d8eda49706",
      auction: "0x5e97b8cfea96d7571585f79922d134003bd4dc60",
      treasury: "0xc8f8ac74600d5a1c1ba677b10d1da0e7e806cf23",
      governor: "0xb42d8e37dcba5fe5323c4a6722ba6ded9e8e84da",
    },
    goerli: {
      manager: "0x0E9F3382Cf2508E3bc83248B5b4707FbA86D7Ee0",
      token: "0x850356153abBdFA1B473e2D86F2DF11a85B408B8",
      auction: "0xaF1927E33474686879C3438d7D22D2929C9F539F",
      treasury: "0x0a41432aBC5B06e4064Fc7091EbAd8c64a97924A",
      governor: "0x8dA6F93a088FF6f47B239ed98d11bBAcdf7f888E",
    },
  },
});
