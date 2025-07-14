---
title: iOS
---

# NavigationBar

<ios-navigation-bar></ios-navigation-bar>

<!-- <script type="module">
import { define } from './vanjs/elements.js'
// import { styledTags } from './vanjs/styled.js'
// import { App } from './ios/app.js'
// import { iOSProgressView } from './ios/progressView.js'
// import { iOSAsyncList } from './ios/asynclist.js'
// import { iOSNavigationBar } from './ios/navigationBar.js'

// const { div } = styledTags;

// const mockLoader = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(['Item 1', 'Item 2', 'Item 3']);
//     }, 3);
//   });

// const githubLoader = () => {
//   return fetch('./data/github.json')
//     .then((res) => {
//       if (!res.ok) throw new Error('Api error')
//       return res.json()
//     })
//     .then((data) => data.map((item) => item.name))
// }

// const delay = (seconds, promiseFn) => {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       const start = promiseFn(...args)
//       const delay = new Promise((r) => setTimeout(r, seconds * 1000))

//       Promise.all([start, delay])
//         .then(([result]) => resolve(result))
//         .catch(reject)
//     })
//   }
// }

// const mockList = () => iOSAsyncList('Screen', mockLoader)
// const githubList = () => iOSAsyncList('Github', delay(2,githubLoader))

// App(githubList()).mountIn('mock-github-app-container');
// App(mockList()).mountIn('mock-app-container');

const p = { van.tags }
define("hello-world", () =>
  p({ style: "color:red;font-size:20px" }, "Hello world!")
);
</script> -->

<script type="module">
import { styledTags } from './vanjs/styled.js'
import { define } from './vanjs/elements.js'
import { iOSNavigationBar } from './ios/navigationBar.js'

define("ios-navigation-bar", () => iOSNavigationBar('NavigationBar', () => alert('Back button clicked')));
</script>
