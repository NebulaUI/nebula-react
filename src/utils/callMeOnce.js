const callMeOnce = (() => {
  let executed = false
  return (cb) => {
    if (!executed) {
      executed = true
      cb()
    }
  }
})()

export default callMeOnce
