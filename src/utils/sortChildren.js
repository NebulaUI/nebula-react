import getDescendantValue from './getDescendantValue'

const sortStrings = (descending, a, b) => {
  if (descending) {
    return a < b
      ? 1
      : -1
  }

  return a < b
    ? -1
    : 1
}

const sortNumbers = (descending, a, b) => (
  descending
    ? b - a
    : a - b
)

const getValue = (node, index) => {
  const value = getDescendantValue(node.props.children[index])
  return typeof value === 'string'
    ? value.toLowerCase()
    : value
}

const sortChildren = (items, sortedBy) => {
  const compareFn = (a, b) => {
    const aValue = getValue(a, sortedBy.index)
    const bValue = getValue(b, sortedBy.index)

    if (isNaN(aValue) && (isNaN(bValue))) {
      return sortStrings(sortedBy.descending, aValue, bValue)
    }

    return sortNumbers(sortedBy.descending, aValue, bValue)
  }

  return items.sort(compareFn)
}

export default sortChildren
