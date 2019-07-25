
export type BchNetworkTypes = "mainnet" | "testnet"

export type NetworkName = "bitcoincash" | "bchtest"

export interface BchNetworkDetails {
  BBSdk: any
  NetworkType: BchNetworkTypes
  NetName: NetworkName
  ExplorerUrlBase: string
}
