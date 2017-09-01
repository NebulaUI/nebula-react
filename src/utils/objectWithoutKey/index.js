const objectWithoutKey = (object, key) => {
  const { [key]: deletedKey, ...otherKeys } = object
  return otherKeys
}

export default objectWithoutKey
