const getDescendantValue = (node) => {
  if (Array.isArray(node)) {
    return getDescendantValue(node[0].props.children)
  }

  return (node instanceof Date || typeof node !== 'object')
    ? node
    : getDescendantValue(node.props.children)
}

export default getDescendantValue
