import { BchNetworkTypes, BchNetworkDetails } from "./types";

const BITBOXSDK = require('bitbox-sdk').BITBOX;


const _hostnameProvider = () => {
  return window.location.hostname;
}

export const getNetworkTypeForWindowLocation = (hostnameProvider=_hostnameProvider): BchNetworkTypes => {
  // return "testnet";

  const hostname = hostnameProvider();

  if (hostname === "localhost" ||
      hostname.includes("demo") ||
      hostname.includes("dev")) 
  {
    return "testnet";
  }

  return "mainnet";
}


const createBitboxMainnet = (): BchNetworkDetails => {
  return {
    BBSdk: new BITBOXSDK({
      restURL: "https://rest.bitcoin.com/v2/"
    }),
    NetworkType: "mainnet",
    NetName: "bitcoincash",
    ExplorerUrlBase: "https://explorer.bitcoin.com/bch",
  }
}

const createBitboxTestnet = (): BchNetworkDetails => {
  return {
    BBSdk: new BITBOXSDK({
      restURL: "https://trest.bitcoin.com/v2/"
    }),
    NetworkType: "testnet",
    NetName: "bchtest",
    ExplorerUrlBase: "https://explorer.bitcoin.com/tbch",
  }
}


export const getBbEnvForNetworkType = (networkType: BchNetworkTypes): BchNetworkDetails => {
  switch (networkType) {
    case "mainnet": {
      return createBitboxMainnet();
    }

    case "testnet":
    default: {
      return createBitboxTestnet();
    }
  }
}


const initBbEnv = (bchNetworkDetails: BchNetworkDetails): void => {
  _BBENV.BBSdk = bchNetworkDetails.BBSdk;
  _BBENV.NetName = bchNetworkDetails.NetName;
  _BBENV.NetworkType = bchNetworkDetails.NetworkType;
}



const _bchNetworkType = getNetworkTypeForWindowLocation();
const _BBENV = getBbEnvForNetworkType(_bchNetworkType);


initBbEnv(_BBENV);


export const getBitBoxForEnv = (): BchNetworkDetails => {
  return _BBENV;
}