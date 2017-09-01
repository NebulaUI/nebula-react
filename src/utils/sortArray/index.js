const identity = item => item

function normaliseValue(value) {
  if (typeof value === 'string') {
    return String(value).toLowerCase()
  }

  if (value instanceof Date && !isNaN(value.valueOf())) {
    return value.valueOf()
  }

  if (value.props) {
    return value.props.children
  }

  return value
}

function select(item, selector) {
  const parts = selector.split('.')
  return parts.reduce(
    (acc, val) => ((acc[val] !== undefined) ? acc[val] : acc),
    item,
  )
}

function sortArray(array = [], selector = identity, descending = false) {
  const selectValue = typeof selector === 'string'
    ? (item => select(item, normaliseValue(selector)))
    : selector
  const compare = (a, b) => {
    const aValue = normaliseValue(selectValue(a))
    const bValue = normaliseValue(selectValue(b))

    if (aValue > bValue) {
      return descending ? -1 : 1
    }
    if (aValue < bValue) {
      return descending ? 1 : -1
    }
    return 0
  }

  return array.sort(compare)
}

export default sortArray
