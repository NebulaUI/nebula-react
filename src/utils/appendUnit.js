const appendUnit = (value, unit) => (
  value.endsWith && value.endsWith(unit)
    ? value
    : `${value}${unit}`
)

export default appendUnit
