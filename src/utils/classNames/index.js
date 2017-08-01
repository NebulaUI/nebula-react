const reducer = (acc, arg) => (
  typeof arg === 'object'
    ? `${acc} ${Object.values(arg)[0] && Object.keys(arg)[0]}`
    : `${acc} ${arg}`
  )

const classNames = (...args) => args.reduce(reducer, '').trim()

export default classNames
