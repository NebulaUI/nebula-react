const toClassName = (existingClassName, nextClassName) =>
  `${existingClassName} o-grid--gutter-${nextClassName}`

const buildGutterClassName = gutter => (
  typeof gutter === 'string'
    ? `o-grid--gutter-${gutter}`
    : gutter.reduce(toClassName, '').trim()
)

export default buildGutterClassName
