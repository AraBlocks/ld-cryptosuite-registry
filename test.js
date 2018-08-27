const registry = require('./')
const assert = require('assert')

for (const k of registry) {
  if ('function' === typeof registry[k]) {
    continue
  }

  assert(k && k.length)
  assert(registry[k] && 'string' === typeof registry[k])
  assert(true === registry.has(registry[k]),
  `${k} not in registry`)
}

console.log('ok')
