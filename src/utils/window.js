const addEventListener = (e, cb) =>
  window.addEventListener(e, cb)

const removeEventListener = (e, cb) =>
  window.removeEventListener(e, cb)

export {
  addEventListener,
  removeEventListener
}
