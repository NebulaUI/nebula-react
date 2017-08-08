const addEListener = (e, cb) =>
  window.addEventListener(e, cb)

const removeEListener = (e, cb) =>
  window.removeEventListener(e, cb)

export {
  addEListener,
  removeEListener
}
