const removeFalsy = a => (
  Array.isArray(a)
    ? a.filter(x => x)
    : a
)

export default removeFalsy

