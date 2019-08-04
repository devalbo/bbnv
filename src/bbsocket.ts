import { getNetworkTypeForWindowLocation, getBbEnvForNetworkType } from "./bbnv";


let bitboxSocket: any;

export const getBitBoxSocketForEnv = () => {
  if (!bitboxSocket) {
    const network = getNetworkTypeForWindowLocation();
    const bb = getBbEnvForNetworkType(network);
    const bbSdk = bb.BBSdk;

    let bitboxSocketUrl = "";

    switch (network) {
      case "mainnet": {
        bitboxSocketUrl = "https://rest.bitcoin.com";
        break;
      }
      case "testnet": {
        bitboxSocketUrl = "https://trest.bitcoin.com";
        break;
      }
      default:
        throw new Error("Invalid network type: " + network)
    }

    bitboxSocket = new bbSdk.Socket(bitboxSocketUrl);
  }

  return bitboxSocket;
}