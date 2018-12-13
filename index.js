'use strict'

// https://w3c-ccg.github.io/didm-veres-one/
const kEd25519SignatureAuthentication2018 = 'Ed25519SignatureAuthentication2018'

// https://w3c-dvcg.github.io/lds-ed25519-2018/
const kEd25519VerificationKey2018 = 'Ed25519VerificationKey2018'

// https://w3c-dvcg.github.io/lds-koblitz2016/
const kEdDsaSAPublicKeySecp256k1 = 'EdDsaSAPublicKeySecp256k1'

// https://w3c-dvcg.github.io/lds-rsa2018/
const kRsaVerificationKey2018 = 'RsaVerificationKey2018'

// https://w3c-dvcg.github.io/lds-merkleproof2017/
const kMerkleProof2017 = 'MerkleProof2017'

// https://github.com/uport-project/ethr-did
const kSecp256k1VerificationKey2018 = 'Secp256k1VerificationKey2018'

// https://github.com/uport-project/ethr-did
const kSecp256k1SignatureAuthentication2018 = 'Secp256k1SignatureAuthentication2018'

const kEcDsaSha256PublicKey2018 = 'EcDsaSha256PublicKey2018'
const kEcDsaSha512PublicKey2018 = 'EcDsaSha512PublicKey2018'

// ld-cryptosuite-registry set
const registry = new Set([
  kEd25519SignatureAuthentication2018,
  kEd25519VerificationKey2018,

  kEdDsaSAPublicKeySecp256k1,
  kRsaVerificationKey2018,
  kMerkleProof2017,

  kSecp256k1VerificationKey2018,
  kSecp256k1SignatureAuthentication2018,

  kEcDsaSha256PublicKey2018,
  kEcDsaSha512PublicKey2018
])

// exported constants
Object.assign(registry, {
  kEd25519SignatureAuthentication2018,
  kEd25519VerificationKey2018,

  kEdDsaSAPublicKeySecp256k1,
  kRsaVerificationKey2018,
  kMerkleProof2017,

  kSecp256k1VerificationKey2018,
  kSecp256k1SignatureAuthentication2018,

  kEcDsaSha256PublicKey2018,
  kEcDsaSha512PublicKey2018
})

// exported values
Object.assign(registry, {
  Ed25519SignatureAuthentication2018: kEd25519SignatureAuthentication2018,
  Ed25519VerificationKey2018: kEd25519VerificationKey2018,

  EdDsaSAPublicKeySecp256k1: kEdDsaSAPublicKeySecp256k1,
  RsaVerificationKey2018: kRsaVerificationKey2018,
  MerkleProof2017: kMerkleProof2017,

  Secp256k1VerificationKey2018: kSecp256k1VerificationKey2018,
  Secp256k1SignatureAuthentication2018: kSecp256k1SignatureAuthentication2018,

  EcDsaSha256PublicKey2018: kEcDsaSha256PublicKey2018,
  EcDsaSha512PublicKey2018: kEcDsaSha512PublicKey2018
})

// disable destructive methods
Object.assign(registry, {
  add: warn('add'),
  clear: warn('clear'),
  delete: warn('delete'),
})

function warn(method) {
  return () => {
    console.warn("ld-cryptosuite-registry: warn: %s does nothing", method)
  }
}

module.exports = registry
