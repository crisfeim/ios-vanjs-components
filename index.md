---
title: iOS
---

## NavigationBar

<ios-navigation-bar></ios-navigation-bar>

## List

<ios-app>
    <ios-list></ios-list>
</ios-app>

## Async list

<ios-app>
    <ios-async-list></ios-async-list>
</ios-app>

<!-- <script type="module">
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
</script> -->

<script type="module">
import { styledTags } from './vanjs/styled.js'
import { define } from './vanjs/elements.js'
import { App } from './ios/app.js'
import { iOSNavigationBar } from './ios/navigationBar.js'
import { iOSAsyncList } from './ios/asynclist.js'
import { iOSList } from './ios/list.js'

const { p, slot } = styledTags

const mockLoader = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Item 1', 'Item 2', 'Item 3']);
    }, 5000);
});


const mockAsyncList = () => iOSAsyncList('Async List', mockLoader)
define("ios-navigation-bar", () => iOSNavigationBar('NavigationBar', () => alert('Back button clicked')));
define("ios-app", () => App(slot()))
define('ios-async-list', mockAsyncList)
define('ios-list', () => iOSList('List', ['Item 1', 'Item 2']))
</script>
