const isObject = val => typeof val === 'object'

const fromString = (str, segment) => `${str} ${segment}`

const fromObject = (str, segment) => {
  const head = Object.values(segment)[0]

  if (!head) {
    return str
  }

  return `${str} ${Object.keys(segment)[0]}`
}

const appendClassName = (str, segment) => {
  if (isObject(segment)) {
    return fromObject(str, segment)
  }

  return fromString(str, segment)
}

const toClassName = (existingClassName, nextClassName) => {
  if (!nextClassName) {
    return existingClassName
  }

  return appendClassName(existingClassName, nextClassName)
}

const classNames = (...args) => args.reduce(toClassName)

export default classNames
