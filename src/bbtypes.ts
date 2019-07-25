
export interface TxHexInput {
  readonly scriptSig: any
  readonly sequence: number
  readonly txid: string
  readonly vout: number
}

export interface TxHexOutputScriptPubKey {
  readonly addresses: string[]
  readonly asm: string
  readonly hex: string
  readonly type: string
  readonly value: number
}

export interface TxHexOutput {
  readonly n: number
  readonly value: number
  readonly scriptPubKey: TxHexOutputScriptPubKey
}

export interface TxHexDetails {
  readonly txid: string
  readonly vin: TxHexInput[]
  readonly vout: TxHexOutput[]
}
