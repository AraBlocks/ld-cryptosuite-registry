'use strict'

// https://w3c-dvcg.github.io/lds-ed25519-2018/
const kEd25519VerificationKey2018 = 'Ed25519VerificationKey2018'

// https://w3c-dvcg.github.io/lds-koblitz2016/
const kEdDsaSAPublicKeySecp256k1 = 'EdDsaSAPublicKeySecp256k1'

// https://w3c-dvcg.github.io/lds-rsa2018/
const kRsaVerificationKey2018 = 'RsaVerificationKey2018'

// ld-cryptosuite-registry set
const registry = new Set([
  kEd25519VerificationKey2018,
  kEdDsaSAPublicKeySecp256k1,
  kRsaVerificationKey2018,
])

// exported constants
Object.assign(registry, {
  kEd25519VerificationKey2018,
  kEdDsaSAPublicKeySecp256k1,
  kRsaVerificationKey2018,
})

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
