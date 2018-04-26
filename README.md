ld-cryptosuite-registry
=======================

Linked Data Cryptographic Suite Registry as a module

## Abstract

This module exports all known linked data keys as defined in the [W3C
Linked Data Cryptographic Suite
Registry](https://w3c-ccg.github.io/ld-cryptosuite-registry/) as a `Set`
of *Key Identifier* names.

## Installation

```sh
$ npm install ls-cryptosuite-registry
```

## Usage

```js
const {
  kEd25519VerificationKey2018,
  kEdDsaSAPublicKeySecp256k1,
  kRsaVerificationKey2018,
} = require('ld-cryptosuite-registry')
```

## See Also

* [Linked Data Cryptographic Suite Registry](https://w3c-ccg.github.io/ld-cryptosuite-registry/)
* https://w3c-dvcg.github.io/lds-ed25519-2018/
* https://w3c-dvcg.github.io/lds-rsa2018/

## License

MIT
