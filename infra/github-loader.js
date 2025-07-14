const githubLoader = () => {
  return fetch('./data/github.json')
    .then((res) => {
      if (!res.ok) throw new Error('Api error')
      return res.json()
    })
    .then((data) => data.map((item) => item.name))
}
