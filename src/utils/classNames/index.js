const buildStr = (str, segment) => (typeof segment === 'object'
  ? `${str} ${Object.values(segment)[0] ? Object.keys(segment)[0] : ''}`.trim()
  : `${str} ${segment}`)

const reducer = (acc, arg) => (arg ? buildStr(acc, arg) : acc)

const classNames = (...args) => args.reduce(reducer)

export default classNames
