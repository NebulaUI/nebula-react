const buildStrFromObj = obj => (
  Object.values(obj)[0] ? Object.keys(obj)[0] : ''
)

const buildStr = (str, segment) =>
  `${str} ${typeof segment === 'object'
    ? buildStrFromObj(segment)
    : segment}`.trim()

const reducer = (acc, arg) => (arg ? buildStr(acc, arg) : acc)

const classNames = (...args) => args.reduce(reducer)

export default classNames
