const isString = s => typeof s === 'string'

const fromString = (p, s) => `${p}${s}`

const fromArray = (p, arr) =>
  arr.map(f => fromString(p, f)).join(' ')

const buildClassName = (prefix, className) => (
  isString(className)
    ? fromString(prefix, className)
    : fromArray(prefix, className)
)

export default buildClassName
