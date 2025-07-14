export const delay = (seconds, promiseFn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const start = promiseFn(...args)
      const delay = new Promise((r) => setTimeout(r, seconds * 1000))

      Promise.all([start, delay])
        .then(([result]) => resolve(result))
        .catch(reject)
    })
  }
}
