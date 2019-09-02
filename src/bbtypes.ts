
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


export interface TxFormat {
  txid: string
  size: number
  // "txid": "194dab5ef195119049649326b98b781a068bf01a8483937fec0ee38661aebeb0",
  // "version": 1,
  // "locktime": 0,
  // "size": 244,
  // "vsize": 244
}

export interface TxInput {
  txid: string
  n: number
  script: string
  sequence: number

  // "txid": "e9d834a319b7671ecad9ae15ce01601048f7b56506e9ad35a5438afbdaceb855",
  // "n": 1,
  // "script": "304402204b94cbcbce2671a897e93f7963bf49722a8c51274e53ce2f508705fa700087410220095b9d4025c2ca4f4569e3a6071050a233c29a14fb4dc10d4e314626f042f93641 031a2a3936d87a9b90dc10d4fb53813cf8750c7a3ecc2fbac2d616d52f9194217f",
  // "sequence": 4294967294
}

export interface ScriptPubKey {
  asm: string
  hex: string
  type: string
  addresses: string[]
}

export interface TxOutput {
  satoshi: number
  value: number
  n: number
  scriptPubKey: ScriptPubKey

  // "satoshi": 5714373,
  // "value": "0.05714373",
  // "n": 1,
  // "scriptPubKey": {
  //   "asm": "OP_DUP OP_HASH160 16af5d2c0bf68b26be56d7292385ad51c59dd650 OP_EQUALVERIFY OP_CHECKSIG",
  //   "hex": "76a91416af5d2c0bf68b26be56d7292385ad51c59dd65088ac",
  //   "type": "pubkeyhash",
  //   "addresses": [
  //     "mhauEmvd9QpfBNfThU91KizwWHwkF52dMY"
  //   ]
  // }
}

export interface TxDetails {
  format: TxFormat
  inputs: TxInput[]
  outputs: TxOutput[]
}